import { Button, Flex } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import Link from "next/link";
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
      <Flex w="100%" pl={10} as="main">
        <Link href={`/kmeans`}>
          <Button
            colorScheme={"red"}
            bg={"red.400"}
            rounded={"full"}
            px={6}
            _hover={{
              bg: "red.500",
            }}
          >
            Ver resumen de tu programa
          </Button>
        </Link>
      </Flex>

      <Search />
    </EmailPasswordAuthNoSSR>
  );
}
