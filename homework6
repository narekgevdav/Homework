//task 1
function task1(arr){
  let max = Number.NEGATIVE_INFINITY
  for(let i = 0; i < arr.length-1;i++){
      if((arr[i]*arr[i+1])>max){
        max = arr[i]*arr[i+1]
    }
  }
  return max
}

//task 2

function task2(arr){
    let tmp = arr.slice();
    let counter = 0;
    tmp.sort((a,b)=>(a-b))
    for(i = tmp[0]+1;i<tmp[tmp.length-1];i++){
        if(arr.indexOf(tmp[i])===-1){
            counter++;
        }
    }
    return counter
}
   
   
//task 3

function task3(str){
    debugger;
    let arr = str.split(" ");
    let result = '';
    for(let i = 0; i< arr.length; i++){
        result +=`${arr[i][0]}`
    }
    return result.toUpperCase();

}

//task4

function task4(str,num){
    let arr =[];
    for(i = 0; i <=str.length-num;i++){
        arr.push(str.slice(i,i+num))
    }
    return arr.join();    

}
    


    
