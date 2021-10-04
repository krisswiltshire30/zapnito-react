import React from "react";
import PropTypes from "prop-types"
import { useUID } from "react-uid";
import styled from "styled-components";

const ToggleWrapper = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  display: inline-block;
  width: 40px;
  user-select: none;
`;

const ToggleLabel = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  width: 41px;
  height: 22px;
  border-radius: 15px;
  background: ${(props) => props.theme.colors.grey[1]};
  cursor: pointer;
  &::after {
    content: "";
    display: block;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    margin: 2px;
    background: ${(props) => props.theme.colors.white};
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
    background: ${(props) => props.theme.colors.green};
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

const ToggleSwitch = (props) => {
  const { enabled, setEnabled } = props;
  const uid = useUID();

  return (
    <ToggleWrapper>
      <CheckBox id={uid} onChange={() => setEnabled(!enabled)} checked={enabled}  />
      <ToggleLabel htmlFor={uid}></ToggleLabel>
    </ToggleWrapper>
  );
};

ToggleSwitch.propTypes = {
  enabled: PropTypes.bool,
  setEnabled: PropTypes.func,
}

export default ToggleSwitch;
