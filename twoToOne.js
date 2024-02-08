
  function longest(s1, s2) {
    // your code
   
    let commonArray = (s1+s2).split('').sort((a, b) => a.localeCompare(b))
    let result =`${commonArray[0]}`
    for(let i=1;i<commonArray.length;i++){
        if(commonArray[i]!==commonArray[i-1])result+=commonArray[i]
    }
    // let result = new Set(commonArray)
    console.log(result);
  }
  longest('anxnsdh','jhdbdhgd')