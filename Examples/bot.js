const lisjs = require("lisjs");
const client = new lisjs.Client(
  "Bot yourtoken"
);

client.on("READY", b => {
  console.log(
    `Logged in\nName: ${b.user.username}\nID: ${b.user.id}\nGuild count: ${
      b.guilds.length
    }`
  );
});

client.on("MESSAGE_CREATE", msg => {
  if (msg.content === "a!ping") {
    client.apiCaller.createMessage(msg.channel_id, "Pong!");
  }
});
