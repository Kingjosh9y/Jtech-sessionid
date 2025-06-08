const PastebinAPI = require('pastebin-js'),
pastebin = new PastebinAPI('0029VahusSh0QeaoFzHJCk2x')
const {makeid} = require('./id');
const QRCode = require('qrcode');
const express = require('express');
const path = require('path');
const fs = require('fs');
let router = express.Router()
const pino = require("pino");
const {
	default: Wasi_Tech,
	useMultiFileAuthState,
	jidNormalizedUser,
	Browsers,
	delay,
	makeInMemoryStore,
} = require("@whiskeysockets/baileys");

function removeFile(FilePath) {
	if (!fs.existsSync(FilePath)) return false;
	fs.rmSync(FilePath, {
		recursive: true,
		force: true
	})
};
const {
	readFile
} = require("node:fs/promises")
router.get('/', async (req, res) => {
	const id = makeid();
	async function JTECH-WABOT_QR_CODE() {
		const {
			state,
			saveCreds
		} = await useMultiFileAuthState('./temp/' + id)
		try {
			let Qr_Code_By_JTECH = JTECH({
				auth: state,
				printQRInTerminal: false,
				logger: pino({
					level: "silent"
				}),
				browser: Browsers.macOS("Desktop"),
			});

			Qr_Code_By_JTECH-WABOT.ev.on('creds.update', saveCreds)
			Qr_Code_By_JTECH-WABOT.ev.on("connection.update", async (s) => {
				const {
					connection,
					lastDisconnect,
					qr
				} = s;
				if (qr) await res.end(await QRCode.toBuffer(qr));
				if (connection == "open") {
					await delay(5000);
					let data = fs.readFileSync(__dirname + `/temp/${id}/creds.json`);
					await delay(800);
				   let b64data = Buffer.from(data).toString('base64');
				   let session = await Qr_Code_By_JTECH-WABOT.sendMessage(Qr_Code_By_JTECH-WABOT.user.id, { text: '' + b64data });
	
				   let JTECH-WABOT_TEXT = `JTECH`
*_Session Connected By JTECH*
*_Made With 🤍_*
______________________________________
╔════◇
║ *『 AMAZING YOU'VE CHOSEN JTECH-WABOT 』*
║ _You Have Completed the First Step to Deploy a Whatsapp Bot._
╚════════════════════════╝
╔═════◇
║  『••• 𝗩𝗶𝘀𝗶𝘁 𝗙𝗼𝗿 𝗛𝗲𝗹𝗽 •••』
║❒ *Ytube:* _https://youtube.com/@washadjjoshyy?si=iqCCGtBBqHV-5wlz
║❒ *Owner:* https://wa.me/27721358592_
║❒ *Repo:* _https://github.com/Kingjosh9y 
║❒ *WaGroup:* _https://chat.whatsapp.com/Fb4u9b4XmJ3KRV3UDQvnUB
║❒ *WaChannel:* _https://whatsapp.com/channel/0029Vb6FovDKwqSJgSOcUS43
║❒ *Plugins:* _https://github.com/Kingjosh9y 
╚════════════════════════╝
_____________________________________
	
_Don't Forget To Give Star To My Repo_`
	 await Qr_Code_By_JTECH.sendMessage(Qr_Code_By_JTech.user.id,{text:JTECH-WABOT_TEXT},{quoted:session})



					await delay(100);
					await Qr_Code_By_JTech.ws.close();
					return await removeFile("temp/" + id);
				} else if (connection === "close" && lastDisconnect && lastDisconnect.error && lastDisconnect.error.output.statusCode != 401) {
					await delay(10000);
					JTECH-WABOT_QR_CODE();
				}
			});
		} catch (err) {
			if (!res.headersSent) {
				await res.json({
					code: "Service is Currently Unavailable"
				});
			}
			console.log(err);
			await removeFile("temp/" + id);
		}
	}
	return await JTECH-WABOT_QR_CODE()
});
module.exports = router
