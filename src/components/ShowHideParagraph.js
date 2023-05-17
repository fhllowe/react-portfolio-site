import React, { useState } from 'react';

const ShowHideParagraph = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      <img src='' onClick={toggleVisibility}>Toggle</img>
      {isVisible && <p>{isVisible ? ` Hi, I'm Fred, a web developer who transitioned from the hospitality industry to the exciting world of technology. I'm passionate about creating exceptional user experiences and solving complex problems with elegant code. My background in guest relations has taught me valuable skills that I've been able to transfer to my work in web development. Adapting to the ever-evolving tech landscape has been challenging, but it's also been incredibly rewarding. I'm excited to share my journey with you and the lessons I've learned along the way.` : 'hidden'}.</p>}
    </div>
  );
};

export default ShowHideParagraph;
