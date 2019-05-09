// task1

function task1(arr,i =0){
    if(i<arr.length){
        arr[i]=arr[i+1]
        i++
        task1(arr,i)
    }
    else{
        arr.pop()
    }
    return arr   

}

//task2
function task2(arr, result = []){
    for(let i=0; i<arr.length; i++){
        const item = arr[i];
        if(Array.isArray(item)){
            task2(item, result)
        }
        else {
            result.push(arr[i])
        }
    }
    return result

}

//task3

function task3(num,sum=0){
    
    if(num>10){
    for(let i=0;i<String(num).length;i++){
    sum += Number(String(num)[i])
    }
    return task3(sum)
}   else{
    return num
}
}

    
//task4
function task4(arr, num) {
    if(num != 0) {
        if(num > 0) {
            arr.push(arr.shift());
            return task4(arr, --num);
        } else {
            arr.unshift(arr.pop());
            return task4(arr, ++num);
        }
    }
    return arr;
}
