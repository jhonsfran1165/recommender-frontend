import { ChakraProvider } from "@chakra-ui/react";
import React, { useEffect } from "react";
import SuperTokensReact from "supertokens-auth-react";
import Session from "supertokens-auth-react/recipe/session";
import { redirectToAuth } from "supertokens-auth-react/recipe/thirdpartyemailpassword";
import * as SuperTokensConfig from "../config/frontendConfig";
import theme from "../theme";

if (typeof window !== "undefined") {
  SuperTokensReact.init(SuperTokensConfig.frontendConfig());
}

function MyApp({ Component, pageProps }) {
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
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
