

function rot13(str){
    let arr_en = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    
    let rot = str.split('').map((item,index,arr)=>{
        console.log(item);
       let indexLetter = arr_en.indexOf(item.toLowerCase()) 
       console.log(indexLetter);
if(indexLetter!==-1){
    
    let newIndexLetter = (indexLetter+13>=26)?(indexLetter+13)-26:indexLetter+13
if(arr_en[indexLetter]!==item) return arr_en[newIndexLetter].toUpperCase()
    return arr_en[newIndexLetter]
}
return item
    })
    return rot.join('')
}
console.log(rot13('abcdefghijklmnopqrstuvwxyz'));
