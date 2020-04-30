"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

const mysql = require('mysql');



class BBDD {

    constructor() {
        this.connection = mysql.createConnection({
            host: 'localhost/phpmyadmin', // http://enose.hopto.org/phpmyadmin
            user: 'root',
            password: 'raspberrypi',
            database: 'nose-covid'
        });

    }

    login(user,pass) {
        return new Promise((resolve, reject) => {
            this.connection.connect((err) => {
                //this.connection.query('select * from users where user = ? and pass = sha1(?)',[user,pass], function (error, results, fields) {
                this.connection.query('select * from users where user = ? and pass = sha1(?)',[user,pass], function (error, results, fields) {
                    if (error) reject(error);

                    resolve(results);
                  });
            });
        });
    }


}


exports.BBDD = BBDD;