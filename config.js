const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "263717126314";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_15_50_06_01_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTA0LFxuICAgICAgICA5NCxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMixcbiAgICAgICAgOTUsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjI4LFxuICAgICAgICAyNDMsXG4gICAgICAgIDI2LFxuICAgICAgICA0MixcbiAgICAgICAgMTE0LFxuICAgICAgICA0OSxcbiAgICAgICAgMjQzLFxuICAgICAgICA4NSxcbiAgICAgICAgMTQsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNDIsXG4gICAgICAgIDgwLFxuICAgICAgICA5MSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE3NSxcbiAgICAgICAgOTUsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMzIsXG4gICAgICAgIDg4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTc3LFxuICAgICAgICAxNDEsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxODUsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNDUsXG4gICAgICAgIDc3LFxuICAgICAgICAxODYsXG4gICAgICAgIDY4LFxuICAgICAgICA1NSxcbiAgICAgICAgMTU5LFxuICAgICAgICAxOTEsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMDUsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTU1LFxuICAgICAgICAyMzksXG4gICAgICAgIDExNixcbiAgICAgICAgMjQ0LFxuICAgICAgICAzLFxuICAgICAgICA1NyxcbiAgICAgICAgMjQxLFxuICAgICAgICAxMjIsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTE5LFxuICAgICAgICA4MixcbiAgICAgICAgNzksXG4gICAgICAgIDExNSxcbiAgICAgICAgOTJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5MixcbiAgICAgICAgMjUsXG4gICAgICAgIDU1LFxuICAgICAgICAxMjgsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTY5LFxuICAgICAgICA1LFxuICAgICAgICA2MyxcbiAgICAgICAgNDEsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTcsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTAyLFxuICAgICAgICA0MSxcbiAgICAgICAgMjIyLFxuICAgICAgICA4MCxcbiAgICAgICAgMTUwLFxuICAgICAgICAyMzEsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTM2LFxuICAgICAgICAxOTAsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTk3LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTg4LFxuICAgICAgICAyMSxcbiAgICAgICAgMTAyLFxuICAgICAgICAxNTgsXG4gICAgICAgIDYzLFxuICAgICAgICAyMCxcbiAgICAgICAgNjZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDEsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTQsXG4gICAgICAgIDIwOCxcbiAgICAgICAgODEsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTgyLFxuICAgICAgICAzNSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNDksXG4gICAgICAgIDI2LFxuICAgICAgICA5OSxcbiAgICAgICAgMjUyLFxuICAgICAgICAxOTEsXG4gICAgICAgIDg1LFxuICAgICAgICAxMjIsXG4gICAgICAgIDQyLFxuICAgICAgICA4NCxcbiAgICAgICAgMTg0LFxuICAgICAgICA2MyxcbiAgICAgICAgNDQsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNDMsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNDAsXG4gICAgICAgIDk2LFxuICAgICAgICA3NixcbiAgICAgICAgMTc3LFxuICAgICAgICAzMSxcbiAgICAgICAgNzMsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgwLFxuICAgICAgICAxMjEsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNzUsXG4gICAgICAgIDQwLFxuICAgICAgICAyMjYsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMDksXG4gICAgICAgIDU5LFxuICAgICAgICAyMTUsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNDksXG4gICAgICAgIDU5LFxuICAgICAgICAyMzQsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTkzLFxuICAgICAgICAxNjUsXG4gICAgICAgIDc0LFxuICAgICAgICAxMzIsXG4gICAgICAgIDI1MixcbiAgICAgICAgODksXG4gICAgICAgIDQwLFxuICAgICAgICA0MSxcbiAgICAgICAgMTUsXG4gICAgICAgIDM2LFxuICAgICAgICA2MSxcbiAgICAgICAgODIsXG4gICAgICAgIDAsXG4gICAgICAgIDEwLFxuICAgICAgICAxMDZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzcsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjM3LFxuICAgICAgICA2MixcbiAgICAgICAgMTc4LFxuICAgICAgICAyOSxcbiAgICAgICAgMTE4LFxuICAgICAgICAxMTMsXG4gICAgICAgIDQyLFxuICAgICAgICAxNTMsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTk5LFxuICAgICAgICAxOTIsXG4gICAgICAgIDI5LFxuICAgICAgICAyNCxcbiAgICAgICAgMTI4LFxuICAgICAgICAzOCxcbiAgICAgICAgMjI0LFxuICAgICAgICAxNyxcbiAgICAgICAgNDMsXG4gICAgICAgIDQzLFxuICAgICAgICAxNjksXG4gICAgICAgIDEzMixcbiAgICAgICAgNyxcbiAgICAgICAgMTcxLFxuICAgICAgICAxNCxcbiAgICAgICAgMjMsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTEsXG4gICAgICAgIDcsXG4gICAgICAgIDksXG4gICAgICAgIDgxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDcyLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICA3NVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgODJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTIsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjAzLFxuICAgICAgICAxNjEsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNjIsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjQ3LFxuICAgICAgICAxODIsXG4gICAgICAgIDc4LFxuICAgICAgICAyMjgsXG4gICAgICAgIDIxLFxuICAgICAgICA0MSxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMzcsXG4gICAgICAgIDY2LFxuICAgICAgICAyMTcsXG4gICAgICAgIDcyLFxuICAgICAgICAxMzAsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTMzLFxuICAgICAgICA2OSxcbiAgICAgICAgMTgsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjA4LFxuICAgICAgICAxNTEsXG4gICAgICAgIDIsXG4gICAgICAgIDIzLFxuICAgICAgICAxNDQsXG4gICAgICAgIDU0LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE0LFxuICAgICAgICAyMTksXG4gICAgICAgIDU3LFxuICAgICAgICA5NyxcbiAgICAgICAgMTM4LFxuICAgICAgICAzNixcbiAgICAgICAgMjM0LFxuICAgICAgICA3MCxcbiAgICAgICAgMjUsXG4gICAgICAgIDE4MCxcbiAgICAgICAgOTgsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNzAsXG4gICAgICAgIDIzNSxcbiAgICAgICAgODEsXG4gICAgICAgIDEwLFxuICAgICAgICAyNTUsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTkxLFxuICAgICAgICA0MCxcbiAgICAgICAgMTc5LFxuICAgICAgICAyMzAsXG4gICAgICAgIDg1LFxuICAgICAgICAyNDIsXG4gICAgICAgIDUzLFxuICAgICAgICA3OSxcbiAgICAgICAgNDYsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjU1LFxuICAgICAgICAxMzQsXG4gICAgICAgIDIxNSxcbiAgICAgICAgOTUsXG4gICAgICAgIDE0MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNTAsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiWFVNclp1LytPblhJY091UmJxSGVjOVBsbFp2UXh4OE9xRk5FNlk5alZZcz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiRllsWlFWMm5TYWVyTDFTRXpqdDIzd1wiLFxuICBcInBob25lSWRcIjogXCI3ZGJlNGFhMC00OTg2LTRmNTctOWE4Zi0wYjFjZTVkMjg2M2JcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTc4LFxuICAgICAgMTQyLFxuICAgICAgMjE3LFxuICAgICAgMTYzLFxuICAgICAgMjI5LFxuICAgICAgMjEsXG4gICAgICAxNzksXG4gICAgICAxNTcsXG4gICAgICAxNzEsXG4gICAgICA3NixcbiAgICAgIDE1OCxcbiAgICAgIDE1NyxcbiAgICAgIDEyOSxcbiAgICAgIDIzNixcbiAgICAgIDE2NyxcbiAgICAgIDIyNixcbiAgICAgIDgwLFxuICAgICAgMjI2LFxuICAgICAgMTM0LFxuICAgICAgMjI4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI0NixcbiAgICAgIDMzLFxuICAgICAgNDUsXG4gICAgICAxMTcsXG4gICAgICAyNyxcbiAgICAgIDI0NyxcbiAgICAgIDc2LFxuICAgICAgMTAyLFxuICAgICAgMTIyLFxuICAgICAgMjIwLFxuICAgICAgMTQ3LFxuICAgICAgMTAyLFxuICAgICAgMzgsXG4gICAgICAxMjIsXG4gICAgICA3OSxcbiAgICAgIDI0NyxcbiAgICAgIDIyNSxcbiAgICAgIDIzMCxcbiAgICAgIDkwLFxuICAgICAgMTM2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkpRNVBXTE1LXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNjM3MTcxMjYzMTQ6MTNAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE1MTIxNzQwOTkxNzAzNDoxM0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNOQ3M4cU1GRUxHRzdiSUdHQU1nQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIk45NGU0UU1VQmFqVnlUZG9UOXBoV29sa1ExbC9KYitwRThlNmFmdzFBVzA9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiVGxYcTBjQ2lVQ21QME9VbnF1QjVxc1hoSmVSa1QvWDFOcERBMEdxUGdmNHRyQXdIMytlbVhnMnBueHZkdjZaZnMxbVdIOUFlLzZPOWFZNDI0Rld2QVE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiWHFCYjdrNGpTM214ZGZtbmdWZmVUYi9TYUJWTFdMTkhTWUs4UUdDLzc1VVhKalBibDhvR09NdTJBbXQrWURjRjdTMnJTc2xicWJwSm1nRWtoTEFraUE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjYzNzE3MTI2MzE0OjEzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDEwOVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE3MjU3MDE0XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
