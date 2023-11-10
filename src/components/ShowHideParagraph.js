import React, { useState } from 'react';
import style from './styles/ShowHideParagraph.module.css'

const ShowHideParagraph = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div  className={style.toggle}>
      <button src='' onClick={toggleVisibility}>Toggle</button>
      {isVisible && <p className={style.showHide}>{isVisible ? ` Hi, I'm Fred, a web developer who transitioned from the hospitality industry. My background in guest relations has taught me valuable skills that I've been able to transfer to my work in web development. I'm excited to share my journey with you and the lessons I've learned along the way.` : 'hidden'}.</p>}
    </div>
  );
};

export default ShowHideParagraph;
