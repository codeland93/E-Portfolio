import React, { useEffect, useState } from 'react';

const TypingEffect = ({ text }) => {
  const [displayedText, setDisplayedText] = useState('');
  let i = 0;

  useEffect(() => {
    const interval = setInterval(() => {
      setDisplayedText((prev) => prev + text[i]);
      i += 1;
      if (i === text.length) clearInterval(interval);
    }, 100);

    return () => clearInterval(interval);
  }, [text]);

  return <span>{displayedText}</span>;
};

export default TypingEffect;
