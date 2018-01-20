const lisjs = require('lisjs');
const client = new lisjs.Client('Bot MjYxNjEwMzE1MTIzMjYxNDQx.DJo5Ew.AJ77J-jBkbrxqUA6ugP_XHWRs6Q');

client.on('MESSAGE_CREATE', msg => {
  if (msg.content === 'a!Hello!')
    client.lisjs(lisjs.Endpoints.createMessage(msg.channel_id, 
      {data: { content: `Hello ${msg.author.username}`}}));
});