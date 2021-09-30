import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const GroupContainer = styled.div`
  grid-row: span 2 / span 2;
  padding: 20px;

  @media only screen and (max-width: 834px) {
    grid-row: span 1 / span 1;
    grid-column: span 3 / span 3;
  }
`;

const SettingsGroup = (props) => {
  const { title, description } = props;
  return (
    <GroupContainer>
      <h3>{title}</h3>
      <p>{description}</p>
    </GroupContainer>
  );
};

SettingsGroup.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

export default SettingsGroup;
