import "./styles.css";
import { useState } from "react";

const animalsEmoji = {
  "🐺": "wolf",
  "🦊": "fox",
  "🐅": "tiger",
  "🐆": "leopard",
  "🦄": "unicorn",
  "🐼": "panda",
  "🐄": "cow",
  "🐕": "dog",
  "🦝": "raccoon",
  "🐪": "camel",
  "🐔": "chicken",
  "🐧": "penguin",
  "🐊": "crocodile",
  "🐉": "dragon",
  "🦕": "sauropod"
};

let emojisWeKnow = Object.keys(animalsEmoji);

export default function App() {
  const [emoji, setEmoji] = useState("");

  function inputHandler(event) {
    let currentEmoji = event.target.value;
    let searchedEmoji = animalsEmoji[currentEmoji];
    if (searchedEmoji === undefined) {
      searchedEmoji = "emoji not found";
    }
    setEmoji(searchedEmoji);
  }
  function clickHandler(emoji) {
    let emojiName = animalsEmoji[emoji];
    setEmoji(emojiName);
  }
  return (
    <div className="App">
      <div className="nav">
        <h1>Animals Interpreter</h1>
      </div>
      <div className="main-section">
        <input onChange={inputHandler}></input>
        <h2>{emoji}</h2>
        <h3>emojis we know </h3>
        <div className="emoji-animal">
          {emojisWeKnow.map((emoji) => (
            <span
              className="single-emoji"
              onClick={() => clickHandler(emoji)}
              key={emoji}
            >
              {emoji}
            </span>
          ))}
        </div>
      </div>
      <div className="footer">
        <h2>About</h2>
        <p>
          Click on any emoji and find out the name of that emoji, you can also
          enter an emoji and get the name of that emoji
        </p>
      </div>
    </div>
  );
}
