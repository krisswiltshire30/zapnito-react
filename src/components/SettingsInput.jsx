import React from "react";
import styled from "styled-components";

const InputWrapper = styled.div`
  display: inline-block;
  width: 50%;
  white-space: normal;
  padding-right: 1rem;
  animation: fadeIn 1.5s;

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

const Input = styled.input`
  width: 100%;
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
`;

const Label = styled.label`
  padding-bottom: 0.25rem;
  font-size: 14px;
  line-height: 1.25rem;
  font-weight: 700;
`;

const SettingsInput = (props) => {
  const { inputTitle } = props;
  return (
      <InputWrapper>
        <Label htmlFor="app-secret">
          {inputTitle}
          <Required>*</Required>
        </Label>
        <Input type="password" defaultValue="testing123" />
      </InputWrapper>
  );
};

export default SettingsInput;
