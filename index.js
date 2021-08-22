
const Discord = require("discord.js");
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
        message.channel.send(new Discord.MessageEmbed()
        .setColor("#14AF34")
        .setTitle(`Commands:`)
        .addField("!register [Password]","Register your account.")
        .addField("!login [Password]","Log in with your account.")
        .addField("!logout","Log out from your account.")
        .setFooter("Command used by " + message.author.username + "#" + message.author.discriminator));
    break;

    case "register":
        if(!message.member.roles.cache.has("879080136702566450")){
            if(args[1].length > 3 && !args[2]){
                message.delete()
                
                message.channel.send(new Discord.MessageEmbed()
                .setColor("#14AF34")
                .setTitle("** **" + message.author.username + ", your account was successfuly created!")
                .setDescription(`Please wait until a moderator/manager verifies your account.`)
                );

                client.channels.cache.get("879068025238720512").send(new Discord.MessageEmbed()
                .setColor("#D17600")
                .setTitle("** **" + message.author.username + "#" + message.author.discriminator + " created an account.")
                .setDescription(`Password: ` + args[1])
                );
            } else if(args[2]){
                message.reply("your password must not contain any spacebars.")
            } else if(args[1].length < 4){
                message.reply("your password must contain minimum 4 characters.")
            }
        }
    break;

    case "verify":
        if(message.member.hasPermission("KICK_MEMBERS") && args[1]){
            message.delete();
            //message.channel.send("<@" + message.member.id + "> has verified **" + args[1] + "**.")
        client.channels.cache.get("879074035160449045").send(new Discord.MessageEmbed()
        .setColor("#14AF34")
        .setTitle("** **" + message.author.username)
        .setDescription(`Password: ` + args[1])
        );
        }
    break;

    case "login":
        if(!message.member.roles.cache.has("879080136702566450")){
            if(args[1]){

                // ACCOUNTS
                if(args[1] == "ab56es2"){
                    message.delete();
                    message.channel.send(new Discord.MessageEmbed()
                    .setColor("#14AF34")
                    .setTitle("** **" + message.author.username + " has logged in with their account.")
                    );
                    message.member.roles.add("879080136702566450");
                }
                
                
                
                
                else {
                    message.channel.send(new Discord.MessageEmbed()
                    .setColor("#DA3838")
                    .setTitle("** **" + message.author.username + ", your account was not found.")
                    .setDescription("Please make sure you are typing your password correctly." + `
        Contact a moderator/manager if you forgot your passsword.`)
                    );
                }
            } else {
                message.channel.send(new Discord.MessageEmbed()
                .setColor("#DA3838")
                .setTitle("** **" + message.author.username + ", please include a password in your message.")
                );
            }
        }
    break;

    case "logout":
        if(message.member.roles.cache.has("879080136702566450")){
            message.member.roles.remove("879080136702566450");
            message.channel.send(new Discord.MessageEmbed()
            .setColor("#14AF34")
            .setTitle("** **" + message.author.username + " has logged out from their account.")
            );
        }
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
            const emb2 = new Discord.MessageEmbed()
                .setColor("#14AF34")
                .setTitle(message.content.split("!say "))
            message.channel.send(emb2)
        }
    break;

    // OWNER COMMANDS:
    // !say [Text]
    // !room [Room Link]

    }
});

client.login(process.env.TOKEN);
