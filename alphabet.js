let arr_en = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

function alphabetPosition(text) {
   let num = []
//    let arr_en = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
   
      
  for(let k = 0;k<text.length;k++){
    console.log('size---',text[k]);
   if(arr_en.includes(text[k].toLowerCase()))num.push(arr_en.indexOf(text[k].toLowerCase()))
                  
    }
return num.join(' ')
}
   let result = alphabetPosition('I love my dad')
   console.log(result);