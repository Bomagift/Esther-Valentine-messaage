import React, { useState, useEffect } from "react";
import "./MessagePage.css";

const MessagePage = () => {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);

  const message = `My Love ❤️,

From the very first moment we met , you’ve had this way of making everything feel right. 
I remember the little moments, the way you look at me when I’m not paying attention, the way your laughter fills the 
room and makes my heart lighter, the way your hand fits perfectly in mine like it was always meant to be there. 
Every moment with you is a memory I never want to forget.

I think about the times we’ve talked for hours, lost in each other’s words, and the times we’ve said nothing at all 
yet understood everything. The quiet moments, the crazy ones, the times we’ve laughed until our stomachs hurt, 
and even the times when we’ve argued, when emotions ran high and we both stood our ground. 
But even in those moments, even when we don’t see eye to eye, there is never a doubt in my heart that our love is 
worth more than any disagreement. No matter how upset we get, we always find our way back to each other, stronger, 
understanding each other a little more, and loving even deeper.

Loving you isn’t just about the easy times. It is about every single part of this journey we are on together. 
It is in the way we make up after a fight, in the way we choose each other even when it is hard, and in the way 
we refuse to let anything come between us. With you, love is not just a word; it is something I feel in every 
heartbeat, in every touch, in every glance.

So today, on Valentine’s Day, I just want to remind you how much I cherish you. I love you not just for the 
perfect moments but for the real, raw, and beautiful love we share. And I cannot wait to create even more 
memories with you through every high and every low, forever and always.

Forever yours,  
💖`;

  useEffect(() => {
    if (index < message.length) {
      const interval = setTimeout(() => {
        setText((prev) => prev + message[index]);
        setIndex(index + 1);
      }, 50);

      return () => clearTimeout(interval);
    }
  }, [index, message]);


  const replayMessage = () => {
    setText("");
    setIndex(0);
  };

  return (
    <div className="message-container">
      <p className="typing">{text}</p>
      <button onClick={replayMessage}>Replay</button>
    </div>
  );
};

export default MessagePage;
