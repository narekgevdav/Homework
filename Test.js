import React from "react";
import Button from "@material-ui/core/Button";
import firebase from "firebase";

export default function Test() {
  const db = firebase.firestore();

  let testValue;
  let bookvalues;

  function handleOnClick() {
    const user = firebase.auth().currentUser;
    let booksref = db.collection("bookslibrary");
    let userinforef = db.collection("userinfo").doc(user.uid);
    userinforef
      .get()
      .then(function(doc) {
        if (doc.exists) {
          testValue = doc.data().myBooks;
          console.log(testValue);
          for (let i = 0; i < testValue.length; i++) {
            var query = booksref
              .where("ISBN", "==", testValue[i])
              .get()
              .then(function(querySnapshot) {
                querySnapshot.forEach(function(doc) {
                  // doc.data() is never undefined for query doc snapshots
                  console.log(doc.id, " => ", doc.data());
                });
              });
          }
        } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
        }
      })
      .catch(function(error) {
        console.log("Error getting document:", error);
      });
  }

  return (
    <Button
      fullWidth
      variant="contained"
      color="primary"
      onClick={handleOnClick}
    >
      test
    </Button>
  );
}
