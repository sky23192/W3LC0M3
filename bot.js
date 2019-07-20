const Discord = require('discord.js')
const client = new Discord.Client()
const https = require('https')

client.on('ready', () => {
  console.log('Working!');
});

client.on('guildMemberAdd', member => {
  const channel = member.guild.channels.find(ch => ch.name === 'general-chat');
  const msgchannel = member.guild.channels.find(ch => ch.name === 'tradingview-id').toString();
  const faqchannel = member.guild.channels.find(ch => ch.name === 'apex-faq').toString();
  if (!channel) return;
  channel.send(`:confetti_ball:  Welcome to the server : ${member}. You can drop your Tradingview :id:/Username in ${msgchannel} and don't forgot to read ${faqchannel}.`);
  console.log('Added');
});

client.login(process.env.BOT_TOKEN);
