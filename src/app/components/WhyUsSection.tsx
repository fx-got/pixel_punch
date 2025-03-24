"use client";

import React from "react";
import styled from "styled-components";

const WhyUsWrapper = styled.section`
  padding: 50px 20px;
  background-color: #fff;
  text-align: center;

  @media (max-width: 768px) {
    padding: 30px 10px;
  }
`;

const WhyUsTitleWrapper = styled.div`
  position: relative;
  display: inline-block;
`;

const WhyUsTitle = styled.h2`
  font-size: 38px;
  color: #d81b60;
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

const TitleDecoration = styled.span`
  position: absolute;
  top: -10px;
  left: -30px;
  font-size: 24px;
  color: #d81b60;

  @media (max-width: 768px) {
    font-size: 22px;
    left: -20px;
  }
`;

const WhyUsText = styled.p`
  font-size: 20px;
  color: #333;
  font-family: "Poppins", sans-serif;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const WhyUsSection: React.FC = () => {
  return (
    <WhyUsWrapper>
      <WhyUsTitleWrapper>
        <WhyUsTitle>Dlaczego Pixel Punch?</WhyUsTitle>
        <TitleDecoration>⭕</TitleDecoration>
      </WhyUsTitleWrapper>
      <WhyUsText>
        Pixel Punch to nie agencja – to cyfrowy nokaut. Wchodzimy z pomysłem,
        wychodzimy z efektem, który zostaje w głowie.
      </WhyUsText>
    </WhyUsWrapper>
  );
};

export default WhyUsSection;
