//let text = "In a village of La Mancha, the name of which I have no desire to call to mind, there lived not long since one of those gentlemen that keep a lance in the lance-rack, an old buckler, a lean hack, and a greyhound for coursing. An olla of rather more beef than mutton, a salad on most nights, scraps on Saturdays, lentils on Fridays, and a pigeon or so extra on Sundays, made away with three-quarters of his income."
let text ="e e e e DDD ddd DdD: ddd ddd aa aA Aa, bb cc cC e e e"
function topThreeWords(text) {
    
    let letters = text.trim().split('')
    let words = []
    let newletters = []

  for(let i=0;i<letters.length;i++){
    
    if(letters[i].toLowerCase().match(/[a-z']/)!==null){
      newletters.push(letters[i].toLowerCase())
    }else if(newletters.length!==0){
      words.push(newletters.join(''))
      newletters =[]}
      
      
  }
   
   if(newletters.length!==0)words.push(newletters.join(''))
  
    let reting = {}
    
    for(let item of words){
      
      if(reting[item]){
        reting[item]+=1
      }else if(item!=="'"){
        reting[item]=1
      }
    }
    let topWords = Object.entries(reting).sort((a,b)=>a[1]-b[1]).reverse().slice(0,3)
     return topWords.map(item=>item[0]);
  }

  console.log(topThreeWords("  '  "));
  

 