"use client";

import React from "react";
import styled from "styled-components";

const StatsWrapper = styled.section`
  padding: 40px 20px; /* Większy padding dla lepszego odstępu */
  background-color: #f8e1e9;
  text-align: center;

  @media (max-width: 768px) {
    padding: 20px 10px;
  }
`;

const StatsTitle = styled.h2`
  font-size: 24px;
  color: #d81b60;
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const StatsList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px; /* Większy odstęp między elementami */
`;

const StatItem = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const StatIcon = styled.span`
  font-size: 20px;
  margin-right: 5px;
`;

const StatText = styled.span`
  font-size: 16px;
  color: #333;
  font-family: "Poppins", sans-serif;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const StatLink = styled.a`
  text-decoration: none;
  color: #007bff;
  font-weight: bold;
  font-family: "Poppins", sans-serif;

  &:hover {
    text-decoration: underline;
  }
`;

const SocialMediaStats: React.FC = () => {
  const stats = [
    {
      platform: "Instagram",
      followers: "3 210 obserwujących",
      link: "#",
      icon: "📸",
    },
    {
      platform: "Facebook",
      followers: "4 580 polubień",
      link: "#",
      icon: "📘",
    },
    { platform: "TikTok", followers: "2 970 fanów", link: "#", icon: "🎵" },
    {
      platform: "YouTube",
      followers: "1 200 subskrypcji",
      link: "#",
      icon: "📺",
    },
    {
      platform: "LinkedIn",
      followers: "1 540 obserwujących",
      link: "#",
      icon: "💼",
    },
    {
      platform: "Twitter(X)",
      followers: "980 followersów",
      link: "#",
      icon: "🐦",
    },
  ];

  return (
    <StatsWrapper>
      <StatsTitle>Znajdź nas na social mediach:</StatsTitle>
      <StatsList>
        {stats.map((stat, index) => (
          <StatItem key={index}>
            <StatIcon>{stat.icon}</StatIcon>
            <StatText>
              {stat.platform}: {stat.followers}
            </StatText>
            <StatLink href={stat.link}>→ Obserwuj</StatLink>
          </StatItem>
        ))}
      </StatsList>
    </StatsWrapper>
  );
};

export default SocialMediaStats;
