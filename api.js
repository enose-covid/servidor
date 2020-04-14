"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require('express');
var Router = express.Router;


class Api extends Router{

    constructor() {
        super();

        // definicion de rutas
        this.post('/login', (res,req,next)=>{
                console.log(res.body);
                req.send('User Info');
        });
    }


}



exports.Api = Api;