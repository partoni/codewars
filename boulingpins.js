function bowlingPins(arr) {
    let matrix = [
        ['7',' ','8',' ','9',' ','10'],
        [' ','4',' ','5',' ','6',' ' ],
        [' ',' ','2',' ','3',' ',' '],
        [' ',' ',' ','1',' ',' ',' ']
    ]
    matrix.forEach((el,index,array)=>{
        for(let i = 0;i<el.length;i++){
            if(arr.includes(+el[i]))array[index][i]=' '
            if(+el[i]>0)array[index][i]='I'
        }
       matrix[index]= array[index].join('')
    })
      return matrix.join('\n')       
  }