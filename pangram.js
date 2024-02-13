function isPangram(string){
    //...
    let alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
    for(let i=0;i<string.length;i++){
      let ind = alphabet.indexOf(string[i].toLowerCase())
      if(ind>=0){
        alphabet.splice(ind,1)
      }
      
    }
    if(alphabet.length===0) return true
    return false
  } 
//   console.log(isPangram("The uick brown fox jumps over the lazy dog."));

  