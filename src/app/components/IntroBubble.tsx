"use client";

import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  color: white;
`;

const Bubbles = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
`;

const Bubble = styled.div`
  background-color: white;
  color: black;
  padding: 20px 24px;
  border-radius: 50px;
  font-weight: 600;
  font-size: 18px;
  font-family: "Georgia", serif;
  text-align: center;
`;

const Title = styled.h3`
  font-family: "Georgia", serif;
  font-size: 38px;
  color: #5c3c77;
`;

const Speech = styled.div`
  background: white;
  color: black;
  padding: 20px;
  border-radius: 20px;
  width: 300px;
  box-shadow: 5px 5px 0 #774188;
  font-size: 18px;
  font-family: "Georgia", serif;

  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: -20px;
    left: 40px;
    width: 0;
    height: 0;
    border-top: 20px solid white;
    border-left: 20px solid transparent;
  }
`;

const Subtitle = styled.h4`
  font-size: 30px;
  color: #a18cc9;
  font-weight: bold;
  font-family: "Georgia", serif;
`;

const Paragraph = styled.p`
  font-size: 20px;
  font-weight: 400;
`;

const IntroBubble = () => {
  return (
    <Wrapper>
      <Bubbles>
        <Bubble>EDUKACJA I PROSTOTA</Bubble>
        <Bubble>PRECYZYJNY PRZEKAZ</Bubble>
        <Bubble>NOWOCZESNE PODEJŚCIE</Bubble>
        <Bubble>DZIAŁAMY LOKALNIE, MYŚLIMY GLOBALNIE</Bubble>
      </Bubbles>

      <Title>MARKETING Z BONUSEM ✨</Title>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Subtitle>Nasze szkolenia?</Subtitle>
        <Paragraph>
          To jak marketingowy escape room – wychodzisz tylko z wiedzą i gotowym
          planem
        </Paragraph>
        <Speech>
          Nie uczymy „co to jest Facebook” – pokazujemy, jak go wykorzystać, by
          Twoja firma naprawdę była widoczna. Praktyka, konkrety, bez nudnych
          slajdów. Tu nie siedzisz – tu działasz.
        </Speech>
      </div>
    </Wrapper>
  );
};

export default IntroBubble;
