// ⚠️ Only modify this file if you know what you're doing!
const { Bot } = require("./bot");

function send(channel, payload) {
  process.stderr.write(
    `\n<<zilch>>.${channel}${payload ? "." + payload : ""}\n`
  );
}

let bot;

process.stdin.on("data", async (chunk) => {
  const data = chunk.toString().trim();
  const channel = data.split(".", 1)[0];
  const payload = data.slice(channel.length + 1);

  if (channel === "start") {
    const standardCustomConfigSplit = payload.indexOf(".");
    const standardConfigParts = payload
      .slice(0, standardCustomConfigSplit)
      .split(",");

    const config = {
      gameTimeLimit: parseInt(standardConfigParts[0]),
      turnTimeLimit: parseInt(standardConfigParts[1]),
      player: standardConfigParts[2] === "0" ? "white" : "black",
      startingPosition: payload.slice(standardCustomConfigSplit + 1),
    };

    bot = new Bot(config);

    send("start");
    return;
  }

  if (!bot) {
    throw new Error("Bot not yet initialized.");
  }

  if (channel === "move") {
    const move = await bot.move(payload);
    send("move", move);
    return;
  }

  if (channel === "end") {
    await bot.end(payload);
    return;
  }
});

send("ready");
