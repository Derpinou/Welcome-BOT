const Discord = require("discord.js");
const client = new Discord.Client();

const config = require("./config.json");
client.config = config;


client.on('ready', () => {
  
  console.log("\x1b[31m" , `
  ██████   ██████  ████████      ██████  ██████  ███    ██ ███    ██ ███████  ██████ ████████ ███████ ██████    
  ██   ██ ██    ██    ██        ██      ██    ██ ████   ██ ████   ██ ██      ██         ██    ██      ██   ██   
  ██████  ██    ██    ██        ██      ██    ██ ██ ██  ██ ██ ██  ██ █████   ██         ██    █████   ██   ██   
  ██   ██ ██    ██    ██        ██      ██    ██ ██  ██ ██ ██  ██ ██ ██      ██         ██    ██      ██   ██   
  ██████   ██████     ██         ██████  ██████  ██   ████ ██   ████ ███████  ██████    ██    ███████ ██████    
`)
  const activities = [
      "🌟 | Welcome",
      `🌟 | ${client.users.size} users`
  ];
  client.setInterval(() => {
      const index = Math.floor(Math.random() * activities.length);
      client.user.setActivity(activities[index], {
          type: "PLAYING",
          url: "http://twitch.tv/client"
      });
  }, 13000);
});







client.on('guildMemberAdd', function (member) { 
    let embed = new Discord.RichEmbed()
        .setTitle('<:fleche:730859368387444847> __**Kio₱ - Community**__ ')
        .setDescription('🔨 **' + member.user.username + '** **est arrivé !**')
        .setImage(`https://i.pinimg.com/originals/05/0a/42/050a427aa12e5f2b3fa7208abe0bb42c.gif`)
        .addField(`**Salon information ici**`, `<#735473674408296488>`, true)
        .addField(`**Salon support ici :**`, `<#735477540965187584>`, true)
        .setFooter('Nous sommes désormais ' + member.guild.memberCount ,  'https://cdn.discordapp.com/attachments/735249495344021506/739877936890642482/pp_discord.fr.gif');
    member.guild.channels.get('739184648034189394').send(embed)
  });








client.login(config.token);
