"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

const mosca = require('mosca');

class MqttBroker {

    constructor() {
        this.settings = {
            port: 1883
        };
        this.server = new mosca.Server(this.settings);
        this.events();
    }

    events() {
        this.server.on('ready', function () {
            console.log("ready");
        });
    }
}
exports.MqttBroker = MqttBroker;