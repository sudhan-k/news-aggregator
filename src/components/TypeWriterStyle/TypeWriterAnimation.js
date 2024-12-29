import React, { useState, useEffect } from "react";
import { textArray } from "../../utils/constents";

const TypingText = ({  typingSpeed = 100, pauseTime = 2000 }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentText = textArray[textIndex];

    if (charIndex < currentText.length) {
      const typingTimeout = setTimeout(() => {
        setDisplayedText((prev) => prev + currentText[charIndex]);
        setCharIndex((prev) => prev + 1);
      }, typingSpeed);
      return () => clearTimeout(typingTimeout);
    } else {
      const pauseTimeout = setTimeout(() => {
        setDisplayedText("");
        setCharIndex(0);
        setTextIndex((prev) => (prev + 1) % textArray.length);
      }, pauseTime);
      return () => clearTimeout(pauseTimeout);
    }
  }, [charIndex, textIndex, textArray, typingSpeed, pauseTime]);

  return <span>{" "}{displayedText}{" "}</span>;
};

export default TypingText;



  