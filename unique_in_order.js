var uniqueInOrder=function(iterable){
    //your code here - remember iterable can be a string or an array
    let newArr = [iterable[0]]
    for(let i=1;i<iterable.length;i++){
      console.log(newArr[i-1]);
      if(iterable[i]!==iterable[i-1]){
        console.log("iterable[i]",iterable[i]);
        newArr.push(iterable[i])
      }
    }
    return newArr
  }
  console.log(uniqueInOrder('aabbbbsc'));