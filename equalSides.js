function findEvenIndex(arr)
{
  //Code goes here!
 
  let sum=arr.reduce((acc,item)=>acc+item,-arr[0])
  if(sum===0)return 0
  let leftSum = arr[0]
  for(let i=1;i<arr.length;i++){
    
    let rightSum = 0
    for(let k=i+1;k<arr.length;k++){
    rightSum+=arr[k]
  }
    console.log("rightSum--",rightSum);
    console.log("leftSum---",leftSum);
   if(rightSum===leftSum) return i
    leftSum+=arr[i]
}
  return -1
}
console.log(findEvenIndex([1,2,3,4,3,2,1]));
