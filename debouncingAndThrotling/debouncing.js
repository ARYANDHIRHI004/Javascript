function pataNai(fn, delay){

    let myId;
    return function(...args){
        clearTimeout(myId)
        myId = setTimeout(() => {
            fn.apply(this, args)
        }, delay);
    };
};

function greet(name){
 console.log(name);
 
}
const sachMeNahiPata = pataNai(() => greet("Aryan"), 3000);

sachMeNahiPata()
sachMeNahiPata()
sachMeNahiPata()
sachMeNahiPata()


