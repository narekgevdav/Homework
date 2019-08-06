import React from "react";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import firebase from "firebase";

const options = ["Add to my books", "Read", "Will read", "Reading now"];

const ITEM_HEIGHT = 48;

export default function BookMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const user = firebase.auth().currentUser;
  const db = firebase.firestore();

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }
  function handleMyBooks() {
    const userinfo = db.collection("userinfo").doc(user.uid);
    userinfo.update({
      myBooks: firebase.firestore.FieldValue.arrayUnion("ISBN")
    });
    setAnchorEl(null);
  }
  function handleRead() {
    const userinfo = db.collection("userinfo").doc(user.uid);
    userinfo.update({
      myBooks: firebase.firestore.FieldValue.arrayUnion("ISBN"),
      read: firebase.firestore.FieldValue.arrayUnion("ISBN")
    });
    setAnchorEl(null);
  }
  function handleWillRead() {
    const userinfo = db.collection("userinfo").doc(user.uid);
    userinfo.update({
      myBooks: firebase.firestore.FieldValue.arrayUnion("ISBN"),
      willRead: firebase.firestore.FieldValue.arrayUnion("ISBN")
    });
    setAnchorEl(null);
  }
  function handleReading() {
    const userinfo = db.collection("userinfo").doc(user.uid);
    userinfo.update({
      myBooks: firebase.firestore.FieldValue.arrayUnion("ISBN2"),
      reading: firebase.firestore.FieldValue.arrayUnion("ISBN2")
    });
    setAnchorEl(null);
  }

  return (
    <div>
      <IconButton
        aria-label="more"
        aria-controls="long-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="long-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: 200
          }
        }}
      >
        <MenuItem
          key={"mybooks"}
          selected={"Add to my books"}
          onClick={handleMyBooks}
        >
          {"Add to my books"}
        </MenuItem>
        <MenuItem key={"read"} selected={"Read"} onClick={handleRead}>
          {"Read"}
        </MenuItem>
        <MenuItem
          key={"willRead"}
          selected={"Will read"}
          onClick={handleWillRead}
        >
          {"Will Read"}
        </MenuItem>
        <MenuItem
          key={"reading"}
          selected={"Reading now"}
          onClick={handleReading}
        >
          {"Reading Now"}
        </MenuItem>
      </Menu>
    </div>
  );
}
