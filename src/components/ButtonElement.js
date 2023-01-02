import styled from "styled-components";
import { Link } from "react-scroll";

export const Button = styled(Link)`
  background: #2a5965;
  color: #fff;
  padding: 12px 30px;
  margin: 24px;
  font-size: 16px;
  border-radius: 50px;
  white-space: nowrap;
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #1f424a;
    color: #fff;
  }
`;
