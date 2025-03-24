"use client";

import React from "react";
import styled from "styled-components";

const HeaderWrapper = styled.header`
  position: relative;
  background-color: #f8e1e9;
  color: #333;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  z-index: 10;
`;

const Nav = styled.nav`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 28px 16px;
  font-weight: 700;
  font-size: 24px;
  font-family: "Georgia", serif;
  gap: 32px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 16px;
    font-size: 20px;
    padding: 16px;
  }
`;

const NavLink = styled.a`
  text-decoration: none;
  color: #333;
  position: relative;
  padding: 0 12px;

  &:hover {
    color: #d81b60;
  }

  @media (min-width: 769px) {
    &:not(:last-child)::after {
      content: "|";
      position: absolute;
      right: -14px;
      top: 50%;
      transform: translateY(-50%);
      color: #999;
      font-size: 22px;
    }
  }
`;

const WaveWrapper = styled.div`
  overflow: hidden;
  height: 80px;
  line-height: 0;
`;

const WaveSvg = styled.svg`
  position: relative;
  display: block;
  width: 100%;
  height: 80px;
`;

const WavePath = styled.path`
  fill: #ffffff;
`;

const Header: React.FC = () => {
  return (
    <HeaderWrapper>
      <Nav>
        <NavLink href="#o-nas">O nas</NavLink>
        <NavLink href="#obszar-dzialalnosci">Obszar działalności</NavLink>
        <NavLink href="#cennik">Cennik</NavLink>
        <NavLink href="#kontakt">Kontakt</NavLink>
      </Nav>

      <WaveWrapper>
        <WaveSvg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg">
          <WavePath d="M0,32 C360,80 1080,0 1440,48 L1440,0 L0,0 Z" />
        </WaveSvg>
      </WaveWrapper>
    </HeaderWrapper>
  );
};

export default Header;
