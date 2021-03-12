const WebSocket = require("ws");

const wss = new WebSocket.Server({port : 8082});


wss.on("connection",ws => {
    /* ws reqpresent single connection
       If there are multiple connections then new conncetions fired for each
    */

    console.log("New Client connected")

    ws.on("message",data => {
        console.log(`Message sent from client ::: ${data}`)

        /* Sending the data from server to the client */
        ws.send(data.toUpperCase())
    })

    ws.on("close",() => {
        console.log("Closing the connection")
    })
})