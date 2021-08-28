const { readFileSync, writeFileSync }  = require("fs");
const { readFile, writeFile } = require("fs");

//SYNC
const first = readFileSync("./content/first.txt", "utf-8");
const second = readFileSync("./content/second.txt", "utf-8");

console.log(first, second);

writeFileSync('./content/result.txt', `Here is the result ${first}, ${second}`);

//ASYNC
readFile("./content/first.txt", "utf-8", (err, result) => {
    if (err) {
        console.log("error is ", err);
    } 
    const firstAsync = result;
    readFile("./content/second.txt", "utf-8", (err, result) => {
        if (err) {
            console.log("error is ", err);
        } 
        const secondAsync = result;
        writeFile('./content/result-async.txt', `Here is the result ${firstAsync}, ${secondAsync}`, (err, result) => {
            if (err) {
                console.log("error is ", err);
            } else {
                console.log("result is ", result);
            }
        })
    })
});
