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
  
  if (!channel) return;
  channel.send(`:confetti_ball:  Welcome to the server ${member}. You can drop your Tradingview profile name in ${msgchannel} to get access of ape[x]. Please note the public trial period which had started on 1st of june expired on 31st july. Please wait till it re-opens. Till then you can check out ${signalch} & ${faqchannel}.`);
  console.log('Added');
});

client.login(process.env.BOT_TOKEN);
