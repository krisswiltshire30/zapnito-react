import React from "react";
import styled from "styled-components";
import { useUID } from "react-uid";

const InputWrapper = styled.div`
  display: inline-block;
  width: 50%;
  white-space: normal;
  padding-right: 5px;
  animation: fadeIn 1.5s;

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @media only screen and (max-width: 440px) {
    width: 100%;
    padding-bottom: 10px;
  }
`;

const Input = styled.input`
  box-sizing: border-box;
  width: 97%;
  border-radius: 0.125rem;
  box-shadow: none;
  border-width: 1px;
  border: 1px solid rgba(209, 213, 219, 1);
  padding: 0.5rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  transition: 0.5s;
`;

const Required = styled.span`
  color: red;
  margin-left: 2px;
`;

const Label = styled.label`
  padding-bottom: 0.25rem;
  font-size: 14px;
  line-height: 1.25rem;
  font-weight: 700;
`;

const SettingsInput = (props) => {
  const { inputLabel1, defaultValue, type="text" } = props;
  const uid = useUID();

  return (
      <InputWrapper>
        <Label htmlFor={uid}>
          {inputLabel1}
        </Label>
          <Required>*</Required>
        <Input id={uid} type={type} defaultValue={defaultValue} />
      </InputWrapper>
  );
};

export default SettingsInput;
