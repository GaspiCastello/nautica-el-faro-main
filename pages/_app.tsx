import React from "react";
import { Provider } from "react-redux";
import store from "../store/store";
import { AppProps } from "next/app";
import { ThemeProvider, responsiveFontSizes } from "@material-ui/core/styles";
import theme from "../config/theme";
import { createWrapper } from "next-redux-wrapper";
import Layout from "../components/layout/Layout";
import Head from "next/head";
import CssBaseline from "@material-ui/core/CssBaseline";

const App = ({ Component, pageProps }: AppProps) => {
  const respTheme = responsiveFontSizes(theme);
  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles: any = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);
  return (
    <>
      <Head>
        <title>El Faro</title>
        <link rel="icon" href="/favicon.png" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <ThemeProvider theme={respTheme}>
        <Provider store={store}>
          <CssBaseline />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </Provider>
      </ThemeProvider>
    </>
  );
};

const makestore = () => store;
const wrapper = createWrapper(makestore);
export default wrapper.withRedux(App);
