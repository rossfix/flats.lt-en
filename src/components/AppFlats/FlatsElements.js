import styled from "styled-components";
import { Card, Image } from "antd";
import "antd/dist/antd.css";

export const FlatsContainer = styled.div`
  flex: 5;
  background: #fdf2ed;
  padding: 3rem;
`;

export const CardContainer = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const CardOutContainer = styled.div`
  margin-bottom: 3rem;
`;

export const CardLeft = styled.div`
  padding-right: 3rem;
`;

export const CardRight = styled.div`
  padding-left: 2rem;
`;
export const CardL = styled.p`
  font-weight: bold;
`;

export const CardR = styled.p``;

export const CardDesign = styled(Card)`
  border-radius: 15px;
  width: 90%;
  max-width: 1100px;
`;

export const ImgDesign = styled(Image)`
  width: 200px;
`;
