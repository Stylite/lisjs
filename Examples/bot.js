const lisjs = require('lisjs');
const client = new lisjs.Client('Bot ');

client.on('MESSAGE_CREATE', msg => {
  if (msg.content === 'a!ping')
    client.lisjs(lisjs.Endpoints.createMessage(msg.channel_id, 
      {data: { content: `Pong!`}}));
});