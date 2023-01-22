import React from "react";
import {
  ServicesCard,
  ServicesContainer,
  ServicesH1,
  ServicesH2,
  ServicesIcon,
  ServicesP,
  ServicesWrapper
} from "./ServicesElements";
import Icon1 from "../../images/nuomininku-paieska.svg";
import Icon2 from "../../images/sutarciu-sablonai.svg";
import Icon3 from "../../images/kainos-nustatymas.svg";

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
          <ServicesH2>Search for tenants</ServicesH2>
          <ServicesP>
          We will communicate for you with potential tenants right up to the contract
             end, so you won't have to waste your time
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon
            src={Icon2}
            alt="Nuomos administravimo paslaugos - sutarciu sablonai"
          />
          <ServicesH2>Contracts</ServicesH2>
          <ServicesP>
          According to your needs, we will prepare the templates that you can use in the contract
             to sign with an electronic signature
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon
            src={Icon3}
            alt="Rinkos analize nuomos administravimo paslaugoms"
          />
          <ServicesH2>Pricing</ServicesH2>
          <ServicesP>
          We constantly monitor market price trends, so we will always maintain
             favorable rental prices for you
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
