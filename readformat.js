function formatDuration (seconds) {
    // Complete this function
    if(!seconds)return 'now'
    let couple = {}
    
    let remain=seconds;

    if(seconds>=31536000){
        
        (Math.floor(remain/31536000)!==1)?couple.years=Math.floor(remain/31536000):couple.year=Math.floor(remain/31536000)
        remain= seconds%31536000
    }
    if(remain>=86400){
       ( Math.floor(remain/86400)!==1)?couple.days=Math.floor(remain/86400):couple.day=Math.floor(remain/86400)
        remain=remain%86400
        }
    if(remain>=3600){
        (Math.floor(remain/3600)!==1)?couple.hours=Math.floor(remain/3600):couple.hour=Math.floor(remain/3600)
        remain=remain%3600
    }
    if(remain>=60){
        
       (Math.floor(remain/60)!==1)?couple.minuts=Math.floor(remain/60):couple.minute=Math.floor(remain/60)
        remain = remain%60
    }
    
    if(remain)remain!==1?couple.seconds = remain:couple.second = remain
    let arr = Object.keys(couple)
    let readFormat = `${couple[arr[0]]} ${arr[0]}`
    for(let i=1;i<arr.length;i++){
        if(i!==arr.length-1){
            readFormat+=`, ${couple[arr[i]]} ${arr[i]}`  
        }else{
            readFormat+=` and ${couple[arr[i]]} ${arr[i]}`
        }
    
    }
return readFormat
}

  console.log(formatDuration(0));
  