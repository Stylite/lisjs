const lisjs = require('lisjs');
const client = new lisjs.Client('Bot tokengoeshere');

client.on('MESSAGE_CREATE', msg => {
  if (msg.content === 'a!Hello!')
    client.kromaticIsntStraight(lisjs.Endpoints.createMessage(msg.channel_id, 
      {data: { content: `Hello ${msg.author.username}`}}));
});