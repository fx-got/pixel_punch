"use client";

import React from "react";
import styled from "styled-components";

const Section = styled.section`
  background-color: #dca9b6;
  padding: 2px 0px 0px;
  position: relative;
  overflow: hidden;
`;

const Title = styled.h2`
  font-family: "Tan Nimbus", serif;
  font-size: 40px;
  color: #734f96;
  text-align: center;
  margin-bottom: 40px;
  position: relative;

  &::after {
    content: "✨";
    margin-left: 12px;
    font-size: 28px;
  }
`;

const BubbleContainer = styled.div`
  position: relative;
  width: 100%;
  height: 250px;

  @media (max-width: 768px) {
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
  }
`;

const Bubble = styled.div<{ top: string; left: string; rotate: string }>`
  position: absolute;
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  transform: rotate(${(props) => props.rotate});
  background: white;
  padding: 24px 32px;
  font-weight: 600;
  font-size: 16px;
  line-height: 1.5;
  letter-spacing: 0.5px;
  text-align: center;
  font-family: "Georgia", serif;
  border-radius: 50% 50% 60% 40% / 50% 60% 40% 50%;
  box-shadow: 8px 12px 16px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    position: static;
    transform: none;
  }
`;

const bubbles = [
  {
    text: "EDUKACJA I\nPROSTOTA",
    top: "0%",
    left: "10%",
    rotate: "-6deg",
  },
  {
    text: "PRECYZYJNY\nPRZEKAZ",
    top: "5%",
    left: "35%",
    rotate: "4deg",
  },
  {
    text: "NOWOCZESNE\nPODEJŚCIE",
    top: "40%",
    left: "20%",
    rotate: "-3deg",
  },
  {
    text: "DZIAŁAMY\nLOKALNIE, MYŚLIMY\nGLOBALNIE",
    top: "38%",
    left: "55%",
    rotate: "2deg",
  },
];

const BonusBubbles: React.FC = () => {
  return (
    <Section>
      <Title>MARKETING Z BONUSEM</Title>
      <BubbleContainer>
        {bubbles.map((bubble, index) => (
          <Bubble
            key={index}
            top={bubble.top}
            left={bubble.left}
            rotate={bubble.rotate}
          >
            {bubble.text}
          </Bubble>
        ))}
      </BubbleContainer>
    </Section>
  );
};

export default BonusBubbles;
