 const db = require("quick.db");
const Discord = require('discord.js');
const fynx = require("../ayarlar/bot.json");
exports.run = async (client, message, args) => { 
let prefix = await db.fetch(`prefix.${message.guild.id}`) || fynx.prefix 
let eklenti = new Discord.MessageEmbed()  
.setAuthor(`TeamBeatBey`, client.user.avatarURL())
.setColor('PURPLE')
.setDescription(`:diamond_shape_with_a_dot_inside: TeamBeatBey :diamond_shape_with_a_dot_inside:\n \n TBB BeatGear \n TBB Can \n TBB FatihArici \n  TBB MrHyperionX \n  TBB QuateX05  `)  
  .setImage(`https://cdn.discordapp.com/attachments/764503829550727188/772465071539486740/BeatGear7.gif`)
.setThumbnail(client.user.avatarURL)
 message.channel.send(eklenti) 
  };
exports.config = {
name: "ekip",
  aliases: []
}