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


//2. String.protopype.chatAt()
// This method of string returns a new string consist of a single char at any givn index

const str2 = "Aryan"
// console.log(str1.charAt(2));

if(!String.prototype.myCharAt){
    String.prototype.myCharAt = function(value){
        if(value < 0 || value > this.length) return ""
        return this[value]
    }
}
// console.log(str1.myCharAt(8));

//3. String.protopype.concat()
// This method of string concatenates the strign arguments to this strign and returns a new strign

const str3 = "Aryan"

if (!String.prototype.myConcat) {
    String.prototype.myConcat = function(){
        let newStr = this
        for (let i = 0; i < arguments.length; i++) {
            newStr += arguments[i]
            
        }
        return newStr
    }
}
// console.log(str3.myConcat(" ", "hello"));

//4. String.protopype.endsWith()
// This method of string determines weather a string ends with the charactoers of this string 

const str4 = "Aryan"

if(!String.prototype.myEndsWith){
    String.prototype.myEndsWith = function(str, enpPosition){
        let check;
        for (let i = 0; i < str.length; i++) {
            if(this.at(-i-1) === str.at(-i-1)){
                check = true
            }
            else{
                check = false
            }
        }
        return check  
    }
}

// console.log(str4.myEndsWith("ban"));













