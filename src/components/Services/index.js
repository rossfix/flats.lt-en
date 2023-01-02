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
      <ServicesH1>Teikiamos nuomos administravimo paslaugos</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon
            src={Icon1}
            alt="Nuomos administravimo paslaugos - nuomininku paieska"
          />
          <ServicesH2>Nuomininkų paieška</ServicesH2>
          <ServicesP>
            Bendrausime už Jus su potencialiais nuominikais iki pat sutarties
            pabaigos, tad Jums nebereikės gaišti laiko
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon
            src={Icon2}
            alt="Nuomos administravimo paslaugos - sutarciu sablonai"
          />
          <ServicesH2>Sutartys</ServicesH2>
          <ServicesP>
            Pagal Jūsų poreikį paruošime sutarčiu šablonus, kuriuos galėsite
            pasirašyti elekroniniu parašu
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon
            src={Icon3}
            alt="Rinkos analize nuomos administravimo paslaugoms"
          />
          <ServicesH2>Kainos nustatymas</ServicesH2>
          <ServicesP>
            Nuolat stebime rinkos kainos tendencijas, tad visuomet išlaikysime
            jums palankias nuomos kainas
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
