import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { gsap } from 'gsap';

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
    const books = svgRef.current.querySelectorAll('.book');

    gsap.to(books, {
      duration: 20,
      x: () => Math.random() * 800 - 400,
      y: () => Math.random() * 800 - 400,
      rotate: () => Math.random() * 360,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
      stagger: {
        amount: 5,
        from: "random"
      }
    });
  }, []);

  return (
    <HeroSection>
      <BackgroundSVG ref={svgRef} viewBox="0 0 800 800" preserveAspectRatio="xMidYMid slice">
        <rect className="book" x="100" y="100" width="30" height="40" fill="#ff6b6b" />
        <rect className="book" x="300" y="200" width="20" height="30" fill="#feb47b" />
        <rect className="book" x="500" y="300" width="25" height="35" fill="#86a8e7" />
        <rect className="book" x="700" y="400" width="35" height="50" fill="#d4fc79" />
        <rect className="book" x="200" y="600" width="20" height="30" fill="#ff7e5f" />
      </BackgroundSVG>
      <BrandName>
        ESL Jalandhar
      </BrandName>
      <HeroText>
        Something Extraordinary is on the Way
      </HeroText>
      <SubText>
        We're building a space where your focus will flourish stay tuned for our grand reveal!
      </SubText>
    </HeroSection>
  );
};

export default Hero;
                                                                    