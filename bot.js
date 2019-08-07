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
  const signalch = member.guild.channels.find(ch => ch.name === 'apex-signals').toString();
  const apxtrial = member.guild.channels.find(ch => ch.name === 'apex-trial').toString(); 
  
  if (!channel) return;
  channel.send(`:confetti_ball:  Welcome to the server ${member}. You can drop your Tradingview profile name in ${apxtrial} to get access of ape[x]. And do not forgot to check ${signalch} & ${faqchannel}.`);
  console.log('Added');
});

client.login(process.env.BOT_TOKEN);
