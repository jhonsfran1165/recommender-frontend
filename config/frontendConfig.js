import EmailPassword from "supertokens-auth-react/recipe/emailpassword";
import SessionReact from "supertokens-auth-react/recipe/session";
// import ThirdPartyEmailPasswordReact from "supertokens-auth-react/recipe/thirdpartyemailpassword";
import { appInfo } from "./appInfo";

export let frontendConfig = () => {
  return {
    appInfo,
    recipeList: [
      SessionReact.init(),
      EmailPassword.init({
        getRedirectionURL: async (context) => {
          if (context.action === "SUCCESS") {
            if (context.redirectToPath !== undefined) {
              // we are navigating back to where the user was before they authenticated
              return context.redirectToPath;
            }
            return "/search";
          }
          return undefined;
        },
        emailVerificationFeature: {
          mode: "REQUIRED",
        },
      }),
    ],
  };
};
