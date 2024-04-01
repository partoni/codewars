function factorial(n){
    // Add some code
    let res = 1n
    for(let i = 1;i<=n;i++){
      res*=BigInt(i)
    }
   
    
    return String(res)
  }
  factorial(1024) 

