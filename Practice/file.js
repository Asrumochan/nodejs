const fs=require('fs')

// WRITE FILE   :

// sync call 
// fs.writeFileSync("./test.txt","Asumochan")

// async call 
// fs.writeFile("./test.txt","Hello World",(err)=>{})

// READ FILE :

const result = fs.readFileSync("./test.txt","utf-8")
console.log(result)

