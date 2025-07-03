'use client';

import { Typewriter } from 'react-simple-typewriter';

type Props = {
  words: string[];
};

export default function CustomTypewriter({ words }: Props) {
  return (
    <span className="text-white/70">
      <Typewriter
        words={words}
        loop={0} 
        cursor
        cursorStyle="|"
        typeSpeed={90}
        deleteSpeed={50}
        delaySpeed={1500}
      />
    </span>
  );
}
