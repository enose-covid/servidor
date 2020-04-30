"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

const mysql = require('mysql');



class BBDD {

    constructor() {
        this.connection = mysql.createConnection({
<<<<<<< HEAD
            host: 'localhost', // http://enose.hopto.org/phpmyadmin
=======
            host: 'localhost/phpmyadmin', // http://enose.hopto.org/phpmyadmin
>>>>>>> 37de2bae0b1e48d664062aad55b3cf1aa84f7950
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
