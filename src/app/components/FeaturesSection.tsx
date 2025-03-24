"use client";

import React from "react";
import styled from "styled-components";

const FeaturesWrapper = styled.section`
  padding: 50px 20px;
  background-color: #f8e1e9;
  text-align: center;

  @media (max-width: 768px) {
    padding: 30px 10px;
  }
`;

const FeaturesTitleWrapper = styled.div`
  position: relative;
  display: inline-block;
`;

const FeaturesTitle = styled.h2`
  font-size: 48px;
  color: #d81b60;
  font-family: "Helvetica", "Arial", sans-serif;
  font-weight: 700;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    font-size: 40px;
  }
`;

const TitleDecoration = styled.span`
  position: absolute;
  top: -10px;
  right: -30px;
  font-size: 26px;
  color: #d81b60;

  @media (max-width: 768px) {
    font-size: 28px;
    right: -20px;
  }
`;

const FeaturesList = styled.ul`
  list-style: none;
  padding: 0;
  max-width: 800px;
  margin: 0 auto;
  text-align: left;
`;

const FeatureItem = styled.li`
  font-size: 42px !important;
  color: #333;
  font-family: "Poppins", sans-serif;
  margin-bottom: 30px;
  line-height: 1.9;

  @media (max-width: 768px) {
    font-size: 32px !important;
  }

  &:before {
    content: "•";
    color: #d81b60;
    font-weight: bold;
    display: inline-block;
    width: 1em;
    margin-left: -1em;
  }
`;

const FeaturesSection: React.FC = () => {
  const features = [
    "AI to nie przyszłość – to teraz! Prowadzimy sztuczną inteligencję do naszych kampanii – od analizy, przez personalizację treści, aż po automatykację. Dzięki temu Twoje reklamy trafiają tam, gdzie trzeba, zanim jeszcze klikniesz „opublikuj”.",
    "Krótkie wideo – wielki efekt. Reelsy, TikToki, Shorts – one dziś sprzedają. U nas kręcenie wideo to nie kosztowny projekt, tylko szybka akcja z dużym zasięgiem.",
    "PixelPunch na żywo – bezpłatny webinar już wkrótce! Już 5 kwietnia ruszamy z naszym pierwszym webinarem z cyklu „Marketing bez żargonu”. Wejdź na stronę i poznaj podstawy promocji online bez lania wody.",
    "Zielony marketing – lepsza marka. Zrównoważony rozwój to nie moda, to wymóg. Pomagamy firmom komunikować działania CSR tak, by nie brzmiały jak banał, tylko jak coś, co robi różnicę.",
  ];

  return (
    <FeaturesWrapper>
      <FeaturesTitleWrapper>
        <FeaturesTitle>Aktualności</FeaturesTitle>
        <TitleDecoration>🔍</TitleDecoration>
      </FeaturesTitleWrapper>
      <FeaturesList>
        {features.map((feature, index) => (
          <FeatureItem key={index}>{feature}</FeatureItem>
        ))}
      </FeaturesList>
    </FeaturesWrapper>
  );
};

export default FeaturesSection;
