function validatePIN (pin) {
    //return true or false
    console.log(pin.length);
    if(pin.trim().length==4 || pin.trim().length==6){
       for(let num of pin)
        if(isNaN(+num)) return false
         return true
    }
    return false
    
  }
  console.log(validatePIN('123 '));
// let num='1'
// console.log(isNaN(+'q'));
// console.log(num.match(/[0-9]/));