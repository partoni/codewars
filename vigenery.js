let checkKey = 'погода'
let alphabet  = "абвгдежзиклмнопрстуфхцчшщъыьэюя"
class VigenèreCipher{
    constructor(key,str){
        this.key=key
        this.alphabet = str
    }
    fullKey(str){
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
        return this.fullKey(str);
        
        
      //...
    };
    decode = function (str) {
      //...
    };
  }

let cipher = new VigenèreCipher(checkKey,alphabet)
console.log(cipher.encode('параллелепипед'));

