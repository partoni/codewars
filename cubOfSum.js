function findSummands(n){
    if(n===1)return[1]
    let cub = n**n
    let odd = []
    let result
    
    for(let i=1;i<=cub;i++){
      if(i%2!==0) odd.push(i)
    }
   
    for(let i=0;i<odd.length;i++){
        let sum = 0
        let arrayNum = []
        
        for(let k=0;k<n;k++){
            sum=sum+odd[i+k]
           
            arrayNum.push(odd[i+k])
        }
       if(sum==cub)result=arrayNum
    }
    return result;
  }
  console.log(findSummands(5));
  