//task 1
function task1(arr, num){
    result = [];
    
    function check(item){
    return item > num
    }
    result = arr.filter(check)
    if (result.length > 0){
        return result;
    } else {
        return "Such values do not exist."
    }
}
 

//task 2

function task2(a,b){
arr = [];
result =""

for(let i = a; i <=b; i++){
    let counter =0
    for(let j = 0; j< String(i).length;j++){
    if (String(i)[j]%2 === 0){
        counter++
    }
    }
    if(counter === String(i).length){
        arr.push(i)
    }    
}
if(arr.length > 0){
    return result = arr.join(',')

} else {
    return "Such numbers does not exist."
}
}
//task 3
function task3(num){
    let result = 1;
    if(String(num).length===1){
        if(num%2 === 1){
           result *=1;
        }
        else{
             result *=0
        }
    } else {
        if(num%2 ===1){
        result = result*(num%2)*(task3(Math.floor(num/10)))
        }else {
            result *=0
        }
    }
    return (result ===1)

}

//task 5

function task5(arr){
    let index = arr[0]-1
    for(let i =0; i< arr.length-1; i++){
        if(arr[i]> arr[i+1]){
            index = arr[i]
            break;
        }
    }
    return arr.indexOf(index)
}
