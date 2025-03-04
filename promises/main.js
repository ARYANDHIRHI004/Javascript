console.log('Hi');
const data =  fetch('https://api.freeapi.app/api/v1/public/randomproducts')
data.then((res)=>res.json())

data.catch((err)=>{})
console.log('bye');
