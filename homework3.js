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

//task 6

function task6(str){
    let result =""
    let substring =""
    let i =0;
    while( i< str.length){
        if((str.length-i)/3 >= 1){
        substring = str[i +1] + str[i+2] + str[i]
        result += substring
        i = i+3
        } else{
            result += str.slice(i)
            break;
        }

    }
    return result
}

function task7(arr){
    let result = 1
    let positive = 0
    if(arr.length <2){
        return "Invalid Argument"
    } else{
    arr.forEach(element)
    function element(item){
    
       let sortedArr = item.slice()
       sortedArr.sort(function (x, y) { return (x - y) });
       if(sortedArr[0]<0){
           result *=sortedArr[0]
       } else{
           positive++           
       }

    }
    if(positive === arr.length){
        return "No negatives"
    } else {
        return result
    }

   
}
}
//task8
function task8(arr){
    result = []
    if(arr.length<=3){
        result.push(arr);
    } else{
        for(let i = 1; i< arr.length;i++){
            for(let j = 2; j<arr.length;j++){
                result.push(arr[0],arr[i],arr[j])
            }
        }
        arr.shift();
        result = result + task8(arr)
        
    }
return result
    
}
