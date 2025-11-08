import React from "react";
import Typewriter from "typewriter-effect";

function Typing() {
  return (
    <Typewriter
      options={{
        strings: [
          "Samart AI assistant",
          "Conversational  Chatbot",
          "AI-powered Knowledge Base Agent",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
        cursor: '⚡',
        skipAddStyles: false
      }}
    />
  );
}

export default Typing;
