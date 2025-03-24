"use client";

import React from "react";
import styled from "styled-components";

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  padding: 40px;
  background-color: #fff;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;

// === LEWA STRONA ===
const Left = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const LogoBlock = styled.div`
  font-family: "Tan Nimbus", serif;
  text-align: center;
`;

const LogoLine1 = styled.h1`
  font-size: 67px;
  color: #7d5ba6;
  margin: 0;
`;

const LogoLine2 = styled.h1`
  font-size: 67px;
  font-weight: bold;
  color: #7d5ba6;
  margin: 0;
`;

const Subheading = styled.p`
  font-family: "Tan Nimbus", serif;
  font-size: 18px;
  text-align: center;
  color: #444;
`;

const WhyBox = styled.div`
  background-color: #d99c9c;
  padding: 20px;
  color: white;
  font-family: "Helvetica", "Arial", sans-serif;
  border-radius: 8px;
  font-size: 16px;
`;

const WhyHeading = styled.h2`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 10px;
  color: #fff;
  text-align: center;
`;

const SocialMediaBox = styled.div`
  background-color: #fff;
  font-family: "Georgia", serif;
`;

const SocialHeading = styled.h3`
  font-size: 20px;
  font-weight: 600;
  text-decoration: underline;
  margin-bottom: 16px;
`;

const SocialItem = styled.p`
  font-size: 16px;
  margin-bottom: 8px;

  & a {
    color: #007bff;
    text-decoration: none;
    margin-left: 8px;
  }
`;

// === PRAWA STRONA ===
const Right = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const ImagesWrapper = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Image = styled.img`
  width: 280px;
  height: auto;
  border-radius: 15px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    width: 220px;
  }
`;

const NewsBox = styled.div`
  background-color: #f2e0e3;
  padding: 20px;
  border-radius: 8px;
  font-family: "Georgia", serif;
`;

const NewsHeading = styled.h2`
  font-family: "Tan Nimbus", serif;
  font-size: 32px;
  font-weight: 800;
  color: #7d5ba6;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const NewsList = styled.ul`
  list-style: disc;
  padding-left: 20px;
  font-size: 15px;
  line-height: 1.6;
`;

const MainSection: React.FC = () => {
  return (
    <Wrapper>
      <Left>
        <LogoBlock>
          <LogoLine1>Pixel</LogoLine1>
          <LogoLine2>punch</LogoLine2>
          <Subheading>AGENCJA MARKETINGOWA</Subheading>
        </LogoBlock>

        <WhyBox>
          <WhyHeading>Dlaczego Pixel Punch?</WhyHeading>
          <p>
            PixelPunch to nie agencja – to cyfrowy nokaut. Wchodzimy z pomysłem,
            wychodzimy z efektem, który zostaje w głowie.
          </p>
        </WhyBox>

        <SocialMediaBox>
          <SocialHeading>Znajdź nas na social mediach:</SocialHeading>
          <SocialItem>
            📸 Instagram: 0 obserwujących <a href="#">→ Obserwuj</a>
          </SocialItem>
          <SocialItem>
            📘 Facebook: 0 polubień <a href="#">→ Obserwuj</a>
          </SocialItem>
          <SocialItem>
            🎵 TikTok: 0 fanów <a href="#">→ Obserwuj</a>
          </SocialItem>
          <SocialItem>
            📺 YouTube: 0 subskrypcji <a href="#">→ Obserwuj</a>
          </SocialItem>
          <SocialItem>
            💼 LinkedIn: 0 obserwujących <a href="#">→ Obserwuj</a>
          </SocialItem>
          <SocialItem>
            🐦 Twitter(X): x0 followersów <a href="#">→ Obserwuj</a>
          </SocialItem>
        </SocialMediaBox>
      </Left>

      <Right>
        <ImagesWrapper>
          <Image src="/woman-with-magazine.jpg" alt="Marketing woman" />
          <Image src="/smartphones.jpg" alt="Marketing apps" />
        </ImagesWrapper>

        <NewsBox>
          <NewsHeading>AKTUALNOŚCI 🔍</NewsHeading>
          <NewsList>
            <li>
              <strong>AI to nie przyszłość – to teraz!</strong> Wprowadzamy
              sztuczną inteligencję do naszych kampanii – od analiz, przez
              personalizację treści, aż po automatyzację. Dzięki temu Twoje
              reklamy trafiają tam, gdzie trzeba, zanim jeszcze klikniesz
              „opublikuj”.
            </li>
            <li>
              <strong>Krótkie wideo – wielki efekt.</strong> Reelsy, TikToki,
              Shorts – one dziś sprzedają. U nas kręcenie wideo to nie kosztowny
              projekt, tylko szybka akcja z dużym zasięgiem.
            </li>
            <li>
              <strong>
                PixelPunch na żywo – bezpłatny webinar już wkrótce!
              </strong>{" "}
              Już 5 kwietnia ruszamy z naszym pierwszym webinarem z cyklu
              „Marketing bez żargonu”. Wejdź na stronę i poznaj podstawy
              promocji online bez lania wody.
            </li>
            <li>
              <strong>Zielony marketing – lepsza marka.</strong> Zrównoważony
              rozwój to nie moda, to wymóg. Pomagamy firmom komunikować
              działania CSR tak, by nie brzmiały jak banał, tylko jak coś, co
              robi różnicę.
            </li>
          </NewsList>
        </NewsBox>
      </Right>
    </Wrapper>
  );
};

export default MainSection;
