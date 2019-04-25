//task1

function printX(n){
let raw = "";
for(i=0;i<n; i++){
	for(j=0; j<n; j++){
if(i===j || i === n-j-1){
raw += "* ";
} else{
raw += "  ";
} 
}raw += "\n"; 
}
console.log(raw)
} 


//task 3

function task3(arr){
let numberCount=0
let stringCount =0
for (let i = 0; i < arr.length; i++){
if(typeof(arr[i])==="number"){
numberCount++
} else {
stringCount++
}
}
console.log(`Numbers: ${numberCount}, Strings: ${stringCount}`)
}

//task4
function task4(str) {
    let arr = str.split(" ")
    let arrOfLength = []
    arr.forEach(lengthOfString)

    function lengthOfString(item) {
        arrOfLength.push(item.length)
    }


    let sortedArr = arrOfLength.slice();
    sortedArr.sort(function (x, y) { return (y - x) });
    let index = arrOfLength.lastIndexOf(sortedArr[0])
    return arr[index];

}
//task 5

function task5(str){
    let index =0;
    let substring;
    let maxlength =0;
    let result =""
    for(let i =0;i< str.length;i++){
        substring=str.slice(index,i)
    if(substring.includes(str[i])){
        {if(substring.length > maxlength)
            maxlength = substring.length
            result = substring;
        }
        index = i
    }
                
        
      
    }    
    return result
    }
