import { ChakraProvider } from "@chakra-ui/react";
import React, { useEffect } from "react";
import SuperTokensReact from "supertokens-auth-react";
import { redirectToAuth } from "supertokens-auth-react/recipe/emailpassword";
import Session from "supertokens-auth-react/recipe/session";
import { Layout } from "../components";
import * as SuperTokensConfig from "../config/frontendConfig";
import theme from "../theme";

if (typeof window !== "undefined") {
  SuperTokensReact.init(SuperTokensConfig.frontendConfig());
}

function App({ Component, pageProps }) {
  useEffect(() => {
    async function doRefresh() {
      if (pageProps.fromSupertokens === "needs-refresh") {
        if (await Session.attemptRefreshingSession()) {
          location.reload();
        } else {
          // user has been logged out
          redirectToAuth();
        }
      }
    }
    doRefresh();
  }, [pageProps.fromSupertokens]);
  if (pageProps.fromSupertokens === "needs-refresh") {
    return null;
  }

  return (
    <ChakraProvider resetCSS theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}

export default App;
