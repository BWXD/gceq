/*const Discord = require("discord.js");
var client = new Discord.Client();

var room = "https://discord.gg/rpxjesCRg8";

client.on("ready", function() {
        var dd = new Date;
        var h = dd.getUTCHours();
        var m = dd.getUTCMinutes();
        var hh = ""; var mm = "";
        if(h < 10){hh = "0"} else if(h > 9){hh = ""}
        if(m < 10){mm = "0"} else if(m > 9){mm = ""}
        console.log("Bot is up.")
        client.channels.cache.get("876579128692834364").send(new Discord.MessageEmbed()
        .setColor("#F2F2F2")
        .setTitle("Bot was deployed at __" + hh + h + ":" + mm + m + " GMT__."))
        client.user.setStatus("online")
});


client.on("message", async function(message) {
if (message.author.equals(client.user)) return;
if (!message.content.startsWith("!")) return;
var args = message.content.substring("!".length).split(" ");
switch (args[0].toLowerCase()) {

    case "help":
        message.reply("`!help` coming soon.")
    break;


    case "login":
        message.reply("`!login` coming soon.")
    break;

    case "room":
        if(message.author.id == "634872299069374488" && message.content.startsWith("!room https://")){
            const emb = new Discord.MessageEmbed()
                .setColor("#14AF34")
                .setTitle(message.content.split("!room "))
            client.channels.cache.get("879046204011446312").bulkDelete(20)
            client.channels.cache.get("879046204011446312").send(emb)
            room = message.content.split("!room ");
        }
        message.delete();
    break;

    case "say":
        if(message.author.id == "634872299069374488"){
            message.delete();
            const emb2 = new Discord.MessageEmbed()
                .setColor("#14AF34")
                .setTitle(message.content.split("!say "))
            message.channel.send(emb2)
        }
    break;

    }
});

client.login(process.env.TOKEN);
*/

const Discord = require("discord.js");
var client = new Discord.Client();

var room = "";

// BOT ONLINE

client.on("ready", function() {
        var dd = new Date;
        var h = dd.getUTCHours();
        var m = dd.getUTCMinutes();
        var hh = ""; var mm = "";
        if(h < 10){hh = "0"} else if(h > 9){hh = ""}
        if(m < 10){mm = "0"} else if(m > 9){mm = ""}
        console.log("Bot is up.")
        client.channels.cache.get("876579128692834364").send(new Discord.MessageEmbed()
        .setColor("#F2F2F2")
        .setTitle("Bot was deployed at __" + hh + h + ":" + mm + m + " GMT__."))
        client.user.setStatus("online")
});


client.on("message", async function(message) {
if (message.author.equals(client.user)) return;


if (!message.content.startsWith("!")) return;
var args = message.content.substring("!".length).split(" ");
switch (args[0].toLowerCase()) {

    case "help":
        message.reply("!help")
    break;


    case "login":
        message.reply("!login")
    break;

    case "room":
        if(message.author.id == "634872299069374488" && message.content.startsWith("!room https://www.haxball.com/play")){
            const emb = new Discord.MessageEmbed()
                .setColor("#14AF34")
                .setTitle(message.content.split("!room "))
            client.channels.cache.get("879046204011446312").bulkDelete(20)
            client.channels.cache.get("879046204011446312").send(emb)
            room = message.content.split("!room ");
        }
        message.delete();
    break;

    case "say":
        if(message.author.id == "634872299069374488"){
            message.delete();
            const emb = new Discord.MessageEmbed()
                .setColor("#14AF34")
                .setTitle(message.content.split("!say "))
            message.channel.send(emb)
        }
    break;

    }
});

client.login(process.env.TOKEN);
