"use client";

import React from "react";
import styled from "styled-components";

const Wrapper = styled.section`
  background-color: #dca9b6;
  padding: 20px 200px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 30px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 40px;
    padding: 20px 40px;
  }
`;

const TextBox = styled.div`
  color: white;
  max-width: 480px;
  flex: 1;
`;

const Title = styled.h2`
  font-size: 32px;
  font-weight: 700;
  color: #8e69af;
  margin-bottom: 12px;
`;

const Line = styled.div`
  width: 70px;
  height: 4px;
  background-color: white;
  margin-bottom: 20px;
`;

const Description = styled.p`
  font-size: 22px;
  line-height: 1.5;
`;

const ChatContainer = styled.div`
  position: relative;
  max-width: 520px;
  flex: 1;
  display: flex;
  justify-content: flex-end;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const ChatBubble = styled.div`
  background-color: #ffffff;
  color: #000;
  padding: 24px 28px;
  border-radius: 24px;
  box-shadow: 6px 6px 0px #9b79b3;
  font-size: 20px;
  line-height: 1.6;
  position: relative;
  max-width: 100%;
`;

const SpeechTail = styled.div`
  position: absolute;
  bottom: -22px;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 0;
  border-left: 22px solid transparent;
  border-right: 22px solid transparent;
  border-top: 22px solid #ffffff;
  filter: drop-shadow(3px 3px 0px #9b79b3);
`;

const TrainingSection: React.FC = () => {
  return (
    <Wrapper>
      <TextBox>
        <Title>Nasze szkolenia?</Title>
        <Line />
        <Description>
          To jak marketingowy escape room – wychodzisz tylko z wiedzą i gotowym
          planem
        </Description>
      </TextBox>

      <ChatContainer>
        <ChatBubble>
          Nie uczymy „co to jest Facebook” – pokazujemy, jak go wykorzystać, by
          Twoja firma naprawdę była widoczna. Praktyka, konkrety, bez nudnych
          slajdów. Tu nie siedzisz – tu działasz.
        </ChatBubble>
        <SpeechTail />
      </ChatContainer>
    </Wrapper>
  );
};

export default TrainingSection;
