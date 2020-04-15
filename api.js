"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require('express');
var BBDD = require('./bbdd').BBDD;
var Router = express.Router;


class Api extends Router{

    constructor() {
        super();

        // definicion de rutas
        this.post('/login', async (res,req,next)=>{
                console.log(res.body);
                let user  = await new BBDD().login(res.body.username, res.body.password);
                req.redirect('/home.html');
        });
    }


}

exports.Api = Api;