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
import { Button, Form, Input } from "antd";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet";

const BetterButton = styled(Button)`
  margin-left: 5px;
  border-radius: 50px;
  background: #2a5965;
  font-size: 16px;
  outline: none;
  border: none;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #1f424a;
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
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const navigate = useNavigate();

  const { dispatch } = useContext(AuthContext);

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      dispatch({ type: "LOGIN", payload: user });
      navigate("/savitarna/profilis");
    } catch (error) {
      console.log(error);
      alert("Neteisingas slaptažodis");
    }
  };

  return (
    <>
      <Helmet>
        <title>Prisijungti prie savitarnos</title>
        <meta
          name="description"
          content="Nekilnojamo turto administravimo platforma. Prisijungti nieko nekainuoja, palikite mums savo kontaktus ir mes su jumis susisieksime!"
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
          <HeroH1>Prisijungti į savitarną</HeroH1>

          <Form
            name="basic"
            wrapperCol={{
              span: 25
            }}
            autoComplete="off"
          >
            <FormContainer>
              <ColumnContainer>
                <Label1>Prisijungimo vardas:</Label1>
                <Label2>Slaptažodis:</Label2>
              </ColumnContainer>
              <ColumnContainer>
                <Form.Item
                  name="username"
                  rules={[
                    {
                      required: true,
                      message: "Įrašykite vardą!"
                    }
                  ]}
                >
                  <Input
                    type="email"
                    onChange={(event) => {
                      setLoginEmail(event.target.value);
                    }}
                  />
                </Form.Item>

                <Form.Item
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: "Įrašykite slaptažodį!"
                    }
                  ]}
                >
                  <Input.Password
                    type="password"
                    onChange={(event) => {
                      setLoginPassword(event.target.value);
                    }}
                  />
                </Form.Item>
              </ColumnContainer>
            </FormContainer>
            <Form.Item
              wrapperCol={{
                offset: 8
              }}
            >
              <BetterButton type="primary" htmlType="submit" onClick={login}>
                Prisijungti
              </BetterButton>
            </Form.Item>
          </Form>

          <HeroP>
            Neturi paskyros? <a href="/kontaktu-forma">Parašyk mums</a> ir mes
            sukursime tau paskyrą!
          </HeroP>
        </HeroContent>
      </HeroContainer>
      <Footer />
    </>
  );
};

export default LoginPage;
