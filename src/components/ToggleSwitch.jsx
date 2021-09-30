import React from "react";
import { useUID } from "react-uid";
import styled from "styled-components";

const ToggleWrapper = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  margin-right: 8px;
  display: inline-block;
  width: 2.5rem;
  user-select: none;
`;

const ToggleLabel = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  width: 41px;
  height: 22px;
  border-radius: 15px;
  background: rgba(209, 213, 219, 1);
  cursor: pointer;
  &::after {
    content: "";
    display: block;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    margin: 2px;
    background: #ffffff;
    transition: 0.2s;
  }
`;
const CheckBox = styled.input.attrs({
  type: "checkbox",
})`
  opacity: 0;
  z-index: 1;
  border-radius: 15px;
  width: 41px;
  height: 26px;
  &:checked + ${ToggleLabel} {
    background: #4fbe79;
    &::after {
      content: "";
      display: block;
      border-radius: 50%;
      width: 18px;
      height: 18px;
      margin-left: 21px;
      transition: 0.2s;
    }
  }
`;

const ToggleSwitch = () => {
  const uid = useUID();
  return (
    <ToggleWrapper>
      <CheckBox id={uid} />
      <ToggleLabel htmlFor={uid} class="toggle-label"></ToggleLabel>
    </ToggleWrapper>
  );
};

export default ToggleSwitch;
