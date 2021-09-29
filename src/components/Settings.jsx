import React from "react";
import styled from "styled-components";
import SettingsGroup from "./SettingsGroup";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;
  padding: 2.5rem;
`;

const Settings = (props) => {
  const { title, description } = props;
  return (
    <>
      <Grid>
        <SettingsGroup title={title} description={description} />
        {props.children}
      </Grid>
    </>
  );
};

export default Settings;
