import dynamic from "next/dynamic";
import React from "react";
import EmailPassword from "supertokens-auth-react/recipe/emailpassword";
import supertokensNode from "supertokens-node";
import Session from "supertokens-node/recipe/session";
import { backendConfig } from "../config/backendConfig";

const EmailPasswordAuthNoSSR = dynamic(
  new Promise((res) => res(EmailPassword.EmailPasswordAuth)),
  { ssr: false }
);

export async function getServerSideProps(context) {
  // this runs on the backend, so we must call init on supertokens-node SDK
  supertokensNode.init(backendConfig());
  let session;
  try {
    session = await Session.getSession(context.req, context.res);
  } catch (err) {
    if (err.type === Session.Error.TRY_REFRESH_TOKEN) {
      return { props: { fromSupertokens: "needs-refresh" } };
    } else if (err.type === Session.Error.UNAUTHORISED) {
      return { props: {} };
    } else {
      throw err;
    }
  }

  return {
    props: { userId: session.getUserId() },
  };
}

export default function SearchEngine(props) {
  console.log(props);
  return (
    <EmailPasswordAuthNoSSR>
      <Hero />
      <Search />
    </EmailPasswordAuthNoSSR>
  );
}
