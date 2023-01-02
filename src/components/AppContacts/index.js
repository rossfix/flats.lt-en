import React from "react";
import { ContactsContainer, CardDesign, CardP } from "./ContactsElements";
import {
  FormLabel,
  FormInput,
  FormContent,
  FormText,
  FormBtn
} from "../ContactForm/ContactFormElements";

const ContactsComponent = () => {
  return (
    <ContactsContainer>
      <CardDesign title="Parašykite mums">
        <FormContent
          method="POST"
          name="contactform"
          className="contactForm"
          action="/sekmingai-issiusta"
        >
          <FormInput type="hidden" name="form-name" value="contactForm" />
          <CardP>
            <FormLabel>
              Vardas:
              <FormInput type="text" name="name" required />
            </FormLabel>
          </CardP>
          <CardP>
            <FormLabel>
              El. Paštas:
              <FormInput type="email" name="email" required />
            </FormLabel>
          </CardP>
          <CardP>
            <FormLabel>
              Tel. Nr.:
              <FormInput type="tel" name="phone" required />
            </FormLabel>
          </CardP>
          <CardP>
            <FormLabel>
              Žinutė:<FormText name="message" rows="6" required></FormText>
            </FormLabel>
          </CardP>
          <CardP>
            <FormBtn type="submit">Siųsti</FormBtn>
          </CardP>
        </FormContent>
      </CardDesign>
    </ContactsContainer>
  );
};

export default ContactsComponent;
