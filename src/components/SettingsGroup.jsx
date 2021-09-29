import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const GroupContainer = styled.div``;

const Title = styled.h3``;

const Description = styled.p``;

const SettingsGroup = (props) => {
  const { title, description } = props;
  return (
    <GroupContainer>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </GroupContainer>
  );
};

SettingsGroup.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

export default SettingsGroup;
