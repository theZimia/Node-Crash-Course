const fs = require('fs');
const path = require('path');

// //how to create a folder
// fs.mkdir(path.join(__dirname,"/test"), {}, err => { 
//     if(err) throw err;
//     console.log("File created");
// }); //by default these are asynchronus, so it takes callbacks

//Create and write to file

fs.writeFile(path.join(__dirname,"/test", "hello.txt"), "Hello World" , err => { 
    if(err) throw err;
    console.log("File Written to..");
});


