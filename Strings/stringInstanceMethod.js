//1. Strign.prototype.at()
// It takes an integer value and returan a new string. This m ethod alows for positive and negative index
const str1 = "Aryan"
// console.log(str1.at(-1));

if(!String.prototype.myAt){
    String.prototype.myAt = function(value){
        value = Number(value)
        if(value >= this.lenght || value < -this.lenght){
            return undefined
        }
        else{
            if(value < 0){
                return this[value+this.length]
            }
            else{
                return this[value]
            }
        }
        
    }
}
// console.log(str1.myAt(-1));


