const express=require("express"); //Access
const socket=require("socket.io");

const app=express();//initialize and serve ready
app.use(express.static("public"));


let port=process.env.PORT || 5100;
let server =app.listen(port, () =>{
console.log("Listening to port"+port);
})

let io= socket(server);

io.on("connection",(socket) =>{
        console.log("Made socket connection");

    socket.on("beginPath",(data)=>{

        io.sockets.emit("beginPath",data);
    })
    socket.on("drawStroke",(data)=>{
        io.sockets.emit("drawStroke",data);
    })

    socket.on("redoUndo",(data)=>{
        io.sockets.emit("redoUndo",data);
    })
    })
