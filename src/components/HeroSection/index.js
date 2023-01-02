import React, { useState } from "react";
import Hero from "../../images/nekilnojamo_turto_nuomos_administravimas.png";
import {
  HeroBg,
  HeroContainer,
  ImageBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
  Button
} from "./HeroElements";

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer id="home">
      <HeroBg>
        <ImageBg src={Hero} />
      </HeroBg>
      <HeroContent>
        <HeroH1>Flats.lt - patogus nuomos administravimas</HeroH1>
        <HeroP>
          Visos nekilnojamo turto nuomos administravimo paslaugos vienoje
          vietoje
        </HeroP>
        <HeroBtnWrapper>
          <Button
            to="/kontaktu-forma"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            duration={500}
            exact="true"
            offset={-80}
          >
            Klausti {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
