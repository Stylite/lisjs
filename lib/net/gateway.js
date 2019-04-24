"use strict";
const WebSocket = require("ws");
const functions = require("./gatewayFunctions");

class Gateway {
  constructor(client) {
    this.client = client;
    this.connect();
  }

  connect() {
    this.ws = new WebSocket(
      "wss://gateway.discord.gg" + `/?v=7&?encoding=json`
    );
    this.registerEventListeners();
  }

  registerEventListeners() {
    this.ws.on("open", () => {
      if (!this.client.token) this.disconnect();

      this.client.emit("ws_open");
    });

    this.ws.on("message", evt => {
      this.client.emit("_", evt);
      let data = null;
      let packet = evt;
      data = JSON.parse(evt);
      if (data.s) this.sequenceNumber = data.s;
      if (evt.t === "READY") this.sessionId = evt.d.session_id;
      let func = functions[data.op];
      if (func) func(data, this);
      if (data.op === 0) this.client.emit(data.t, data.d);
    });

    this.ws.on("error", e => {
      this.client.emit("ws_error", e);
      this.connect();
    });

    this.ws.on("close", code => {
      this.client.emit("ws_close", code);
      this.connect();
    });
  }

  disconnect() {
    this.ws.close();
  }

  bringToLife(int) {
    setInterval(() => {
      this.send(1, this.sequenceNumber);
    }, int);
  }

  sendHandshake() {
    let handshake = {
      token: this.client.token,
      properties: {
        os: process.platform,
        browser: "lisjs",
        device: "lisjs"
      },
      compress: false,
      large_threshold: 250
    };

    this.send(2, handshake);
  }

  send(op, d) {
    this.ws.send(JSON.stringify({ op, d }));
  }
}

module.exports = Gateway;
