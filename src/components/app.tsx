import { h } from "preact";
import { getCurrentUrl } from "preact-router";

import Header from "./header";
// Code-splitting is automated for `routes` directory

import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../configs/theme";
import BottomFooter from "./bottom-footer";
import RouterContainer from "./router";

const App = () => {
  console.log("getCurrentUrl()", getCurrentUrl());
  // const [themeState, dispatch] = useReducer(
  //   themeReducer.reducer,
  //   themeReducer.initialState
  // );

  // console.log("themeState", themeState);

  // useEffect(() => {
  //   dispatch(themeReducer.actionType.getTheme);
  // }, []);

  // return <div>abc</div>;

  const fakeData = {
    colors: {
      primary: "#1238bd",
      bgActiveTab: "#e1e3fe",
    },
    sizes: {
      headerHeight: 80,
    },
    font: "Abel",
  };

  return (
    // <ThemeProvider theme={data?.data?.data?.result}>
    <ThemeProvider theme={fakeData}>
      <GlobalStyles />

      <div id="app">
        <Header />
        <main>
          <RouterContainer />
        </main>

        <BottomFooter />
      </div>
    </ThemeProvider>
  );
};

export default App;
