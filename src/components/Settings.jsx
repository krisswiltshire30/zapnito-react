import React from "react";
import styled from "styled-components";
import SettingsGroup from "./SettingsGroup";
import SettingsCard from "./SettingsCard";
import constStr from "./constantString";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 16px;
  padding: 40px;

  ${(props) => props.theme.query.md} {
    padding: 10px 10px 0 10px;
  }
`;

const Settings = (props) => {
  const {settings } = props;

  return (
    <>
      <Grid>
        <SettingsGroup
          title={constStr.SOCIAL_SETTINGS_TITLE}
          description={constStr.SOCIAL_SETTINGS_DESC}
        />
        <SettingsCard
          title={constStr.FACEBOOK_SSO_TITLE}
          isEnabled={settings.facebook.enabled}
          doubleInput={true}
          inputLabel1={constStr.FACEBOOK_INPUT1_TITLE}
          inputLabel2={constStr.FACEBOOK_INPUT2_TITLE}
          defaultValue={settings.facebook.app_id}
        />
        <SettingsCard
          title={constStr.ORCID_TITLE}
          type="password"
          isEnabled={settings.orcid.enabled}
          inputLabel1={constStr.ORCID_INPUT1_TITLE}
          defaultValue={settings.orcid.api_key}
        />
      </Grid>
    </>
  );
};

export default Settings;
