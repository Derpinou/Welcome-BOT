# Welcome-BOT 📬
> Simple bot Welcome Discord


## Installation
```

Download the current version then open it in a text editor

```

## Add your token
````json
{
    "token": ""
}
````

## Configuration
Modify the welcome message as you wish then add the channel ID
````js
client.on('guildMemberAdd', function (member) { 
    let embed = new MessageEmbed()
        .setTitle('<:fleche:730859368387444847> __**Kio₱ - Community**__ ')
        .setDescription('🔨 **' + member.user.username + '** **est arrivé !**')
        .setImage(`https://i.pinimg.com/originals/05/0a/42/050a427aa12e5f2b3fa7208abe0bb42c.gif`)
        .addField(`**Salon information ici**`, `<#735473674408296488>`, true)
        .addField(`**Salon support ici :**`, `<#735477540965187584>`, true)
        .setFooter('Nous sommes désormais ' + member.guild.memberCount ,  'https://cdn.discordapp.com/attachments/735249495344021506/739877936890642482/pp_discord.fr.gif');
    member.guild.channels.cache.get('CHANNEL-ID').send(embed) 
  });
````

## Help
* If you need any help please contact me on Discord

* Contact-me
  * Discord : https://discord.gg/QNKYMdr
  * Website : http://kiopdev.cf/





