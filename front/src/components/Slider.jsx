import React, { useEffect, useRef } from 'react';
import './Slider.css'; // Make sure to import your CSS file
import img1 from '../image/img1.jpg'
import img2 from '../image/img2.png'
import img3 from '../image/img3.jpg'

const Slider = () => {
  const slidyRef = useRef(null);

  useEffect(() => {
    const slidy = slidyRef.current;
    const timeOnSlide = 3;
    const timeBetweenSlides = 1;

    let animationstring = 'animation';
    let animation = false;
    let keyframeprefix = '';
    const domPrefixes = 'Webkit Moz O Khtml'.split(' ');
    let pfx = '';

    if (slidy.style.animationName !== undefined) {
      animation = true;
    }

    if (animation === false) {
      for (let i = 0; i < domPrefixes.length; i++) {
        if (slidy.style[domPrefixes[i] + 'AnimationName'] !== undefined) {
          pfx = domPrefixes[i];
          animationstring = pfx + 'Animation';
          keyframeprefix = '-' + pfx.toLowerCase() + '-';
          animation = true;
          break;
        }
      }
    }

    if (animation === false) {
      // animate in JavaScript fallback
    } else {
      const images = slidy.getElementsByTagName('img');
      const firstImg = images[0];
      const imgWrap = firstImg.cloneNode(false);
      slidy.appendChild(imgWrap);

      const imgCount = images.length;
      const totalTime = (timeOnSlide + timeBetweenSlides) * (imgCount - 1);
      const slideRatio = (timeOnSlide / totalTime) * 100;
      const moveRatio = (timeBetweenSlides / totalTime) * 100;
      const basePercentage = 100 / imgCount;
      let position = 0;

      const css = document.createElement('style');
      css.type = 'text/css';
      css.innerHTML += "#slidy { text-align: left; margin: 0; font-size: 0; position: relative; width: " + imgCount * 100 + '%; }\n';
      css.innerHTML += "#slidy img { float: left; width: " + basePercentage + "%; }\n";
      css.innerHTML += "@" + keyframeprefix + "keyframes slidy {\n";

      for (let i = 0; i < imgCount - 1; i++) {
        position += slideRatio;
        css.innerHTML += position + "% { left: -" + i * 100 + "%; }\n";
        position += moveRatio;
        css.innerHTML += position + "% { left: -" + (i + 1) * 100 + "%; }\n";
      }

      css.innerHTML += "}\n";
      css.innerHTML += "#slidy { left: 0%; " + keyframeprefix + "transform: translate3d(0,0,0); " + keyframeprefix + "animation: " + totalTime + "s slidy infinite; }\n";

      document.body.appendChild(css);
    }
  }, []); // Empty dependency array ensures useEffect runs only once after the initial render

  return (
    <div id="slidy-container">
      <figure id="slidy" ref={slidyRef}>
       
       
        <img src="https://www.qjobs.be/sites/qjobsbe/files/styles/home_hero_large/public/images/2023-03/foto-kantoorpagina%20%2810%29.png?h=8b20aea8&itok=lCruhaVb" alt="job" />
        <img   src ={img1}/>
        <img src={img3} alt="job" />
        <img src={img2} alt="job" />

      </figure>
    </div>
  );
};

export default Slider;
