import React, { useEffect, useState } from "react";
import Settings from "./components/Settings";
import LoadingSpinner from "./components/LoadingSpinner";
import constStr from "./components/constantString";
import { GlobalStyle } from "./styles/global";

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
          settings={data.settings}
        ></Settings>
      </>
    );
  } else {
    return <LoadingSpinner />;
  }
};

export default App;
