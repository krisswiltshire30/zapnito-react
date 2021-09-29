import Settings from "./components/Settings";
import SettingsCard from "./components/SettingsCard";
import constStr from "./components/constantString";
import { GlobalStyle } from "./styles/global";
import "./styles/fonts/fonts.css";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Settings
        title={constStr.SOCIAL_SETTINGS_TITLE}
        description={constStr.SOCIAL_SETTINGS_DESC}
      >
        <SettingsCard title={constStr.FACEBOOK_SSO_TITLE} />
        <SettingsCard title={constStr.ORCID_TITLE} />
      </Settings>
    </>
  );
};

export default App;
