 const db = require("quick.db");
const Discord = require('discord.js');
const fynx = require("../ayarlar/bot.json");
exports.run = async (client, message, args) => { 
let prefix = await db.fetch(`prefix.${message.guild.id}`) || fynx.prefix 
let eklenti = new Discord.MessageEmbed()  
.setAuthor(`TeamBeatBey`, client.user.avatarURL())
.setColor('PURPLE')
.setDescription(`:diamond_shape_with_a_dot_inside: TeamBeatBey :diamond_shape_with_a_dot_inside:\n \n :diamonds:Youtube |:pushpin: https://www.youtube.com/channel/UC5itj5iUY5mCP2bDP5YoKrg?view_as=subscriber\n \n :diamonds:Twitch|:pushpin:  https://www.twitch.tv/BeatGear7`)  
  .setImage(`https://cdn.discordapp.com/attachments/764503829550727188/772465071539486740/BeatGear7.gif`)
.setThumbnail(client.user.avatarURL)
 message.channel.send(eklenti) 
  };
exports.config = {
name: "linkler",
  aliases: []
}