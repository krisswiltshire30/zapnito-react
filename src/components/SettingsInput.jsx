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

  ${(props) => props.theme.query.md} {
    width: 100%;
    padding-bottom: 10px;
  }

`;

const Input = styled.input`
  box-sizing: border-box;
  width: 99%;
  border-radius: 2px;
  box-shadow: none;
  border-width: 1px;
  border: 1px solid rgba(209, 213, 219, 1);
  padding: 8px;
  font-size: 14px;
  line-height: 20px;
  transition: 0.5s;
`;

const Required = styled.span`
  color: ${(props) => props.theme.colors.red};;
  margin-left: 2px;
`;

const Label = styled.label`
  padding-bottom: 4px;
  font-size: 14px;
  line-height: 20px;
  font-weight: 700;
`;

const SettingsInput = (props) => {
  const {
    inputLabel,
    defaultValue,
    hasSecondInput,
    type = "text",
    setInput1 = "",
    setInput2 = "" } = props;
  const uid = useUID();

  const ChangeHandler = (e) => {
    if (hasSecondInput) {
      console.log();
      setInput2(e.target.value)
    } else {
      setInput1(e.target.value)
    }
  }

  return (
    <InputWrapper>
      <Label htmlFor={uid}>
        {inputLabel}
      </Label>
      <Required>*</Required>
      <Input id={uid} type={type} defaultValue={defaultValue} onChange={(e) => ChangeHandler(e)} />
    </InputWrapper>
  );
};

export default SettingsInput;
