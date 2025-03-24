"use client";

import React from "react";
import styled from "styled-components";

const HeroWrapper = styled.section`
  background-color: #fff;
  padding: 40px 20px;
  margin-top: 0;
`;

const HeroContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 40px;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const TextWrapper = styled.div`
  max-width: 500px;
  font-family: "Helvetica", "Arial", sans-serif;
`;

const Logo = styled.h1`
  font-size: 50px;
  color: #d81b60;
  font-weight: 700;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 36px;
  }
`;

const Slogan = styled.p`
  font-size: 22px;
  color: #666;
  font-weight: 400;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const ImagesWrapper = styled.div`
  display: flex;
  gap: 20px;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const HeroImage = styled.img`
  width: 200px;
  height: auto;
  border-radius: 15px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    width: 160px;
  }
`;

const HeroSection: React.FC = () => {
  return (
    <HeroWrapper>
      <HeroContent>
        <TextWrapper>
          <Logo>Pixel Punch</Logo>
          <Slogan>Agencja Marketingowa</Slogan>
        </TextWrapper>

        <ImagesWrapper>
          <HeroImage src="/woman-with-magazine.jpg" alt="Woman with magazine" />
          <HeroImage src="/smartphones.jpg" alt="Smartphones" />
        </ImagesWrapper>
      </HeroContent>
    </HeroWrapper>
  );
};

export default HeroSection;
