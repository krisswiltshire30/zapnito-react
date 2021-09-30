import React from "react";
import styled from "styled-components";
import ToggleSwitch from "./ToggleSwitch";

const CardContainer = styled.div`
  position: relative;
  grid-column: span 2 / span 2;
  background-color: white;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
  padding: 20px;
`;
const SettingsCard = (props) => {
  const { title } = props;
  return (
    <CardContainer>
      <h3>{title}</h3>
      <p>
        Follow <a href="/">our guide</a> on how to set up your {title} access
      </p>
        <ToggleSwitch/>
    </CardContainer>
  );
};

export default SettingsCard;
