import React, { useEffect, useState } from "react";
import Settings from "./components/Settings";
import SettingsCard from "./components/SettingsCard";
import LoadingSpinner from "./components/LoadingSpinner";
import constStr from "./components/constantString";
import { GlobalStyle } from "./styles/global";
import "./styles/fonts/fonts.css";

const App = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/b/RMLO")
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw response;
      })
      .then((data) => {
        setData(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (data) {
    return (
      <>
        <GlobalStyle />
        <Settings
          title={constStr.SOCIAL_SETTINGS_TITLE}
          description={constStr.SOCIAL_SETTINGS_DESC}
        >
          <SettingsCard
            title={constStr.FACEBOOK_SSO_TITLE}
            inputTitle={data.settings.facebook.app_id}
          />
          <SettingsCard title={constStr.ORCID_TITLE} />
        </Settings>
        {console.log(data.settings.facebook.app_id)}
      </>
    );
  } else {
    return <LoadingSpinner/>;
  }
};

export default App;
