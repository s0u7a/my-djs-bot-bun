const { Client, GatewayIntentBits } = require("discord.js");
const hping = require('./hping.js');
const client = new Client({
  intents: Object.values(GatewayIntentBits).reduce((a, b) => a | b)
});

client.on("ready", () => {
  console.log(`logged on ${client.user.tag}`);
});

client.on("messageCreate", async msg => {
  if (msg.content === "!ping") {
    var pingresponce = await hping("1.1.1.1", 443);
    msg.reply(pingresponce);
  }
});

client.login("MTIwODA0NjQ0NzQ3MjQxODg3Nw.GTA_94.Auo3dfX_xpk5G6Ghp5aq_xyNB7gY9YMUBcM6JA");
