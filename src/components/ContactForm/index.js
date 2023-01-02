import React from "react";
import Hero from "../../images/nekilnojamo_turto_nuomos_administravimas.png";
import {
  HeroBg,
  HeroContainer,
  ImageBg,
  HeroContent,
  HeroP
} from "../../components/HeroSection/HeroElements";
import {
  FormLabel,
  FormInput,
  FormContent,
  FormText,
  FormBtn
} from "./ContactFormElements";

const ContactForm = () => {
  return (
    <HeroContainer>
      <HeroBg>
        <ImageBg src={Hero} />
      </HeroBg>
      <HeroContent>
        <FormContent
          method="POST"
          name="contactform"
          className="contactForm"
          action="/sekmingai-issiusta"
        >
          <FormInput type="hidden" name="form-name" value="contactForm" />
          <HeroP>
            <FormLabel>Vardas:</FormLabel>
            <FormInput type="text" name="name" required />
          </HeroP>
          <HeroP>
            <FormLabel>El. Paštas:</FormLabel>
            <FormInput type="email" name="email" required />
          </HeroP>
          <HeroP>
            <FormLabel>Tel. Nr.:</FormLabel>
            <FormInput type="tel" name="phone" required />
          </HeroP>
          <HeroP>
            <FormLabel>Žinutė:</FormLabel>
            <FormText name="message" rows="6" required></FormText>
          </HeroP>
          <HeroP>
            <FormBtn type="submit">Siųsti</FormBtn>
          </HeroP>
        </FormContent>
      </HeroContent>
    </HeroContainer>
  );
};

export default ContactForm;
