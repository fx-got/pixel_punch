"use client";

import React from "react";
import styled from "styled-components";

const TopWrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background-color: #dca9b6;
  padding: 80px 40px;
  gap: 40px; // <-- odstęp między ramkami
`;

const StyledCard = styled.div`
  background: linear-gradient(145deg, #8f6ba9, #a278b8);
  color: white;
  padding: 60px 40px;
  border: 2px solid #e8d8f0;
  border-radius: 20px;
  box-shadow: 8px 8px 20px rgba(0, 0, 0, 0.15);
  position: relative;
  overflow: hidden;
  min-width: 280px;
  flex: 1;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const LeftBox = styled(StyledCard)`
  font-family: "Tan Nimbus", serif;
  text-align: center;
  gap: 12px;
`;

const RightBox = styled(StyledCard)`
  font-family: "Georgia", serif;
`;

const BrandName = styled.h1`
  font-size: 50px;
  font-weight: 800;
  line-height: 1;
`;

const BrandSub = styled.h2`
  font-size: 52px;
  font-weight: 500;
  margin-top: -30px;
`;

const Tag = styled.p`
  font-size: 18px;
  margin-top: 16px;
  letter-spacing: 0.5px;
`;

const Highlight = styled.div`
  background-color: rgba(255, 255, 255, 0.3);
  display: inline-block;
  font-weight: bold;
  padding: 8px 16px;
  font-size: 20px;
  margin-bottom: 24px;
`;

const Description = styled.p`
  font-size: 19px;
  line-height: 1.7;
`;

const Sparkle = styled.div`
  position: absolute;
  top: 12px;
  right: 16px;
  font-size: 30px;
  filter: drop-shadow(0 0 2px white);
  animation: sparkle 1.5s ease-in-out infinite;

  @keyframes sparkle {
    0%,
    100% {
      transform: scale(1);
      opacity: 1;
    }
    50% {
      transform: scale(1.3);
      opacity: 0.6;
    }
  }
`;

const IntroTop = () => {
  return (
    <TopWrapper>
      <LeftBox>
        <Sparkle>✨</Sparkle>
        <BrandName>PIXEL</BrandName>
        <BrandSub>punch</BrandSub>
        <Tag>AGENCJA MARKETINGOWA</Tag>
      </LeftBox>

      <RightBox>
        <Highlight>Rodzynka wśród agencji marketingowych</Highlight>
        <Description>
          PixelPunch wyróżnia się tym, że nie tylko robi marketing – uczy, jak
          go zrozumieć i ogarnąć. Zamiast mądrzyć się żargonem, mówimy ludzkim
          językiem, oferujemy konkretne efekty albo gotowy produkt, albo
          gotowego do działania klienta.
        </Description>
      </RightBox>
    </TopWrapper>
  );
};

export default IntroTop;
