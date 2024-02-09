function positiveSum(arr) {
    let sum=0

for(let i=0;i<arr.length;i++){
if(arr[i]>0)sum+=arr[i]
}
console.log(sum);
}
positiveSum([1,2,3,-4])


//     arr.reduce((acc,item)=>{
//         console.log('sum--',sum);
//         console.log('item--',item);
//       if(item>0)sum+=item
//       console.log(sum);
//     })
//     console.log(sum)
//   }