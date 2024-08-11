import http from "node:http2";
import express from "express";

const app = express();
const port = 3000;

const server = http.createServer(app);

server.listen(port, ()=>{
    console.log("server started successfully!");
})