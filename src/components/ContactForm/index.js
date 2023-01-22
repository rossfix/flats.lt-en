import React from "react";
import Hero from "../../images/nekilnojamo_turto_nuomos_administravimas.png";
import {
  HeroBg,
  HeroContainer,
  ImageBg,
  HeroContent
} from "../../components/HeroSection/HeroElements";
import {
  FormLabel,
  FormInput,
  FormContent,
  FormText,
  FormBtn,
  FormItems,
  H1
} from "./ContactFormElements";

const ContactForm = () => {
  return (
    <HeroContainer>
      <HeroBg>
        <ImageBg src={Hero} />
      </HeroBg>
      <HeroContent>
      <H1>Contact real estate management professionals</H1>
        <FormContent
          method="POST"
          name="contactform"
          className="contactForm"
          action="/successfully-sent"
        >
          <FormInput type="hidden" name="form-name" value="contactForm" />
          <FormItems>
            <FormLabel>Name:</FormLabel>
            <FormInput type="text" name="name" required />
          </FormItems>
          <FormItems>
            <FormLabel>E-mail:</FormLabel>
            <FormInput type="email" name="email" required />
          </FormItems>
          <FormItems>
            <FormLabel>Tel.:</FormLabel>
            <FormInput type="tel" name="phone" required />
          </FormItems>
          <FormItems>
            <FormLabel>Message:</FormLabel>
            <FormText name="message" rows="4" required></FormText>
          </FormItems>
          
            <FormBtn type="submit">Send</FormBtn>
         
        </FormContent>
      </HeroContent>
    </HeroContainer>
  );
};

export default ContactForm;
