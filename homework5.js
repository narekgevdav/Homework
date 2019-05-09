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
