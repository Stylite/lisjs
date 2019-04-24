"use strict";
const got = require("got");

class ApiCaller {
  constructor(client) {
    this.client = client;
  }

  async post(endpoint, method, payload) {
    try {
      let headers = {
        Authorization: this.client.token,
        "User-Agent": "DiscordBot (https://github.com/atiwiex/lisjs, 0.0.6)",
        "Content-type": "application/json"
      };

      const res = await got(`${endpoint}`, {
        baseUrl: "https://discordapp.com/api/v7",
        headers: headers,
        body: payload,
        json: true
      });
      console.log(res);
    } catch (err) {
      new Error(err);
    }
  }

  createMessage(channelid, content, extra) {
    let payload = {};
    console.log(content);
    if (!content) {
      payload.content = null;
    }
    payload.content = content;
    let options = extra || null;

    /*if (options) {
        if (options.tts && typeof (options.tts) == 'boolean') payload.tts = options.tts || false;
        if (options.embed && typeof (options.embed) == 'object') payload.embed = options.embed || null;
    } */

    //if (payload.content && payload.content == '') throw new TypeError(`Message content cannot be empty`);
    //if (payload.content && payload.content.split('').length > 2000) throw new TypeError(`Message content cannot be over 2000 characters`);

    return this.post(`/channels/${channelid}/messages`, "POST", payload);
  }
}

module.exports = ApiCaller;
