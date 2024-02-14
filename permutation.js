function permutation(string) {
    let lettersArray = string.split('')
    function change(arr){
    const result = [];
    
   
    if(arr.length === 1) {
        return [[...arr]];
    }
   
    for(let i = 0; i < arr.length; i++) {
        const n = arr.shift();
        const perms = change(arr);
                for(let perm of perms) {
                       perm.push(n);
                       result.push(perm);
                    }
        arr.push(n);
    }
   
    return result;
}
let res = change(lettersArray).map(el=>el.join(''))


return Array.from(new Set(res))
};


let str ='abcd'
// function change(arr){
//     const result = [];
    
   
//     if(arr.length === 1) {
//         return [[...arr]];
//     }
   
//     for(let i = 0; i < arr.length; i++) {
//         const n = arr.shift();
//         const perms = change(arr);
//                 for(let perm of perms) {
//                        perm.push(n);
//                        result.push(perm);
//                     }
//         arr.push(n);
//     }
   
//     return result;
// }
// let res = change(['a','b','c']).map((el)=>el.join(''))
// console.log(res);



 console.log(permutation(str));





// console.log(permutation(str));