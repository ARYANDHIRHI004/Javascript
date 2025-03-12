import fs  from "fs";

console.log('Hi');

const contents = fs.writeFileSync("./promises/promisePractice/hello.txt", 'utf-8');

console.log('Bye');

