"use client";

import React from "react";
import styled from "styled-components";

const SectionWrapper = styled.section`
  display: flex;
  flex-direction: row;
  background-color: #d89ca2;
  padding: 40px 20px;
  flex-wrap: wrap;
  justify-content: center;
  gap: 40px;
`;

const LeftBox = styled.div`
  background-color: #a46fa0;
  color: white;
  padding: 40px 30px;
  width: 300px;
  text-align: center;
  font-family: "Georgia", serif;
`;

const LogoTop = styled.h1`
  font-size: 50px;
  line-height: 1;
  margin: 0;
  font-weight: bold;
`;

const LogoBottom = styled.h2`
  font-size: 42px;
  margin: 0;
`;

const SubText = styled.p`
  margin-top: 16px;
  font-size: 16px;
  letter-spacing: 1px;
`;

const RightBox = styled.div`
  background-color: #a46fa0;
  color: white;
  padding: 40px 30px;
  max-width: 700px;
  flex: 1;
  position: relative;
`;

const Ribbon = styled.div`
  background-color: #a46fa0;
  color: white;
  font-weight: bold;
  padding: 10px 20px;
  font-size: 20px;
  border-left: 8px solid #fff;
  margin-bottom: 20px;
  font-family: "Georgia", serif;
`;

const Description = styled.p`
  font-size: 20px;
  line-height: 1.6;
  font-family: "Georgia", serif;
`;

const IntroSection: React.FC = () => {
  return (
    <SectionWrapper>
      <LeftBox>
        <LogoTop>PIXEL</LogoTop>
        <LogoBottom>punch</LogoBottom>
        <SubText>AGENCJA MARKETINGOWA</SubText>
      </LeftBox>

      <RightBox>
        <Ribbon>Rodzynka wśród agencji marketingowych</Ribbon>
        <Description>
          PixelPunch wyróżnia się tym, że nie tylko robi marketing – uczy, jak
          go zrozumieć i ogarnąć. Zamiast mądrzyć się żargonem, mówimy ludzkim
          językiem, oferujemy konkretne efekty albo gotowy produkt, albo
          gotowego do działania klienta.
        </Description>
      </RightBox>
    </SectionWrapper>
  );
};

export default IntroSection;
