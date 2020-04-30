"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require('express');
var BBDD = require('./bbdd').BBDD;
var Router = express.Router;


class Api extends Router {

    constructor() {
        super();

        // definicion de rutas
        this.post('/login', async (res, req, next) => {
            console.log(res.body);
            let user = await new BBDD().login(res.body.username, res.body.password);
            if (user[0])
                req.render('home.ejs', { titulo: "e-nose covid 19","user": user[0] });
            else
                req.render('index.ejs', { titulo: "e-nose covid 19", error: "Nombre de usuario o contraseña incorrectos" });
        });
    }


}

exports.Api = Api;