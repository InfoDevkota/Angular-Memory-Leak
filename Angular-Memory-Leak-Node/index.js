const http = require('http');

const Socket = require('socket.io');

const Data = require("./data");

const server = http.createServer((req, res) =>{
    res.write("Hello World! ");
    res.end();
});


let io = Socket(server, { cors: { origin: '*' } });

io.on('connection', socket =>{
    console.log("Connected.");

    setInterval(()=>{
        socket.emit("newUser", newUser())
    }, 5000)
    
    setInterval(()=>{
        socket.emit("newRequest", newRequest())
    }, 6000)
})

server.listen(5050);
console.log("Listining on Port 5050");

let newUser = () =>{
    let name = Data.names[random()];
    name = name + "" + randomSuffix();

    return {
        name,
        date: Date.now()
    }
}

let newRequest = () =>{
    let name = Data.names[random()];
    name = name + "" + randomSuffix();
    let request = Data.requests[random()];

    return {
        name,
        request,
        date: Date.now()
    }

}

let random = () => {
    return (parseInt(Math.random() * 10));
}

let randomSuffix = () => {
    return (parseInt(Math.random() * 1000));
}