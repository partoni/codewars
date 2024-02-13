function sortarray(array){
let sortArr = [...array]
let oddNum = []
for(let i=0;i<sortArr.length;i++){
    if(sortArr[i]%2!==0){
        oddNum.push(sortArr[i])
        delete sortArr[i]
    }
}
oddNum.sort((a,b)=>a-b)
for(let i=0;i<sortArr.length;i++){
    if(sortArr[i]==undefined){
        sortArr[i]=oddNum[0]
        oddNum.shift()
    }
}
return sortArr
}
console.log(sortarray([ 5, 3, 2, 8, 1, 4 ]));

