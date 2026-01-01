const { Telegraf, Markup } = require("telegraf");

// BOT TOKEN will be added securely on Render
const bot = new Telegraf(process.env.BOT_TOKEN);

// Language selection
bot.start((ctx) => {
  ctx.reply(
    "Choose Language / ቋንቋ ምረጥ",
    Markup.inlineKeyboard([
      [Markup.button.callback("English 🇬🇧", "lang_en")],
      [Markup.button.callback("አማርኛ 🇪🇹", "lang_am")]
    ])
  );
});

bot.action("lang_en", (ctx) => {
  ctx.reply(
    "Welcome to Caset Online Shop 🛒\nChoose an option:",
    Markup.keyboard([
      ["🛍 Products", "🧺 My Cart"],
      ["📞 Contact"]
    ]).resize()
  );
});

bot.action("lang_am", (ctx) => {
  ctx.reply(
    "እንኳን ወደ Caset የመስመር ላይ ሱቅ በደህና መጡ 🛒\nእባክዎ ይምረጡ፡",
    Markup.keyboard([
      ["🛍 እቃዎች", "🧺 ጋሪ"],
      ["📞 አግኙን"]
    ]).resize()
  );
});

// Temporary product example
bot.hears(["🛍 Products", "🛍 እቃዎች"], (ctx) => {
  ctx.reply(
    "🥤 Coca-Cola 1L\nPrice: 80 ETB\n\n➕ Add to cart (coming next step)"
  );
});

// Start bot
bot.launch();

// Graceful stop
process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));
