function flatten(...arg){

let result =[]
for (let i=0;i<arg.length;i++){
    if(Array.isArray(arg[i])){
        result =[...result,...flatten(...arg[i])]
    }else{result.push(arg[i])}
    
}
    return result
}
// flatten(1, [2, 3], 4, 5, [6, [7]])
console.log(flatten('a', ['b', 2], 3, null, [[4], ['c']]));