// Code-splitting is automated for `routes` directory

import { Fragment, h } from "preact";
import { useEffect } from "preact/hooks";
import { GlobalStyles } from "src/configs/theme";
import { signalTheme } from "src/signals";
import { ThemeProvider } from "styled-components";
import RouterContainer from "./router";
import BottomFooter from "src/components/bottom-footer";
import Header from "src/components/header";

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
