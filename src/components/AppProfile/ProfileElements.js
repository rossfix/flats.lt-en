import styled from "styled-components";
import { Card } from "antd";
import "antd/dist/antd.css";

export const ProfileContainer = styled.div`
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

export const CardDesign = styled(Card)`
  border-radius: 15px;
  width: 90%;
`;

export const ChangeButton = styled.button`
  display: block;
  cursor: pointer;
`;

export const CardL = styled.p`
  font-weight: bold;
`;

export const CardR = styled.p``;
