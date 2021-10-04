import React, { useEffect, useState } from "react";
import Settings from "./components/Settings";
import LoadingSpinner from "./components/LoadingSpinner";
import  {ThemeProvider} from 'styled-components'
import { GlobalStyle } from "./styles/global";
import theme from "./styles/theme"

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
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Settings
          settings={data.settings}
        ></Settings>
      </ThemeProvider>
    );
  } else {
    return <LoadingSpinner />;
  }
};

export default App;
