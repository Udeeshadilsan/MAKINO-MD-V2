const fs = require("fs");
const chalk = require("chalk");
//const fs = require('fs-extra')
//if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//to enable function - true
//to disable function - false
//
global.available = false;
global.autoReadGc = true;
global.autoReadAll = true;
global.antitags = true;


//auto functioner
global.autoTyping = true;                //make true to enable auto typing
global.autoRecord = true;                //make true to enable auto recording
global.groupevent = true;                //This is the new variable for controlling group event handling.
global.statusseen = true;                 //make true to view statuses 


//
/*global.Owner = process.env.OWNER || "2347045174399";// Owner number
global.OwnerNumber = process.env.OWNER_NUMBER || "2347045174399" ;// Also owner number
global.ownertag = process.env.OWNER_TAG || "2347045174399";// Also owner number
global.sessID = process.env.sessID || ""; //Session ID here.
global.OwnerName = process.env.OWNER_NAME || "Tᴀɪʀᴀ Mᴀᴋɪɴᴏ";// Owner Name
global.BotName = "🐦Makino-md-v2";//Do not change 🥵
global.packname = process.env.PACKNAME || "Tᴀɪʀᴀ Mᴀᴋɪɴᴏ";//Sticker pack name.
global.author = "🐦Makino-md-v2 ᴍᴜʟᴛɪ-ᴅᴇᴠɪᴄᴇ";//Do not change                            //Do not change.
global.BotSourceCode = "https://github.com/anonphoenix007/MAKINO-MD-V2"; //Do not change or bot will not function.
global.SupportGroupLink = "https://chat.whatsapp.com/KEg0G3UUs1G39ikdyfF5Pm"; //Do not change!
global.dbase = process.env.DBASE || "";//Mongodb here
global.AuthorWhatsapp = "https://wa.me/2347080968564"; //Bot creator WhatsApp link,don't change or bot will not work.
*/
global.Owner = [""];
global.OwnerNumber = ["94760049693"];
global.ownertag = [""]; 
global.OwnerName =  "𝙷𝙸𝚁𝚄𝚂𝙷𝙰_𝙱𝙱𝚈";
global.BotName = "🐦Makino-md-v2";
global.packname = "𝙳 𝙸 𝙽 𝚄  𝙾𝙵𝙲";                             //Do not change.
global.author = "🐦Makino md ᴍᴜʟᴛɪ-ᴅᴇᴠɪᴄᴇ";                               //Do not change.
global.BotSourceCode = "https://github.com/anonphoenix007/MAKINO-MD-V2"; //Do not change.
global.SupportGroupLink = "https://chat.whatsapp.com/KEg0G3UUs1G39ikdyfF5Pm "; 
global.sessID = process.env.sessID || ""; //Session ID here.
global.SupportGroupLink = "https://chat.whatsapp.com/KEg0G3UUs1G39ikdyfF5Pm"; //Do not change!
//global.dbase = process.env.DBASE || "";//Mongodb here
global.AuthorWhatsapp = "https://wa.me/2347080968564"; //Bot creator WhatsApp link,don't change or bot will not work.
//
global.sessionName = "{"noiseKey":{"private":{"type":"Buffer","data":"GJDlgeoPbIZLzqYWSAAgn4mNpNQAIZyB9wKN/oe5b14="},"public":{"type":"Buffer","data":"kvHX3Fri+PFXmi0kHAglgPSDKKLA8FOP+R8DWLAPsEc="}},"pairingEphemeralKeyPair":{"private":{"type":"Buffer","data":"kMd00jQ7dvxuJgiIDMTNNJXMSkZXB/nDi/GZHO2b8mI="},"public":{"type":"Buffer","data":"UgRnGSOLI4SibiCm/3ri8oHiQ/+C9oTd8lCf5fKaEmk="}},"signedIdentityKey":{"private":{"type":"Buffer","data":"cDpjI0+ouhVDjo4TtwxKPDh6OeNJr0YiKAHmPYf+v2s="},"public":{"type":"Buffer","data":"JiQ9JQjXUerJ8k5aq9n8SIL9EITkPtijdIJ4SUsyrnM="}},"signedPreKey":{"keyPair":{"private":{"type":"Buffer","data":"CEJ7Yl7cdYRi7BAyeO6Hty0mIyqOQq8saTEAgt1KZ3E="},"public":{"type":"Buffer","data":"h16ey5ttHssWoR4c6synXtSP+xONohOOXNRVc7SFbGU="}},"signature":{"type":"Buffer","data":"2DJb1kKg3wBDr/FTwFQVjvrGXx3t/ArAQOBvN8kWeIqj4j5HTrWDzAkjuq3UJElQoeLFq7lDzuA/9t/q2tT9Bg=="},"keyId":1},"registrationId":244,"advSecretKey":"xG4qt0xSqef2l8/DAkBfIBRTxuSE2sncVH3IyVU9PRs=","processedHistoryMessages":[],"nextPreKeyId":31,"firstUnuploadedPreKeyId":31,"accountSyncCounter":0,"accountSettings":{"unarchiveChats":false},"deviceId":"GZoq6wAjQlqdU07-GdE27A","phoneId":"a7f26f17-9b8b-4eee-bace-39579bafc347","identityId":{"type":"Buffer","data":"mVw2BSWTvDCFH/rC58PTXLUdOyw="},"registered":true,"backupToken":{"type":"Buffer","data":"In/++Bo5RtICxZ34fR191n9na2U="},"registration":{},"pairingCode":"AS56K3BV","me":{"id":"94760049693:4@s.whatsapp.net"},"account":{"details":"COvV58IGEOag1rMGGAEgACgA","accountSignatureKey":"fOPKcvRqy1of7As1HASWFs4RUdt/J0gmwH+bFHQkIQs=","accountSignature":"9S9z3/Io4AXhV/yIZ2XQ3+96McDauy7uYk/AO9vVP/48wqCDuGA5+vPgVEGYtvJ4Lm2xjRF8l2a+1hX75OThDg==","deviceSignature":"lKRdNg36FczQli5I03DSJIMjptQyTxw2Orgz7Zo4lRZ7gY+v2kFiWFY/12JBZ44s7UpQGw8GLTYrN2E8vR9zCw=="},"signalIdentities":[{"identifier":{"name":"94760049693:4@s.whatsapp.net","deviceId":0},"identifierKey":{"type":"Buffer","data":"BXzjynL0astaH+wLNRwElhbOEVHbfydIJsB/mxR0JCEL"}}],"platform":"android","lastAccountSyncTimestamp":1718980724}";                          //Do not change.


//
global.prefa = ["/"];
//process.env.PREFIX || "/";// Prefix                                 //Default prefix here.
global.openAiAPI = "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";


//
global.location = "Lagos, Nigeria";                   
global.reactmoji = "🐦";
global.themeemoji = "😏";
global.vidmenu = { url: 'https://tenor.com/view/jujutsu-kaisen0-yuta-okkotsu-gif-26767662' };
global.websitex = "https://github.com/anonphoenix007";
global.lolhuman = "KaysaS";


//
global.BotLogo = fs.readFileSync("./Assets/pic1.jpg");
global.Thumb = fs.readFileSync("./Assets/pic9.jpg");
global.Thumb1 = fs.readFileSync("./Assets/pic5.jpg");
global.ErrorPic = fs.readFileSync("./Assets/pic7.jpg");


//
global.ntilinkytvid = []
global.ntilinkytch = []
global.ntilinkig = []
global.ntilinkfb = []
global.ntilinktg = []
global.ntilinktt = []
global.ntilinktwt = []
global.ntilinkall = []
global.nticall = []
global.ntwame = []
global.nttoxic = []
global.ntnsfw = []
global.ntvirtex = []
global.rkyt = []
global.wlcm = []
global.gcrevoke = []
global.autorep = []
global.ntilink = []


//
global.mess = {
    jobdone: 'Here you go...',
    useradmin: 'Only group Admin can use the command 😂 ',
    botadmin: 'Make me Admin first 😌📍.',
    botowner: 'Only my *Owner* can use this command,Dont trespass, Baka!',
    grouponly: 'This command is only made for *Groups*, Baka!',
    privateonly: 'This command is only made for *Private Chat*, Baka!',
    botonly: 'Only the *Bot itself* can use this command!',
    waiting: 'Wait a lil bit (¬_¬)ﾉ...',
    nolink: ' provide me *link*, Baka!',
    error: 'An error occurd!',
    banned: 'You cant use the commands because you Are *Banned*',
    bangc: 'This Group is *Banned* from using Commands!',
    nonsfw: 'Dont be a pervert,idiot! This is not a NSFW enabled group!'
    
}

global.limitawal = {
  premium: "Infinity",
  free: 2,
  monayawal: 1000,
};

global.limitawal = {
  rakyat: "Infinity",
  free: 100,
};

global.APIs = {
  zenz: "https://zenzapis.xyz",
};
global.APIKeys = {
  "https://zenzapis.xyz": "5d1197db351b",
};
