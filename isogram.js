function isIsogram(str){
    if(str==='') return true
    let arrLetters = str.split('')
    for(let i=0;i<arrLetters.length;i++){
      let letter = arrLetters[i]
      for(let x=i+1;x<arrLetters.length;x++){
        if(letter.toUpperCase()===arrLetters[x].toUpperCase())return false
      }
    }
    return true
  }
  console.log(isIsogram(''))
  console.log(isIsogram('pari'))
  console.log(isIsogram('parir'))
  console.log(isIsogram('pari'))