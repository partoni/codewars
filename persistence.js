function persistence(num) {
  
    //code me
   let result = 0
   function repeat(num){
    console.log(num);
     if(num<10) return 
     let res = String(num).split('').reduce((acc,item)=>acc*item)
     result++
     repeat(res)
   }
   repeat(num)
  return result
 }
 console.log(persistence(66));
// console.log(String(345).split('').reduce((acc,item)=>acc*item));