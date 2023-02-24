import React from "react";
import Card from "./card";
import imojipedia from "../emojipedia";

function emojipedias(imoji) {
  return (
    <Card imoji={imoji.emoji} heading={imoji.name} content={imoji.meaning} />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      {imojipedia.map(emojipedias)}
    </div>
  );
}

export default App;
