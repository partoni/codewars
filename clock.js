function past(h, m, s){
let today = new Date()


let midnight = today.setHours(0,0,0,0)
return today.setHours(h,m,s,0)-midnight
    //#Happy Coding! ^_^
  }

  console.log(past(0,1,1));  // 61000