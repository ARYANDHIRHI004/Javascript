let arr = [1,2,3,4,5,6,7,8,9,10];

function negativeIndex(array){
    return new Proxy(array, {
        get(target, prop){
            const index = Number(prop)
            if (index < 0) {
                return target[index + target.length]
            }
            return target[index]
        },
        set(target, prop, value){
            const index = Number(prop)
            if (index < 0) {
                target[index + target.length] = value;
            }
            else{
                target[index] = value
            }
        }
    })
}

const newArray = negativeIndex(arr);

console.log(newArray[-1]);
newArray[-1] = "aryan"
console.log(newArray[-1]);
console.log(newArray);
console.log(arr);
