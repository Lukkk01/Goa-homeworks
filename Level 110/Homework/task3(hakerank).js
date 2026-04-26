// https://www.hackerrank.com/challenges/react-slideshow-1/problem?isFullScreen=trueimport 

import React, { useState } from "react";

function Slideshow({ slides }) {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((index + 1) % slides.length);
  };

  const prevSlide = () => {
    setIndex((index - 1 + slides.length) % slides.length);
  };

  return (
    <div>
      <h1>{slides[index].title}</h1>
      <p>{slides[index].text}</p>

      <button onClick={prevSlide}>Prev</button>
      <button onClick={nextSlide}>Next</button>
    </div>
  );
}

export default Slideshow;