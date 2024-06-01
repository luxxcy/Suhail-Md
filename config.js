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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_17_10_06_01_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE0LFxuICAgICAgICAxNDksXG4gICAgICAgIDE5NCxcbiAgICAgICAgNzQsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTUwLFxuICAgICAgICA3NyxcbiAgICAgICAgOTcsXG4gICAgICAgIDExNixcbiAgICAgICAgMTgxLFxuICAgICAgICAyMzEsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMzcsXG4gICAgICAgIDY4LFxuICAgICAgICAxNTcsXG4gICAgICAgIDI1LFxuICAgICAgICAyNDksXG4gICAgICAgIDExNSxcbiAgICAgICAgMTIsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTc2LFxuICAgICAgICA4MyxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMTksXG4gICAgICAgIDE3NixcbiAgICAgICAgNjAsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjM2LFxuICAgICAgICA3OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDAsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMzcsXG4gICAgICAgIDYsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMzcsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjQyLFxuICAgICAgICAxLFxuICAgICAgICAyOCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMDIsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjI1LFxuICAgICAgICA5OCxcbiAgICAgICAgMzMsXG4gICAgICAgIDg0LFxuICAgICAgICAxODksXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjEsXG4gICAgICAgIDEsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNDEsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMixcbiAgICAgICAgODYsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNDYsXG4gICAgICAgIDI3LFxuICAgICAgICAxOTgsXG4gICAgICAgIDQ5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDgsXG4gICAgICAgIDE5NixcbiAgICAgICAgOTEsXG4gICAgICAgIDM5LFxuICAgICAgICA2OSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNTIsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMzcsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNzUsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTAxLFxuICAgICAgICAxNjYsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjMsXG4gICAgICAgIDc5LFxuICAgICAgICAxMjIsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTI5LFxuICAgICAgICAxLFxuICAgICAgICAxOTcsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNzEsXG4gICAgICAgIDQ1LFxuICAgICAgICA4NixcbiAgICAgICAgODcsXG4gICAgICAgIDIxLFxuICAgICAgICAxMDYsXG4gICAgICAgIDY3LFxuICAgICAgICA2OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNyxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMDgsXG4gICAgICAgIDExNixcbiAgICAgICAgMTQwLFxuICAgICAgICA2NixcbiAgICAgICAgMTU2LFxuICAgICAgICA1NSxcbiAgICAgICAgMjMsXG4gICAgICAgIDc0LFxuICAgICAgICA0MyxcbiAgICAgICAgODYsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE4NixcbiAgICAgICAgNzgsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMDMsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjAzLFxuICAgICAgICAxNTAsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxNzUsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNjQsXG4gICAgICAgIDI1MCxcbiAgICAgICAgOTUsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTEzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0MCxcbiAgICAgICAgMTMwLFxuICAgICAgICAxNDIsXG4gICAgICAgIDI0NixcbiAgICAgICAgNDksXG4gICAgICAgIDg1LFxuICAgICAgICAxNDksXG4gICAgICAgIDY0LFxuICAgICAgICAxMDksXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTIyLFxuICAgICAgICAxNzgsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNzUsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjYsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTg3LFxuICAgICAgICAxNTQsXG4gICAgICAgIDY1LFxuICAgICAgICAxMjgsXG4gICAgICAgIDM3LFxuICAgICAgICA1MSxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNzcsXG4gICAgICAgIDcwLFxuICAgICAgICAyMjUsXG4gICAgICAgIDExMixcbiAgICAgICAgMjA3LFxuICAgICAgICAyMzAsXG4gICAgICAgIDI3LFxuICAgICAgICA4M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1MSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNTksXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTk5LFxuICAgICAgICAxNDAsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTk1LFxuICAgICAgICA1NSxcbiAgICAgICAgMTgzLFxuICAgICAgICAyMjgsXG4gICAgICAgIDEyLFxuICAgICAgICAyMzksXG4gICAgICAgIDI0OSxcbiAgICAgICAgNzYsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTg3LFxuICAgICAgICAxMTEsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjE1LFxuICAgICAgICA2LFxuICAgICAgICAxNTUsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTUyLFxuICAgICAgICAxNjEsXG4gICAgICAgIDU0LFxuICAgICAgICA4MSxcbiAgICAgICAgMjMxLFxuICAgICAgICAyMjAsXG4gICAgICAgIDQ2LFxuICAgICAgICA1OCxcbiAgICAgICAgMTI3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEzNixcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICA5MixcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICA3MFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDIyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjYsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNzAsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMjAsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNTcsXG4gICAgICAgIDExNSxcbiAgICAgICAgNDQsXG4gICAgICAgIDQzLFxuICAgICAgICA1NSxcbiAgICAgICAgMjUzLFxuICAgICAgICA4OCxcbiAgICAgICAgNjksXG4gICAgICAgIDUzLFxuICAgICAgICAyNDQsXG4gICAgICAgIDU5LFxuICAgICAgICAyMixcbiAgICAgICAgOTIsXG4gICAgICAgIDk0LFxuICAgICAgICAxMzIsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjE3LFxuICAgICAgICAwLFxuICAgICAgICAxMjYsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjI4LFxuICAgICAgICA1LFxuICAgICAgICAxODIsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTg5LFxuICAgICAgICAxOSxcbiAgICAgICAgMTgyLFxuICAgICAgICAxOTYsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNzAsXG4gICAgICAgIDYxLFxuICAgICAgICAxMzcsXG4gICAgICAgIDIwLFxuICAgICAgICAxMTYsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMzEsXG4gICAgICAgIDY0LFxuICAgICAgICA2NSxcbiAgICAgICAgMTgsXG4gICAgICAgIDU5LFxuICAgICAgICAxMSxcbiAgICAgICAgMTA0LFxuICAgICAgICAzMixcbiAgICAgICAgNixcbiAgICAgICAgMjQzLFxuICAgICAgICA1OCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMzksXG4gICAgICAgIDE5NixcbiAgICAgICAgMjE3LFxuICAgICAgICA2NCxcbiAgICAgICAgMTAsXG4gICAgICAgIDE0XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA1NCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCIxcDFOamdYNi9BWlZwZ1RNOHdKZEcrNHNXSkVlSldURmlRM0xJNGxHNGZBPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJib0tSOENYMlIzLUJVZGFfNG5yV2VnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjk3OWJmODMyLTg1MDAtNDgxMi1hMThmLWI0ZjQ0YzQzMzZmMFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMDQsXG4gICAgICAwLFxuICAgICAgMjYsXG4gICAgICA4MCxcbiAgICAgIDE3NCxcbiAgICAgIDEzNixcbiAgICAgIDI0NixcbiAgICAgIDQzLFxuICAgICAgMTI3LFxuICAgICAgMTM3LFxuICAgICAgMTkzLFxuICAgICAgMjEsXG4gICAgICAxMjgsXG4gICAgICAxOTAsXG4gICAgICAyMDUsXG4gICAgICAyMTksXG4gICAgICAyNDgsXG4gICAgICA0LFxuICAgICAgMTM4LFxuICAgICAgMjA4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDExOCxcbiAgICAgIDEzOCxcbiAgICAgIDU1LFxuICAgICAgOTEsXG4gICAgICAxOTIsXG4gICAgICAzNyxcbiAgICAgIDExLFxuICAgICAgNTIsXG4gICAgICAyMDMsXG4gICAgICAxNCxcbiAgICAgIDg0LFxuICAgICAgMTQyLFxuICAgICAgODQsXG4gICAgICAyMTMsXG4gICAgICAxNjUsXG4gICAgICAxODEsXG4gICAgICAyMCxcbiAgICAgIDIzNCxcbiAgICAgIDgyLFxuICAgICAgMjUyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjU2Ulg3RTVCXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNjM3MTcxMjYzMTQ6MTdAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE1MTIxNzQwOTkxNzAzNDoxN0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNOR3M4cU1GRVBLcjdiSUdHQVFnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIk45NGU0UU1VQmFqVnlUZG9UOXBoV29sa1ExbC9KYitwRThlNmFmdzFBVzA9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiaDVObjMrWG5KQTlUYWtVUkdyenRwZEp4eW5uMGJnREZtaENRdUNJQVhiaSswTHNFRUM2Z1l6N1ZzOHg1NVlCN0pISWNIT05sNlhTSEk2b0JSVTZNQkE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiY0RIb0I2akl2WW0wSXQ4dmV5ekJ1cjhETnR1WlBVVDZZSHhQalc2NmxKZ3BnOEtFM1A1SEw4aHZnN0N0ai9MNk9hbVd4MFBIUlY0RzNGZ0p1Zjc0Qnc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjYzNzE3MTI2MzE0OjE3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDEwOVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE3MjYxODE0LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSk1MXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFKTUwuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJFUVVaeC9ub21NdTRFc0o4VjRxNlB3VFExbno0RU9nOEwzTkhzTDBQRDY4PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE0MTc0NTEwODcsXCJjdXJyZW50SW5kZXhcIjozLFwiZGV2aWNlSW5kZXhlc1wiOlswLDIsM119LFwidGltZXN0YW1wXCI6XCIxNzE0MzM1MTQ5NzQyXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "PrinceLuxxcy",


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
