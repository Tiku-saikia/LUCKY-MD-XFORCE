'use strict';

const { ezra } = require("../fredi/ezra");
const axios = require('axios');
const moment = require("moment-timezone");
const set = require(__dirname + '/../set');
moment.tz.setDefault('' + set.TIMEZONE);

ezra({
  'nomCom': "ping",
  'categorie': "General-Fredi"
}, async (_0x12a838, _0x2d8d4e, _0x1f0ba4) => {
  let {
    ms: _0x5d2f0c
  } = _0x1f0ba4;
  const {
    time: _0xb5466b,
    date: _0x4c687e
  } = {
    'time': moment().format("HH:mm:ss"),
    'date': moment().format("DD/MM/YYYY")
  };
  const _0x4950ba = Math.floor(Math.random() * 0x64) + 0x1;
  try {
    await _0x2d8d4e.sendMessage(_0x12a838, {
      'audio': {
        'url': "https://files.catbox.moe/se9mii.mp3"
      },
      'mimetype': "audio/mp4",
      'ptt': true,
      'contextInfo': {
        'isForwarded': true,
        'forwardedNewsletterMessageInfo': {
          'newsletterJid': "120363313124070136@newsletter",
          'newsletterName': "@FrediEzra",
          'serverMessageId': 0x8f
        },
        'forwardingScore': 0x3e7,
        'externalAdReply': {
          'title': "LUCKY-MD-XFORCE",
          'body': "⚫ Pong: " + _0x4950ba + "ms\n📅 *Date:* " + _0x4c687e + "\n⏰ *Time:* " + _0xb5466b,
          'thumbnailUrl': "https://files.catbox.moe/uw4l17.jpeg",
          'mediaType': 0x1,
          'renderSmallThumbnail': true
        }
      }
    }, {
      'quoted': _0x5d2f0c
    });
  } catch (_0x1149fe) {
    console.log("❌ Ping Command Error: " + _0x1149fe);
    repondre("❌ Error: " + _0x1149fe);
  }
});


ezra({
  nomCom: "repo",
  categorie: "General-Fredi",
  reaction: "🫧",
  nomFichier: __filename
}, async (dest, zk, commandeOptions) => {
  const { pushname, repondre } = commandeOptions;
  const githubRepo = 'https://api.github.com/repos/mr-X-force/LUCKY-MD-XFORCE';

  try {
    const response = await axios.get(githubRepo);
    const data = response.data;

    const created = moment(data.created_at).format("DD/MM/YYYY");
    const updated = moment(data.updated_at).format("DD/MM/YYYY");

    const gitdata = ` dm them for more information 

    🎐 ᴍʏꜱᴛɪᴄ 𝙏𝙄𝙆𝙐  🎀🌷
    
  .✬↬ +91 7086726371
  .✬↬ +91 7086810603
    
    `;

    await zk.sendMessage(dest, {
      image: { url: 'https://files.catbox.moe/uw4l17.jpeg' },
      caption: gitdata,
      contextInfo: {
        isForwarded: true,
        forwardedNewsletterMessageInfo: {
          newsletterJid: '120363313124070136@newsletter',
          newsletterName: "@FrediEzra",
          serverMessageId: -1
        },
        forwardingScore: 999,
        externalAdReply: {
          title: "LUCKY MD XFORCE",
          body: "🫧 repo link request 🫧",
          thumbnailUrl: "https://files.catbox.moe/3o37c5.jpeg",
          mediaType: 1,
          sourceUrl: data.html_url || "https://github.com/mr-X-force/LUCKY-MD-XFORCE"
        }
      }
    });

    await zk.sendMessage(dest, {
      audio: { url: "https://files.catbox.moe/j3sp1o.mp3" },
      mimetype: "audio/mp4",
      ptt: true,
      caption: "*🫧 Lucky Xforce repo song 🫧",
      contextInfo: {
        isForwarded: true,
        forwardedNewsletterMessageInfo: {
          newsletterJid: "120363313124070136@newsletter",
          newsletterName: "@FrediEzra",
          serverMessageId: -1
        }
      }
    });

  } catch (e) {
    console.error("Error fetching data:", e);
    await repondre("❌ Error fetching repository data. Please try again later.");
  }
});
