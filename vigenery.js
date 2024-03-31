let checkKey = 'погода'

let alphabet  = "абвгдежзиклмнопрстуфхцчшщъыьэюя"
class VigenèreCipher{
    constructor(key,str){
        this.key=key.split('')
        this.alphabet = str.split('')
    }
    getMatrix(){
        let a = [...this.alphabet]
        let matrix = []
        
        for(let i=0;i<a.length;i++){
           matrix.push([...a]) 
           let rest = a.shift()
            a.push(rest)
           }
    return matrix
    }
   #fullKey(str){
        let key = []
        let k = 0;
        for (let i = 0; i < str.length; i++) {
            if(i%this.key.length===0){
                k=0
            }
            key.push(this.key[k])
            k++
        }
        return key.join('')
    }
    encode(str) {
        let enCodedStr = []
        let fullKey = this.#fullKey(str)
        
        for(let i = 0;i<str.length;i++){
            let indexStr = this.alphabet.indexOf(str[i])
            if(indexStr==-1) {
                enCodedStr.push(str[i])
            }else{
                let indexKey = this.alphabet.indexOf(fullKey[i])
                enCodedStr.push(this.getMatrix()[indexStr][indexKey])
            }
           
        }
        return enCodedStr.join('')
        
        
      //...
    };
    decode(str) {
        let deCodedStr = []
        let fullKey = this.#fullKey(str)
        for(let i = 0;i<str.length;i++){
            let indexKey = this.alphabet.indexOf(fullKey[i])
            let indexStr = this.getMatrix()[indexKey].indexOf(str[i])
            if(indexStr==-1) {
                deCodedStr.push(str[i])
            }else{
                
                deCodedStr.push(this.alphabet[indexStr])
            }
            
        }
        return deCodedStr.join('')
      //...
    };
  }

let cipher = new VigenèreCipher('password',"abcdefghijklmnopqrstuvwxyz")
console.log(cipher.encode('Codewars'));

