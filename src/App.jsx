import SettingsGroup from "./components/SettingsGroup";
import constStr from "./components/constantString";
import { GlobalStyle } from "./styles/global";
import "./styles/fonts/fonts.css";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <SettingsGroup
        title={constStr.SOCIAL_SETTINGS_TITLE}
        description={constStr.SOCIAL_SETTINGS_DESC}
      />
    </>
  );
};

export default App;
