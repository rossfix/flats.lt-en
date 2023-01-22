import styled from "styled-components";

export const FormContent = styled.form`
  margin-top: 20px;
  text-align: center;
`;

export const FormLabel = styled.label`
  display: inline-block;
  width: 150px;
  text-align: left;
  color: #fff;
  font-size: 16px;
  margin-top: 3px;
`;

export const FormInput = styled.input`
  width: 200px;
  padding: 5px;
  margin-left: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  color: #1f424a;
`;

export const FormText = styled.textarea`
  width: 200px;
  height: auto;
  margin-left: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  vertical-align: text-top;
  resize: none;
  color: #1f424a;
`;

export const FormBtn = styled.button`
  background: #2a5965;
  color: #fff;
  padding: 8px 24px;
  margin: 24px;
  font-size: 16px;
  border-radius: 50px;
  white-space: nowrap;
  outline: none;
  border: none;
  cursor: pointer;
  display: inline-block;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #1f424a;
  }
`;

export const FormItems = styled.p`

`;

export const H1 = styled.h1`
  color: #fff;
  font-size: 38px;
  text-align: center;
  padding-top: 1rem;

  @media screen and (max-width: 768px) {
    font-size: 32px;
  }

  @media screen and (max-width: 768px) {
    font-size: 28px;
  }
`;