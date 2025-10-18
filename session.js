//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                   𝗤𝗨𝗘𝗘𝗡-𝗔𝗡𝗝𝗨 𝗫ᴾᴿᴼ 𝐁𝐎𝐓                                               //
//                                                                                                      //
//                                         Ｖ：5.0.0                                                       //
//
//
//░██████╗░██╗░░░██╗███████╗███████╗███╗░░██╗  ░█████╗░███╗░░██╗░░░░░██╗██╗░░░██╗  ██╗░░██╗██████╗░██████╗░░█████╗░
//██╔═══██╗██║░░░██║██╔════╝██╔════╝████╗░██║  ██╔══██╗████╗░██║░░░░░██║██║░░░██║  ╚██╗██╔╝██╔══██╗██╔══██╗██╔══██╗
//██║██╗██║██║░░░██║█████╗░░█████╗░░██╔██╗██║  ███████║██╔██╗██║░░░░░██║██║░░░██║  ░╚███╔╝░██████╔╝██████╔╝██║░░██║
//╚██████╔╝██║░░░██║██╔══╝░░██╔══╝░░██║╚████║  ██╔══██║██║╚████║██╗░░██║██║░░░██║  ░██╔██╗░██╔═══╝░██╔══██╗██║░░██║
//░╚═██╔═╝░╚██████╔╝███████╗███████╗██║░╚███║  ██║░░██║██║░╚███║╚█████╔╝╚██████╔╝  ██╔╝╚██╗██║░░░░░██║░░██║╚█████╔╝
//░░░╚═╝░░░░╚═════╝░╚══════╝╚══════╝╚═╝░░╚══╝  ╚═╝░░╚═╝╚═╝░░╚══╝░╚════╝░░╚═════╝░  ╚═╝░░╚═╝╚═╝░░░░░╚═╝░░╚═╝░╚════╝░
//
//
//
//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//*
//  * @project_name : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ
//  * @version      : 5.0
//  * @author       : Janith Rashmika
//  * @youtube      : https://www.youtube.com/@gamingrash2006
//  * @description  : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ, A Multi-functional WhatsApp bot created by Janith Rashmika.
//*
//*
//Base by Janith Rashmika
//GitHub: @Mrrashmika
//WhatsApp: +94717775628
//Want more free bot scripts? Subscribe to my YouTube channel: https://youtube.com/@gamingrash2006
//   * Created By GitHub: Mrrashmika
//   * Credit To Janith Rashmika
//   * © 2025 © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ-V4.
// ⛥┌┤
// */

const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID:
    process.env.SESSION_ID ||
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZUhoYXpuUDgwYW5IMTV2UFIyelJaN3ptb3JodU92Nm1vK05WUzF2ckdIUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieW11aStXRmpkWGNOaWQxaXBHd21Kd3VCeUg1c29yUEFVMlFPdHhNTjN3WT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJZQW9SRGNDQ2tWNUdOa1NmbWZNU0RZcmN3bm0xWkdLOVlISWYrR3RKdlhJPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJMSFpqV3BiVVMrZmlIcTkyQ1IyTTk4em02MHYySTFTaUJFbldpazNjZ2o0PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InNGVW9rdTh3WHJKeXFZc1d5RGhxNCt4RXlBMlEwWEZpdnJYVXRXUFJla0k9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ii9FRmZscFhJZ05CWE5UcnpTNHVmKy9QUXhXdHlHR0M0Skt5NW1MVjRkRGM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMkIramRxT2tnTEN5MVFwaTBGbWUzaTNxY3Z5Z1NieUYwRUF1aVNJNDhFQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicG9KTGczVnZNejNDY2I2TFl4LzBCZ1ZQc0lYRWd6L0lHU2pNU05aS3kwcz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkxQMWU2Mittd1BXSFBBdDZZMWJsN0ZNT1R4Zm12cFFpL09YMHFXYlExU3FaeFFHMkYvQnlPZHFFdEg4WGc5ZEVMZ1ltNHh4TnE3TjdiMmJXcko4VmhnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NjcsImFkdlNlY3JldEtleSI6ImdscE9OUXpSQzhTZThhVkxURUxVSjFhU1pqY3pXQ0tiMEZIWU03b2NPZVU9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiOTQ3MTM1ODE4MDRAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQTU5OThBMjAxNTc2QjM4ODAxNzU3RTNGRkY5OTBGMDYifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc2MDc5ODY1N30seyJrZXkiOnsicmVtb3RlSmlkIjoiOTQ3MTM1ODE4MDRAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQTU2MDcxNjlDNDRDOEVFMjBGNjY2ODlDOTkzRUY4ODAifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc2MDc5ODY1OH0seyJrZXkiOnsicmVtb3RlSmlkIjoiOTQ3MTM1ODE4MDRAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQTU1MTlGMzc5REJFREMwNDIxNjQ5Nzc1MTlBOUQ5NzUifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc2MDc5ODY2MH1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiTkR5ME9OZFVSR0dWZGJYcVh2elJXdyIsInBob25lSWQiOiJlODYyYzRhMi00OWIyLTQ0YTMtYWVmMy1jYTQzODc3NTgyMzciLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiazRacFZWY1A3RVo5N0FJenRkdFk2SkJlRjdNPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImR5UHF3WW5tL2VGTm5HbFRWTnR5NWQ2alhldz0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiI1U1dDWFlSTSIsIm1lIjp7ImlkIjoiOTQ3MTM1ODE4MDQ6MkBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJTYW5qdSIsImxpZCI6Ijk4MTg5MTYwNDQ4MjM6MkBsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ01xQW8rNEJFSy9QenNjR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Ink4cTdWQ2dlbTJ5dDZLcHVKbDVxMUFiTWZyc0QvaGZIZmlodWViMEE1VlU9IiwiYWNjb3VudFNpZ25hdHVyZSI6Ikgwd1NlczVTdHNid1JHYllYdzZsYTkxb0Ryb2ZRaWVkQnJYKzNFSXU1Y0tmTWZCVmVsRHFrS0VuWDUvTjlBbkpRcm1hNFBLR2ZRM1NLYk1GQ0ZpY0FnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJ2bUhjckhCUjZPdDcwdGRkUXdPRllNYm4wbkF0NlFLNE5nZHZRaTZ4eXZXaEpqZDBkbHF3bmdsK1Fub2RCbDhDU3VETlQ0eHVBOTJENXA4SEc0M3FqZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk0NzEzNTgxODA0OjJAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCY3ZLdTFRb0hwdHNyZWlxYmlaZWF0UUd6SDY3QS80WHgzNG9ibm05QU9WViJ9fV0sInBsYXRmb3JtIjoic21iYSIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FVSUNBPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzYwNzk4NjU2LCJsYXN0UHJvcEhhc2giOiIyVjc3cVUiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUswOSJ9",
  BOT_NUMBER:
    process.env.BOT_NUMBER || "94713581804",
  PASSWORD: 
    process.env.PASSWORD || "your password",
  SUDO: process.env.SUDO
    ? process.env.SUDO.split(",")
    : ["94717775628", "94758775628"],
  PORT: process.env.PORT || "3000",
  SESSION_DIR: process.env.SESSION_DIR || "sess",
};
