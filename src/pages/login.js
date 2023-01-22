import { React, useState, useContext } from "react";
import ScrollToTop from "../components/ScrollToTop";
import StationarNav from "../components/Navbar/NoNav";
import Hero from "../images/nekilnojamo_turto_nuomos_administravimas.png";
import {
  HeroBg,
  HeroContainer,
  ImageBg,
  HeroContent,
  HeroH1,
  HeroP
} from "../components/HeroSection/HeroElements";
import styled from "styled-components";
import {Button, Form, Input } from "antd";

import Footer from "../components/Footer";
import { Helmet } from "react-helmet";

const BetterButton = styled(Button)`
color: #fff !important;
  margin-left: 5px;
  border-radius: 50px;
  background: #2a5965;
  font-size: 16px;
  outline: none;
  border: none;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #1f424a;
    color: #fff;
  }
  &:focus {
    background: #2a5965;
  }
`;

const Label1 = styled.p`
  color: #fff;
  font-size: 16px;
  margin-top: 3px;
`;
const Label2 = styled.p`
  color: #fff;
  font-size: 16px;
  padding-top: 13px;
`;

const FormContainer = styled.div`
  display: flex;
`;

const ColumnContainer = styled.div`
  flex: 50%;
`;

const LoginPage = () => {
 

  return (
    <>
      <Helmet>
        <title>Property management platform - login</title>
        <meta
          name="description"
          content="Property management platform, it costs nothing to join, leave us your contacts and we will contact you!"
          data-react-helmet="true"
       />
      </Helmet>
      <ScrollToTop />
      <StationarNav />
      <HeroContainer>
        <HeroBg>
          <ImageBg src={Hero} />
        </HeroBg>
        <HeroContent>
          <HeroH1>Property management platform - login</HeroH1>

          <Form
            name="basic"
            wrapperCol={{
              span: 25
            }}
            autoComplete="off"
          >
            <FormContainer>
              <ColumnContainer>
                <Label1>Username:</Label1>
                <Label2>Password:</Label2>
              </ColumnContainer>
              <ColumnContainer>
                <Form.Item
                  name="username"
                  rules={[
                    {
                      required: true,
                      message: "Enter a username!"
                    }
                  ]}
                >
                  <Input
                    type="email"
                    onChange={console.log("suceed!")
                    }
                  />
                </Form.Item>

                <Form.Item
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: "Enter a password!"
                    }
                  ]}
                >
                  <Input.Password
                    type="password"
                    onChange={console.log("suceed!")
                                      }
                  />
                </Form.Item>
              </ColumnContainer>
            </FormContainer>
            <Form.Item
              wrapperCol={{
                offset: 8
              }}
            >
              <BetterButton onClick={()=>{ alert('Invalid username!'); }}>
                Log In
              </BetterButton>
            </Form.Item>
          </Form>

          <HeroP>
          Don't have an account? <a href="/contacts-form">Write us</a> and we
             we will create an account for you!
          </HeroP>
        </HeroContent>
      </HeroContainer>
      <Footer />
    </>
  );
};

export default LoginPage;
