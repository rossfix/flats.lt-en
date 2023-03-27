import React from "react";
import {
  ServicesCard,
  ServicesContainer,
  ServicesH1,
  ServicesH2,
  ServicesIcon,
  ServicesP,
  ServicesWrapper,
  HeroBtnWrapper,
  Button,
} from "./ServicesElements";
import Icon1 from "../../images/nuomininku-paieska.svg";

import Icon2 from "../../images/nuomos_administravimo_platforma.svg";

const Services = () => {
  return (
    <ServicesContainer id="services">
      <ServicesH1>Provided property management services</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon
            src={Icon1}
            alt="Property management services in Lithuania - tenant search"
          />
          <ServicesH2>Comprehensive rent management</ServicesH2>
          <ServicesP>
            We will communicate for you with potential tenants - from finding
            them to the end of the contract. We will deal with all issues
            arising as tenants questions, issues fix, etc. You will only enjoy
            returns received from your property.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon
            src={Icon2}
            alt="Nuomos administravimo paslaugos - platforma"
          />
          <ServicesH2>Property management platform</ServicesH2>
          <ServicesP>
            Want to manage your property yourself? We have a solution for you -
            real estate management platform. Once tenants are found, manage the
            state of objects, automatically send contracts and monitor payments
            yourself.
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
