const { Client, LocalAuth } = require("whatsapp-web.js");
const qrcode = require("qrcode-terminal");

const client = new Client({
  authStrategy: new LocalAuth()
});

client.on("qr", (qr) => {
  console.log("QR Code:");
  qrcode.generate(qr, { small: true });
});

client.on("ready", () => {
  console.log("✅ Bot Connected!");
});

client.on("message", async (message) => {
  if (message.fromMe) return;

  await message.reply("🙏 Namaste! Aapka message mil gaya. Jaldi reply karenge.");
});

client.initialize();
