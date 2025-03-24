import MainSection from "./components/MainSection";
import IntroTop from "./components/IntroTop";
import BonusBubbles from "./components/BonusBubbles";
import TrainingSection from "./components/TrainingSection";

export default function Home() {
  return (
    <>
      <MainSection />
      <IntroTop />
      <BonusBubbles /> {/* <--- DODAJ TO TUTAJ */}
      <TrainingSection />
    </>
  );
}
