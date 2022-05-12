import dynamic from "next/dynamic";
import Head from "next/head";
import React from "react";
import ThirdPartyEmailPassword from "supertokens-auth-react/recipe/thirdpartyemailpassword";
import supertokensNode from "supertokens-node";
import Session from "supertokens-node/recipe/session";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Search from "../components/Search";
import { backendConfig } from "../config/backendConfig";

const ThirdPartyEmailPasswordAuthNoSSR = dynamic(
  new Promise((res) =>
    res(ThirdPartyEmailPassword.ThirdPartyEmailPasswordAuth)
  ),
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

export default function Home(props) {
  return (
    <ThirdPartyEmailPasswordAuthNoSSR>
      <ProtectedPage userId={props.userId} />
    </ThirdPartyEmailPasswordAuthNoSSR>
  );
}

function ProtectedPage({ userId }) {
  async function logoutClicked() {
    await ThirdPartyEmailPassword.signOut();
    ThirdPartyEmailPassword.redirectToAuth();
  }

  async function fetchUserData() {
    const res = await fetch("/api/user");
    if (res.status === 200) {
      const json = await res.json();
      alert(JSON.stringify(json));
    }
  }

  return (
    <div>
      <Head>
        <title>SuperTokens 💫</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
        <p>You are authenticated with SuperTokens! (UserID: {userId})</p>

        <div
          style={{
            display: "flex",
            height: "70px",
            alignItems: "center",
            justifyContent: "flex-end",
            paddingLeft: "75px",
            paddingRight: "75px",
          }}
        >
          <div
            onClick={logoutClicked}
            style={{
              display: "flex",
              width: "116px",
              height: "42px",
              backgroundColor: "#000000",
              borderRadius: "10px",
              cursor: "pointer",
              alignItems: "center",
              justifyContent: "center",
              color: "#ffffff",
              fontWeight: "bold",
            }}
          >
            SIGN OUT
          </div>
        </div>
        <div
          style={{
            display: "flex",
            height: "70px",
            alignItems: "center",
            justifyContent: "flex-end",
            paddingLeft: "75px",
            paddingRight: "75px",
          }}
        >
          <div
            onClick={fetchUserData}
            style={{
              display: "flex",
              width: "150px",
              height: "42px",
              backgroundColor: "rgb(247 54 54)",
              borderRadius: "10px",
              cursor: "pointer",
              alignItems: "center",
              justifyContent: "center",
              color: "#ffffff",
              fontWeight: "bold",
            }}
          >
            FETCH USER API
          </div>
        </div>
        <Hero></Hero>
        <Search></Search>
      </main>
      <Footer></Footer>
    </div>
  );
}
