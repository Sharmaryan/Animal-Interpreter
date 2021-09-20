import "./styles.css";
import { useState } from "react";

const flags = {
  "🐺": "wolf",
  "🦊": "fox",
  "🐅": "tiger",
  "🐆": "leopard",
  "🦄": "unicorn",
  "🐼": "panda",
  "🐄": "cow",
  "🐕": "dog",
  "🦝": "raccoon",
  "🐪": "camel"
};

let emojisWeKnow = Object.keys(flags);

export default function App() {
  const [emoji, setEmoji] = useState("");

  function inputHandler(event) {
    let currentEmoji = event.target.value;
    let searchedEmoji = flags[currentEmoji];
    if (searchedEmoji === undefined) {
      searchedEmoji = "sorry, we don't have this in our database";
    }
    setEmoji(searchedEmoji);
  }
  function clickHandler(emoji) {
    let emojiName = flags[emoji];
    setEmoji(emojiName);
  }
  return (
    <div className="App">
      <h1>Animals Interpreter</h1>
      <input onChange={inputHandler}></input>
      <h2>{emoji}</h2>
      <h3>emojis we know </h3>
      <div className="emoji-animal">
        {emojisWeKnow.map((emoji) => (
          <span
            style={{ fontSize: "1.5rem", padding: ".5rem", cursor: "pointer" }}
            onClick={() => clickHandler(emoji)}
            key={emoji}
          >
            {emoji}
          </span>
        ))}
      </div>
    </div>
  );
}
