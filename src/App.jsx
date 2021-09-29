import SettingsGroup from "./components/SettingsGroup";
import Settings from "./components/Settings";
import constStr from "./components/constantString";
import { GlobalStyle } from "./styles/global";
import "./styles/fonts/fonts.css";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Settings>
        <SettingsGroup
          title={constStr.SOCIAL_SETTINGS_TITLE}
          description={constStr.SOCIAL_SETTINGS_DESC}
        />
      </Settings>
    </>
  );
};

export default App;
