const Discord = require("discord.js");
const Client = new Discord.Client();
const TOKEN = "NTQyNzY5NDA2OTUwNzY4NjQw.DzzYWw.5kI84bgXxOfH2sCPBmzoA8yfJYw";
const omsibotchannelid = "543132393725362215";
const testomsibotchannelid = "543132515066576944";
const prefix = "!o";
const uvozovky = "```";

const UserGame = "OMSI 2";

const helpmessage = "**Ahoj, já jsem OMSI Bot** 🙂🚌\n\nMůj prefix je **!o**\nTakže vždy, když mě budeš chtít zavolat, tak jako první do zprávy napíšeš __!o__.\n♻️ Jsem ekologický, takže každý příkaz, který napíšeš, se v okamžiku smaže a zůstane pouze zpráva od BOTa.\n\n**OMSI CHYBOVÉ HLÁŠKY**\n`!ofehler` Zobrazí chybovou hlášku '*Fehler bei Bereichsprüfung.*'\n`!opng` Zobrazí chybovou hlášku '*Unbekannte Bilddateierweiterung (.png)*'\n`!oomsiexe` Zobrazí chybovou hlášku o chybném modulu '*Omsi.exe*'\n`!oargument` Zobrazí chybovou hlášku '*Argument außerhalb des Bereichs*'\n\n**INFORMATIVNÍ ZPRÁVY (zpravidla se zobrazují pouze v kanálu #omsibot, aby neobtěžovali jiné konverzace)**\n`!omap <název mapy>` Informuje hráče na serveru, jakou hraješ mapu.\n`!oz <název stanice>` Udává informaci, na jaké se nacházíš zastávce.\n\n🚌🚌🚌🚌🚌🚌🚌🚌🚌🚌\n*Vysvětlivky*\n`❔ Co znamenají slova v <>?` **Slova ve špičatých závorkách znamenají, že tam můžeš napsat co chceš**\n\n__*BOT by DAWE*__";

Client.on("ready", ()=>{
    console.log("Už se to roztáčí! Je to fajn? Je to fajn!");
    console.log("BOT je ONLINE!!");
    Client.user.setActivity(UserGame);
})

Client.on("message", (message)=>{
    if(!message.content.startsWith(prefix)) return;

    if(message.content.startsWith(prefix + "msibot")){
        message.delete();
        message.channel.send("Ahoj" + message.author + " :slight_smile:");
    }

    //Hraje mapu:

    const args = message.content.slice(prefix.length).split(/ -+/g);
    const command = args.shift().toLowerCase();

    switch (command){

        case "help":
        message.delete();
        message.channel.send(helpmessage);
        break;

        // OMSI CHYBOVÉ HLÁŠKY
        case "fehler":
        message.delete();
        message.channel.send("https://cdn.discordapp.com/attachments/510147370445701120/542826148724342785/2Q.png");
        break;

        case "png":
        message.delete();
        message.channel.send("https://cdn.discordapp.com/attachments/510147370445701120/542827337373319178/IMG_20190206_230144.png");
        break;

        case "omsiexe":
        message.delete();
        message.channel.send("https://media.discordapp.net/attachments/510147370445701120/542830291798982686/IMG_20190206_231311.jpg");
        break;

        case "argument":
        message.delete();
        message.channel.send("https://media.discordapp.net/attachments/510147370445701120/542832492265340928/IMG_20190206_232223.png");
        break;

        // INFORMATICNÍ ZPRÁVY
        case "map":
        let jezdinamape0 = args[0];
        let jezdinamape1 = args[1];
        let jezdinamape2 = args[2];
        if(jezdinamape0 == null){
            jezdinamape0 = "";
        }
        if(jezdinamape1 == null){
            jezdinamape1 = "";
        }
        if(jezdinamape2 == null){
            jezdinamape2 = "";
        }
        message.delete();
        Client.channels.get(omsibotchannelid).send(message.author + " jezdí na mapě **" + jezdinamape0.toUpperCase() + " " + jezdinamape1.toUpperCase() + " " + jezdinamape2.toUpperCase() + "**");
        break;

        case "z":
        message.delete();
        let nachazivzastavce0 = args[0];
        let nachazivzastavce1 = args[1];
        let nachazivzastavce2 = args[2];
        let nachazivzastavce3 = args[3];
        if(nachazivzastavce1 == null){
            nachazivzastavce1 = "";
        }
        if(nachazivzastavce2 == null){
            nachazivzastavce2 = "";
        }
        if(nachazivzastavce3 == null){
            nachazivzastavce3 = "";
        }
        Client.channels.get(testomsibotchannelid).send("`🚏 Zpráva o poloze`\nŘidič " + message.author + " se nachází v zastávce: **" + nachazivzastavce0.toUpperCase() + " " + nachazivzastavce1.toUpperCase() + " " + nachazivzastavce2.toUpperCase() + " " + nachazivzastavce3.toUpperCase() + "**");
        break;

        case "v":
        message.delete();
        let vysilackatext = args[0];
        Client.channels.get(testomsibotchannelid).send("`📢 VYSÍLAČKA`\n" + message.author + " říká: " + vysilackatext + "____________________");
        break;

        default :
        message.channel.send("`❌ Neplatný příkaz !`\n > Pro nápovědu zadej **!ohelp** ");
        break;
    }

})

Client.login(process.env.BOT_TOKEN);