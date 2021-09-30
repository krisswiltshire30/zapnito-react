import React, {useState} from "react";
import styled from "styled-components";
import ToggleSwitch from "./ToggleSwitch";
import SettingsInput from "./SettingsInput";

const CardContainer = styled.div`
  position: relative;
  grid-column: span 2 / span 2;
  background-color: white;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
  padding: 20px;
  transition: 0.5s;
  height: ${props => props.enabled ? "120px" : "50px"};
`;

const Description = styled.p`
  padding-bottom: 16px;
`;

const SettingsCard = (props) => {
  const { title } = props;
  const [enabled, setEnabled] = useState(false)
  return (
    <CardContainer enabled={enabled}>
      <h3>{title}</h3>
      <Description>
        Follow <a href="/">our guide</a> on how to set up your {title} access
      </Description>
      <ToggleSwitch enabled={enabled} setEnabled={setEnabled} />
      {enabled && <SettingsInput />}
    </CardContainer>
  );
};

export default SettingsCard;
