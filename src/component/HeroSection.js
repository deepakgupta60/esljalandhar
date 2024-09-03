import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { gsap } from 'gsap';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';

gsap.registerPlugin(MotionPathPlugin);

// Styled component for the Hero Section
const HeroSection = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  overflow: hidden;
  color: white;
  text-align: center;
  background-color: #0f2027;
  padding: 1rem;
`;

// SVG Background Container
const BackgroundSVG = styled.svg`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
`;

// Styled component for the Brand Name
const BrandName = styled.div`
  font-family: 'Lora', serif;
  font-size: 2rem;
  font-weight: 700;
  color: #f5f5f5;
  margin-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
  border: 2px solid rgba(245, 245, 245, 0.2);
  padding: 0.5rem 1rem;
  border-radius: 8px;
  position: relative;
  z-index: 1;
  @media (min-width: 768px) {
    font-size: 3rem;
  }

  &:hover, &:active {
    background-color: rgba(245, 245, 245, 0.1);
    cursor: pointer;
    transform: scale(1.05);
    transition: transform 0.3s ease;
  }
`;

// Styled component for the Main Text
const HeroText = styled.div`
  font-family: 'Lora', serif;
  font-size: 2rem;
  font-weight: 600;
  max-width: 90%;
  margin: 0 auto;
  text-transform: none;
  letter-spacing: 0.05em;
  color: #f5f5f5;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.4);
  border-bottom: 2px solid rgba(245, 245, 245, 0.3);
  padding-bottom: 0.5rem;
  position: relative;
  z-index: 1;
  @media (min-width: 768px) {
    font-size: 3rem;
    border-bottom: none;
  }
`;

// Styled component for the Sub Text
const SubText = styled.div`
  font-family: 'Poppins', sans-serif;
  font-size: 1rem;
  font-weight: 300;
  max-width: 90%;
  margin: 1rem auto 0;
  color: #d1d1d1;
  opacity: 0.9;
  position: relative;
  z-index: 1;
  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
`;

const Hero = () => {
  const svgRef = useRef(null);

  useEffect(() => {
    const circles = svgRef.current.querySelectorAll('.circle');
    const blobs = svgRef.current.querySelectorAll('.blob');

    gsap.to(circles, {
      duration: 10,
      repeat: -1,
      motionPath: {
        path: [{x: 50, y: -100}, {x: 150, y: 0}, {x: 50, y: 100}, {x: -100, y: 50}, {x: 0, y: -50}],
        curviness: 1.25,
        autoRotate: true
      },
      ease: "power1.inOut"
    });

    gsap.to(blobs, {
      duration: 8,
      scale: 1.5,
      rotate: 360,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });
  }, []);

  return (
    <HeroSection>
      <BackgroundSVG ref={svgRef} viewBox="0 0 800 800" preserveAspectRatio="xMidYMid slice">
        <circle className="circle" cx="200" cy="200" r="100" fill="#ff6b6b" />
        <circle className="circle" cx="600" cy="600" r="50" fill="#feb47b" />
        <path className="blob" fill="#86a8e7" d="M57.6,-50.2C71.5,-30.8,71.7,-6.5,62.9,10.8C54.1,28.1,36.3,38.3,19.9,49.2C3.5,60.1,-11.5,71.7,-28.2,71.8C-44.9,71.8,-63.3,60.3,-63.3,44.4C-63.2,28.4,-44.7,8,-31.9,-10.6C-19.2,-29.2,-12.1,-46,-1.7,-46.5C8.8,-47,17.6,-31.3,30,-23.2C42.5,-15.1,58.6,-14.7,57.6,-50.2Z" transform="translate(300 300)" />
      </BackgroundSVG>
      <BrandName>
        ESL Jalandhar
      </BrandName>
      <HeroText>
        Something Extraordinary is on the Way
      </HeroText>
      <SubText>
        We're building a space where your focus will flourish—stay tuned for our grand reveal!
      </SubText>
    </HeroSection>
  );
};

export default Hero;
