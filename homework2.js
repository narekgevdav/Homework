//task 1
function task1(num) {
    let counter = 0;
    for (let i = 1; i <= num; i++) {
        if (num % i == 0) {
            counter++
        }
    }
    if (counter <= 2) {
        console.log("yes");
    } else {
        console.log("no");
    }
}

//task2
function task2(n){
    let arr = [0,1];
    for(let i =2;i<n+1; i++){
        arr.push(arr[i-2]+arr[i-1])
    }
    console.log(arr[n]);
}

//task3
function task3(n){
    let arr = [0,1];
    for(let i =2;i<n+1; i++){
        arr.push(arr[i-2]+arr[i-1])
    }
    console.log(arr);
}

//task4

function task4(num) {
    if (num == 0) {
        console.log("Cannot calculate")
    }
    else {
        let str = num.toString();
        let product = 1
        let sum = 0;
        for (let i = 0; i < str.length; i++) {
            sum = sum + Number(str[i]);
            product = product * Number(str[i]);
        }
        if (product % sum == 0) {
            console.log(`Quotient is ${product / sum}`)
        } else {
            console.log(`Remainder is ${product % sum}`)
        }
    }
}
//task 9
function task9(a,b,num){
    let interval = (b-a)/(num-1)
    let arr =[]
    for(i=1; i <= num; i++){
        arr.push(a)
        a = a+interval;
    }
    return arr;
}
//task 10
function task10(arr){

    let sortedArray = arr.slice();
        sortedArray.sort(function (x, y) { return (y - x) });
       
    return arr.indexOf(sortedArray[1]);

}
//task 11


    function task11(arr, padAmount, repeat){
        array = arr.slice();
    
        if(padAmount >arr.length){
            console.log("Invalid padding amount")
        } else{
            for(let i = 0; i < repeat; i++){
                    array.unshift(arr.slice(0,padAmount));
                    array.push(arr.slice(arr.length-padAmount))
    
                }
            }
            return array.flat();
    
        } 


