import React, { useState } from "react";
import styled from "styled-components";
import ToggleSwitch from "./ToggleSwitch";
import SettingsInput from "./SettingsInput";

const CardContainer = styled.div`
  position: relative;
  overflow: hidden;
  grid-column: span 2 / span 2;
  background-color: white;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
  padding: 20px;

  @media only screen and (max-width: 830px) {
    grid-column: span 3 / span 3;
  }
`;

const FormContainer = styled.div`
  white-space: nowrap;
  padding-top: 12px;

  @media only screen and (max-width: 440px) {
    white-space: unset;
  }
`;

const Description = styled.p`
  padding-bottom: 5px;
  margin-right: 60px;
`;

const SettingsCard = (props) => {
  const {
    title,
    inputLabel1,
    inputLabel2,
    isEnabled,
    doubleInput,
    type,
    defaultValue,
  } = props;
  const [enabled, setEnabled] = useState(isEnabled);

  return (
    <CardContainer enabled={enabled} doubleInput={doubleInput}>
      <h3>{title}</h3>
      <Description>
        Follow <a href="/">our guide</a> on how to set up your {title} access
      </Description>
      <ToggleSwitch enabled={enabled} setEnabled={setEnabled} />
      <FormContainer>
        {enabled && (
          <SettingsInput
            inputLabel1={inputLabel1}
            type={type}
            defaultValue={defaultValue}
          />
        )}
        {enabled && doubleInput && (
          <SettingsInput
            inputLabel1={inputLabel2}
            doubleInput={doubleInput}
            defaultValue={defaultValue}
            type={"password"}
          />
        )}
      </FormContainer>
    </CardContainer>
  );
};

export default SettingsCard;
