const user = {
    fname: "Aryan",
    age: 20,
    password: "123456"
}

const proxyUser = new Proxy(user, {
    get(target, prop){
        if (prop === 'password') throw new Error("Access Denied")
        return target[prop]
    },
    set(target, prop, value){
        target[prop] = value
    }
})

console.log(proxyUser.password);




