const http=require('http');
const fs=require('fs');
const server=http.createServer((req,res)=>{
    res.setHeader('content-type','text/html');
    fs.readFile('./index.html',(err,data)=>{
        if(err){
            res.end(err);
        }
        else{
            res.end(data);
        }
    });
});
server.listen(3000,'localhost',()=>{
    console.log('listening through port 3000');
});