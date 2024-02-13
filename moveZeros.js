let array = [ 9, 0, 9, 1, 2, 1, 1, 3, 1, 9, 0, 0, 9, 0, 0, 0, 0, 0, 0, 0 ]

function moveZeros(arr) {
    let copyArr = []
    let countZero = []
    
    for(let i=0;i<arr.length;i++){
        if(arr[i]===0){
        countZero.push(0)
        //copyArr.push(0)
      }else{
        copyArr.push(arr[i])
      }      
    }
    console.log("copyArr---",copyArr);
    return [...copyArr,...countZero]
  }
  console.log(moveZeros(array));
