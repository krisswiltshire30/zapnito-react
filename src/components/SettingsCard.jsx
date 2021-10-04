import React, { useState } from "react";
import styled from "styled-components";
import ToggleSwitch from "./ToggleSwitch";
import SettingsInput from "./SettingsInput";
import Button from "./Button"

const CardContainer = styled.div`
  position: relative;
  overflow: hidden;
  grid-column: span 2 / span 2;
  background-color: ${(props) => props.theme.colors.white};
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
  padding: 20px;

  ${(props) => props.theme.query.lg} {
    grid-column: span 3 / span 3;
  }

`;

const FormContainer = styled.div`
  white-space: nowrap;
  padding-top: 12px;

  ${(props) => props.theme.query.md} {
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
    hasSecondInput,
    type,
    defaultValue,
  } = props;
  const [enabled, setEnabled] = useState(isEnabled);
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");

  return (
    <CardContainer >
      <h3>{title}</h3>
      <Description>
        Follow <a href="/">our guide</a> on how to set up your {title} access
      </Description>
      <ToggleSwitch enabled={enabled} setEnabled={setEnabled} />
      <FormContainer>
        {enabled && (
          <SettingsInput
            inputLabel={inputLabel1}
            type={type}
            defaultValue={defaultValue}
            setInput1={setInput1}
          />
        )}
        {enabled && hasSecondInput && (
          <SettingsInput
            inputLabel={inputLabel2}
            hasSecondInput={hasSecondInput}
            defaultValue={defaultValue}
            setInput2={setInput2}
            type={"password"}
          />
        )}
        {enabled && (
          <Button
            text="Update"
            title={title}
            inputLabel1={inputLabel1}
            inputLabel2={inputLabel2}
            input1={input1}
            input2={input2}
          />
        )}
      </FormContainer>
    </CardContainer>
  );
};

export default SettingsCard;
