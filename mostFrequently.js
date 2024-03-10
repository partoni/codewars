//let text = "In a village of La Mancha, the name of which I have no desire to call to mind, there lived not long since one of those gentlemen that keep a lance in the lance-rack, an old buckler, a lean hack, and a greyhound for coursing. An olla of rather more beef than mutton, a salad on most nights, scraps on Saturdays, lentils on Fridays, and a pigeon or so extra on Sundays, made away with three-quarters of his income."
let text = 'hvfhg jhugbjb, kjjb,2ffd'
function topThreeWords(text) {
    
    let letters = text.split('')
    let words = []
    let newletters = []

  for(let i=0;i<letters.length;i++){
    if(letters[i].toLowerCase().match(/[a-z]/)!==null){
      newletters.push(letters[i])
    }else if(newletters.length!==0){
      words.push(newletters.join(''))
      console.log(newletters);
      newletters =[]}
      
  }
    
  words.push(newletters.join(''))
    
      return words;
  }
  console.log(topThreeWords(text));
  
