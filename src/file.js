var fs = require('fs');

//read file
// fs.readFile('text.txt', 'utf8',function (err, data) {
//     debugger;
//                     if (err) throw err;

//     console.log(data);
// });




//fs.readFileSync() method to read file synchronously
// var data = fs.readFileSync("text.txt", 'utf8');
// console.log(data);





//Creating & Writing File
// fs.writeFile('dummy.txt', 'Hello Chandrakala!', function(err, data){
//     if(err)
//         console.log(err);
//     else
//         console.log('Writingfile completed.');
// });



//Append File Content
// fs.appendFile('text.txt', ' Appended Chandrakala!', function(err){
//     if(err)
//         console.log(err);
//     else 
//     console.log('Appending text to the file completed.');
// });


//open and read and close
// fs.open('text.txt', 'r', function (err, fd) {
    
//                             if (err) {
//                             return console.error(err);
//     }
    
//                             var buffr = new Buffer(1024);
    
//     fs.read(fd, buffr, 0, buffr.length, 0, function (err, bytes) {
       
//                             if (err) throw err;
            
//                             // Print only read bytes to avoid junk.
//                             if (bytes > 0) {
//             console.log(buffr.slice(0, bytes).toString());
//         }
        
//                             // Close the opened file.
//         fs.close(fd, function (err) {
//                             if (err) throw err;
//         });
//     });
// });



//delete file
fs.unlink('dummy.txt', function(){
    console.log('Deleting file complete!');
});
