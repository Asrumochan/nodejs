
const fs=require('fs')

// WRITE FILE   :

// synchronously 
// fs.writeFileSync("./test.txt","Asumochan")

// asynchronously
// fs.writeFile("./test.txt","Hello World",(err)=>{})

// READ FILE :

// synchronously 

// const result = fs.readFileSync("./test.txt","utf-8")
// console.log(result)

// asynchronously
// fs.readFile("./test.txt","utf-8",(err,res)=>{
//     if (err) {
//         console.log('error',err);
//     }
//     else{
//         console.log(res)
//     }
// });

// APPEND FILE :

// synchronously
// fs.appendFileSync("./text.txt","sdfdas")

// asynchronously
// fs.appendFile("./text.txt",`\n sdfdas`,(err)=>{})

//COPY FILE:

// fs.cpSync("./text.txt","./copy.txt")

// DELETE FILE:

// fs.unlinkSync("./text.txt")


//DIRECTORY 
// fs.mkdirSync("myFile/a/b",{recursive:true})
// const a=fs.readdirSync("myFile/a")
// console.log(a)
