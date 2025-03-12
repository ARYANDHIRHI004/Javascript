const pataNai = (fn, delay) => {
    let myId = null;
    return (...args) => {
        if (myId === null) {
            fn(...args);
            myId = setTimeout(() => {
                myId = null
            }, delay);
        };
    };
};


pataNai()
pataNai()
pataNai()



