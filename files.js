const fs = require('fs');

// fs.readFile('./docs/blog.txt', (err, data)=>{
//     if(err){
//         console.log(err);
//     }
//     console.log(data.toString());
// });

// fs.writeFile('./docs/blog2.txt','hello world',()=>{
//     console.log("done");
// })
if( ! fs.existsSync('./assests')) {
    
    fs.mkdir('./assests',(err)=>{
    
        if(err){
            console.log(err);
        }
        console.log('file created');
    })
}
else{
    fs.rmdir('./assests',(err)=>{
        if(err){
            console.log(err);
        }
        console.log('folder deleted');
    })
}

if(fs.existsSync('./docs/deleteme.txt')){
    fs.unlink('./docs/deleteme.txt',(err)=>{
        if(err){
            console.log(err);
        }
        else{
            console.log('file deleted');
        }
    })
}


