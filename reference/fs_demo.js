const fs = require('fs');
const path = require('path');

// //how to create a folder
// fs.mkdir(path.join(__dirname,"/test"), {}, err => { 
//     if(err) throw err;
//     console.log("File created");
// }); //by default these are asynchronus, so it takes callbacks

//Create and write to file

// fs.writeFile(path.join(__dirname,"/test", "hello.txt"), "Hello World" , err => { 
//     if(err) throw err;
//     console.log("File Written to..");
//     // file append

//     fs.appendFile(path.join(__dirname,"/test", "hello.txt"), "Hello World" , err => { 
//     if(err) throw err;
//     console.log("File Written to..");
// });

// });


// // Read File
// fs.readFile(path.join(__dirname,"/test") ,'utf8', (err, data) => { 
//     if (err) {
//     console.error(err);
//     return;
//   }
//     console.log(data);
    
// });

// Rename File
fs.rename(
    path.join(__dirname,"/test", "HelloWorld.txt") ,
    path.join(__dirname,"/test", "Helloworld.txt"), 
    err => { 
        if(err) throw err;
        console.log('Renamed');
    
});





