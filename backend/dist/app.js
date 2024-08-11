"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_http2_1 = __importDefault(require("node:http2"));
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3000;
const server = node_http2_1.default.createServer(app);
server.listen(port, () => {
    console.log("server started successfully!");
});
