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
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR001bW91L2hLM0ovR3EyT09BM0JEM3RyUFBYZE1CK3ZvNXJCYm9XcnIzdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQzNxZ0Yya3BMdWFSOFBoanlJb0FIUFUydnRNZDNNeERta2hncmJTazN5OD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJlT1hMMWV1NDBjVGRNS1Nodk1vSkRINEd1ZktXN0FRTDRFb2VCK3hTRGxFPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJQK3FodHRFLzgvYVYvVTA4bTV0NnMzeTZFUXZrUU0zMFVvYlBPalh1ZUhFPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IklNZDJNMlhtb1FiTTBBV3pFYmt0bU1QKzlEUUUwRUJWT1orT0pkNFkvVnM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InJ5WnFQSjJVRHBPRGxEQlhwb2QrK09YTUlTa3lyMWoyT1UwcmFDcnBiMDg9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRU1CcU9rZVlHaHNLcEtuRTU3MDEwZGUxU1A4cDVOMWFjczRPdmtoTlhsbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiN2RlM2NydUE5K1NaNFByMVpFQ1lxdzlzUHh3ekFQYnBaVXZxUTNCUVRXWT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlcvblBDcElSS1hZeGY4eUJVdk5pUFYwOFZMWk1wWTRhUU92NGU1dC83b3lLcnhzZ3lrbG04Sk9aR3FLTnFBWDdHUm5FcFFINGcwcXBhSlVjRDdnQUNRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTMsImFkdlNlY3JldEtleSI6IkN1L2FrZzlGL21pTzhJYkk1eEJRY1VTUGY3TnE0d2RrRXAvYlFUb2pURHM9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6ImVvNnY1aGY5UTlLbmphWkN3UnB2YWciLCJwaG9uZUlkIjoiMjA3MmUzZWMtZTk5OS00NDc2LTk3MWYtMDA2NTdiY2NkOTgzIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImZTUS9jYU9uRVJpSTBlak8rNGwvazlTcUQ1RT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIvZWhHTVdEdlArbHZJUEc2RlVRUElGU1RhWTg9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiRUgxNDkzVE0iLCJtZSI6eyJpZCI6Ijk0NzEzNDI3MDI5OjhAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi8J2Qk/CdkKLwnZCl8J2QmvCdkKfwnZCk8J2Qml/wnZCD8J2QovCdkJrwnZCsIiwibGlkIjoiMjAwMjE0Njk4ODI3OTk3OjhAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNJSG0zSVlHRUkzZnpjY0dHQVFnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJ1Y0NWVktCMDlCdUdzK1h2VmlzYVR5R2I3VG8waUlXVjhCTlZZM2FkVzA4PSIsImFjY291bnRTaWduYXR1cmUiOiJwWkZucG9ZbGxQM3hhamtjTC9LY0NRQ211b0FWQjVKSk5hcndJdVVQekp2WGdkNkZnTVNaZVIxZlNPTlRibjNoM0U3UHlTSHdZL0l2a2VESGdFWEhEUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiMmNiQk43REluck9VRTYzKzEreEo3NkJVU2FYemFZcU16c0xTYnRWMDg1eTRGZXRHeUJiZTYrNEc0amxpSElndkUxaTNaY0JLY2xnRUJjWkg0QmZUQWc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDcxMzQyNzAyOTo4QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmJuQWxWU2dkUFFiaHJQbDcxWXJHazhobSswNk5JaUZsZkFUVldOMm5WdFAifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBSUlDQT09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc2MDc4NDI4MiwibGFzdFByb3BIYXNoIjoiMlY3N3FVIiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFNT24ifQ==",
  BOT_NUMBER:
    process.env.BOT_NUMBER || "94713427029",
  PASSWORD: 
    process.env.PASSWORD || "your password",
  SUDO: process.env.SUDO
    ? process.env.SUDO.split(",")
    : ["94717775628", "94758775628"],
  PORT: process.env.PORT || "3000",
  SESSION_DIR: process.env.SESSION_DIR || "sess",
};
