import dynamic from "next/dynamic";
import EmailPassword from "supertokens-auth-react/recipe/emailpassword";
import { Hero, Search } from "../components";

const EmailPasswordAuthNoSSR = dynamic(
  new Promise((res) => res(EmailPassword.EmailPasswordAuth)),
  { ssr: false }
);

export default function SearchEngine() {
  return (
    <EmailPasswordAuthNoSSR>
      <Hero />
      <Search />
    </EmailPasswordAuthNoSSR>
  );
}
