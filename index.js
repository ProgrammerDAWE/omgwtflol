const Discord = require("discord.js");
const Client = new Discord.Client();
const TOKEN = "NTQyNzY5NDA2OTUwNzY4NjQw.DzzYWw.5kI84bgXxOfH2sCPBmzoA8yfJYw";
const omsibotchannelid = "543132393725362215";
const testomsibotchannelid = "543132515066576944";
const prefix = "!o";
const uvozovky = "```";

const UserGame = "OMSI 2";
const SubUserGame = "The Omnibus Simulator";

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

    const helpmessage = "**Ahoj " + message.author + ", já jsem OMSI Bot** 🙂🚌\n\nMůj prefix je **!o**\nTakže vždy, když mě budeš chtít zavolat, tak jako první do zprávy napíšeš __!o__.\n♻️ Jsem ekologický, takže každý příkaz, který napíšeš, se v okamžiku smaže a zůstane pouze zpráva od BOTa.\n\n**TIP: ***Až budeš psát příkaz, kde budeš měnit tzv. parametry příkazu (to je ta část příkazu, do které píšeš co chceš, např. !omap  __Dolní Kounice__), tak nezapomeň mezi volitelné parametry vždy dávat dvě mezery ! 😉*\n\n**OMSI CHYBOVÉ HLÁŠKY**\n`!ofehler` Zobrazí chybovou hlášku '*Fehler bei Bereichsprüfung.*'\n`!opng` Zobrazí chybovou hlášku '*Unbekannte Bilddateierweiterung (.png)*'\n`!oomsiexe` Zobrazí chybovou hlášku o chybném modulu '*Omsi.exe*'\n`!oargument` Zobrazí chybovou hlášku '*Argument außerhalb des Bereichs*'\n\n**INFORMATIVNÍ ZPRÁVY (zpravidla se zobrazují pouze v kanálu #omsibot, aby neobtěžovali jiné konverzace)**\n`!omap  <název mapy>` Informuje hráče na serveru, jakou hraješ mapu.\n`!obus  <model autobusu>` Informuje hráče na serveru, jaký momentálně řídíš autobus\n`!oz  <název stanice>` Udává informaci, na jaké se nacházíš zastávce.\n\n**KOMUNIKACE**\n`!ov  <text mluvený do vysílačky>` Simulace řeči do vysílačky.\n\n**UŽIVATELSKÉ PŘÍKAZY**\n`!oreport  <@uživatel, kterého chcete nahlásit>  <důvod nahlášení>` Nahlásí danného uživatele s Tvým odůvodněním.\n\n**OSTATNÍ**\n`!oinfo` Zobrazí informační zprávy o serveru a botovi\n`!oinvite` Zobrazí zprávu o používání BOTa na jiných serverech\n\n🚌🚌🚌🚌🚌🚌🚌🚌🚌🚌\n*Vysvětlivky*\n`❔ Co znamenají slova v <>?` **Slova ve špičatých závorkách znamenají, že tam můžeš napsat co chceš**\n\n**BOT AUTHORS:**\n💻 | DAWE - `Developer`\n👀 | Radim - `Tester`";

    //Hraje mapu:

    const args = message.content.slice(prefix.length).split("  ");
    const command = args.shift().toLowerCase();

    switch (command){

        case "help":
        message.delete();
        message.channel.send(helpmessage);
        break;
    
        case "admin":
        message.delete();
        let adminHelp = new Discord.RichEmbed()
        .setDescription("Administrátorské a Moderátorské příkazy")
        .setColor("#dd0b0b")
        .addField("Příkazy, které mohou používat pouze administrátoři a moderátoři:", "`!oclean  <počet zpráv>` Vyčistí určený počet zpráv");
        message.author.send(adminHelp);
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
        Client.channels.get(omsibotchannelid).send("`🚏 Zpráva o poloze`\nŘidič " + message.author + " se nachází v zastávce: **" + nachazivzastavce0.toUpperCase() + " " + nachazivzastavce1.toUpperCase() + " " + nachazivzastavce2.toUpperCase() + " " + nachazivzastavce3.toUpperCase() + "**");
        break;

        case "v":
        message.delete();
        let vysilackatext = args[0];
        Client.channels.get(omsibotchannelid).send("`📢 VYSÍLAČKA`\n" + message.author + " říká: " + vysilackatext + "\n====================");
        break;

        case "bus":
        message.delete();
        let bus = args[0];
        Client.channels.get(omsibotchannelid).send(message.author + " jezdí s autobusem: **" + bus.toUpperCase() + "**");
        break;

        // INVITE COMMAND

        case "invite":
        message.delete();
        let boticon = Client.user.displayAvatarURL;
        let oduvodneni = "Server `" + message.guild.name + "` je jedinečný díky prvnímu OMSI BOTovi na světě. Přejeme si, aby to tak zůstalo i nadále.\nBOT je vytvářený speciálně pro tento server a chceme si tak zachovat své jméno a neposkytovat BOTa jiným serverům. Děkujeme za pochopení.\n\nV budoucnu máme v plánu BOTa ještě více rozšířit. Jak? To nemůžeme prozradit 😊";
        let invitemessage = new Discord.RichEmbed()
        .setDescription("OMSI BOT INVITE LINK")
        .setColor("#ff6100")
        .setThumbnail(boticon)
        .addField("Z licenčních důvodů není povoleno vkládání BOTa na jiné servery!", oduvodneni);
        message.channel.send(invitemessage);
        break;

        case "info":
        message.delete();
        let botstatusmessage = new Discord.RichEmbed()
        .setDescription("❔ BOT info")
        .setColor("#0edb0a")
        .setThumbnail(Client.user.displayAvatarURL)
        .addField("BOT status 🤖", "✅ ONLINE");

        let botgame = new Discord.RichEmbed()
        .setDescription("🎮 Aktuální hra")
        .setColor("#321df4")
        .addField(UserGame, SubUserGame);

        let serverstatusmessage = new Discord.RichEmbed()
        .setDescription("❔ Server info")
        .setColor("#0edb0a")
        .setThumbnail(message.guild.iconURL)
        .addField("Server status 📶", "✅ ONLINE")
        .addField("Jméno serveru ✏️", message.guild.name)
        .addField("Založení 🕒", "19. Října 17:13")
        .addField("Počet hráčů 👦", message.guild.memberCount);

        message.channel.send(botstatusmessage);
        message.channel.send(botgame);        
        message.channel.send(serverstatusmessage);
        break;

        case "report":
        message.delete();
        let repAuthor = message.author;
        let repAuthorID = message.member.user.id;
        //let repUser = message.guild.members.get(args[0]);
        let repUser = message.mentions.users.first() || message.guild.members.get(args[0]);
        let repDuvod = args[1];
        if(!repUser){
            message.author.send("Uživatel " + repUser + " neexistuje. Zkontrolujte zadané jméno a zkuste to znovu 😉\nAby jsi nemusel/a znovu psát své odůvodnění, máš možnost si ho zkopírovat 😉\n\n`" + repDuvod + "`");
            console.log(repAuthor + " se snažil nahlásit uživatele " + repUser + ". Důvod: " + repDuvod);
        }else{
            let repMessagetoAdmins = new Discord.RichEmbed()
            .setDescription("❗ Report message ❗")
            .setColor("#d60c0c")
            .setAuthor(repAuthor.tag, repAuthor.avatarURL)
            .setThumbnail(repUser.displayAvatarURL)
            .addField("Nahlášení podal:", repAuthor + " (ID: " + repAuthorID + ")")
            .addField("Nahlášený uživatel:", repUser + " (ID: " + repUser.id + ")")
            .addField("Odůvodnění:", repDuvod)
            .addField("Místnost nahlášení:", message.channel)
            .addField("Čas nahlášení:", message.createdAt)
            .addField("URL avataru nahlášeného:", repUser.displayAvatarURL);
            
            let reportsChannel = message.guild.channels.find("name", "reports");
            reportsChannel.send(repMessagetoAdmins);

            //Poslání zprávy autorovi:

            let repMessagetoAuthor = new Discord.RichEmbed()
            .setDescription("❗ Nahlášení uživatele")
            .setColor("#15c636")
            .setThumbnail(repUser.displayAvatarURL)
            .addField("Nahlášení uživatele proběhlo úspěšně.", "Úspěšně jsi nahlásil/a uživatele " + repUser + ".\nO tvém nahlášení se nikdo nedozví. Vědět o tom budou pouze administrátoři.");

            let podekovaniReport = new Discord.RichEmbed()
            .setColor("#159fc6")
            .setThumbnail(Client.user.displayAvatarURL)
            .addField("Děkujeme že pomáháš zlepšovat server", "Díky tobě a tvému nahlášení, můžeme zjistit, co, nebo kdo našemu serveru moc neprozpívá a budeme to řešit.\nSnažíme se server udržet klidný a přátelský.\nNěkdy to není úplně lehké, ale díky tobě a dalším co si najdou čas a odešlou nám zprávu s nahlášením, tak zjistíme i to, co by jsme bez tebe a jiných nezjistili a toho si vážíme.\n\nPokud někdy opět uvidíš nějaký problém, najdi si prosím čas a dej nám o tom vědět pomocí příkazu `!oreport`.\nDěkujeme, tým OMSI Chat (CZ/SK/EN).");

            message.author.send(repMessagetoAuthor);
            message.author.send(podekovaniReport);

            console.log("Zpráva o nahlášení: " + repAuthor.tag + " nahlásil " + repUser.tag + ". Důvod: " + repDuvod);
        }
        break;

        case "clean":
        let messagesCount = args[0];
        if(!message.member.hasPermission("MANAGE_MESSAGES")){
            let nemaPrava = new Discord.RichEmbed()
        .setColor("#ff8c00")
        .addField("Nemáš dostatečná oprávnění!", "Nemůžeš mazat zprávy, protože nejsi moderátor!\nPokud potřebuješ urgentně smazat zprávy, napiš administrátorům.");
        message.channel.send(nemaPrava);
        console.log(message.member.user.username + " se snažil smazat " + messagesCount + " zpráv.");
        }else{
            message.channel.bulkDelete(messagesCount).then(() => {message.channel.send("🗑️ Smazáno " + messagesCount + " zpráv.").then(msg => msg.delete(5000));
            });
        }
        break;

        case "rateaddon":
        message.delete();
        let rateAddonMessage = new Discord.RichEmbed()
        .setThumbnail(args[0])
        .setColor("#e0e810")
        .addField("HODNOCENÍ ADDONU", "OMSI Bot tento addon hodnotí " + args[1] + " bodů z " + args[2] + " 👍");
        message.channel.send(rateAddonMessage);
        break;

        case "kick":
        message.delete();
        let kickAuthor = message.author;
        let kickUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        if(!kickUser) return message.author.send("Uživatel " + kickUser + " neexistuje. Zkontrolujte jméno a zkuste to znovu.");
        let kickDuvod = args[1];

        let noPermissions = new Discord.RichEmbed()
        .setColor("#ff7f00")
        .addField("NEMÁŠ DOSTATEČNÁ OPRÁVNĚNÍ", kickAuthor + " nemůžeš kicknout uživatele ze serveru, nejsi Administrátor, ani Moderátor.");
        let adminModerator = new Discord.RichEmbed()
        .setColor("#ff7f00")
        .addField("NEMŮŽEŠ KICKNOUT DANÉHO UŽIVATELE", kickAuthor + " nemůžeš kicknout administrátora ani moderátora!");

        if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(noPermissions);
        if(kickUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send(adminModerator);

        let kickMessage = new Discord.RichEmbed()
        .setDescription("Zpráva o vyhození uživatele ze serveru")
        .setColor("#eda838")
        .setThumbnail(kickUser.avatarURL)
        .addField("Hráč " + kickUser + " byl vyhozen ze serveru", "Důvod: " + kickDuvod)
        .addField("Vyhozen v místnosti:", message.channel);

        let kickChannel = message.guild.channels.find("name", "server");
        message.guild.member(kickUser).kick(kickDuvod);
        kickChannel.send(kickChannel);

        console.log("KICK: " + kickAuthor.username + " kicknul " + kickUser.username + ". Důvod: " + kickDuvod);
        break;

        default :
        message.channel.send("`❌ Neplatný příkaz !`\n > Pro nápovědu zadej **!ohelp** ");
        break;
    }

})

Client.login(process.env.BOT_TOKEN);