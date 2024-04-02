// 👋 Hello there! This file contains ready-to-edit bot code.
// 🟢 Open "README.md" for instructions on how to get started!
// TL;DR Run ./connect (or .\connect.cmd on Windows) to begin.

class Bot {
  constructor(config) {
    this.config = config;
    console.log("Hello world!", this.config);
  }

  move(fen) {
    // The current game state in Forsyth-Edwards notation
    // https://en.wikipedia.org/wiki/Forsyth%E2%80%93Edwards_Notation
    console.log(fen);

    // Return moves using algebraic notation
    // https://en.wikipedia.org/wiki/Algebraic_notation_(chess)
    return this.config.player === "white" ? "e4" : "e5";
  }

  end(fen) {
    console.log("Good game!");
  }
}

module.exports.Bot = Bot;
