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
