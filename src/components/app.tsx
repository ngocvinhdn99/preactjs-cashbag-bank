// Code-splitting is automated for `routes` directory

import { Fragment, h } from "preact";
import { useEffect } from "preact/hooks";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../configs/theme";
import { signalTheme } from "../signals";
import BottomFooter from "./bottom-footer";
import Header from "./header-new";
import RouterContainer from "./router";

const App = () => {
  const themeValue = signalTheme.signalInfo.value;

  useEffect(() => {
    signalTheme.actionGetTheme();
  }, []);

  if (!themeValue?._id) return <Fragment />;

  return (
    <ThemeProvider theme={themeValue}>
      <GlobalStyles />

      <div id="app">
        <Header />
        <div style={{ height: themeValue.sizes.headerHeight }} />

        <main>
          <RouterContainer />
        </main>

        <BottomFooter />
      </div>
    </ThemeProvider>
  );
};

export default App;
