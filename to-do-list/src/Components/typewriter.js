import React from 'react';
import Typewriter from 'typewriter-effect';

const MultiLineTypewriter = () => {
  return (
    <div>
      <Typewriter
        onInit={(typewriter) => {
          typewriter
            .typeString('Productive')
            .pauseFor(1000)
            .deleteAll()
            .typeString('Creative')
            .start();
        }}
      />
     
    </div>
  );
};

export default MultiLineTypewriter;