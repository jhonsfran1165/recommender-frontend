import { Flex, IconButton, Spacer, useColorMode } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { FaMoon, FaSignOutAlt, FaSun } from "react-icons/fa";
import { signOut } from "supertokens-auth-react/recipe/emailpassword";
import Logo from "./Logo";

const Header = (props) => {
  const router = useRouter();
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";

  return (
    <Flex
      p={5}
      zIndex={999}
      w="100%"
      as="header"
      position="fixed"
      backgroundColor="rgba(255,
 255, 255, 0.8)"
      backdropFilter="saturate(180%) blur(5px)"
    >
      <Logo />
      <Spacer></Spacer>
      <IconButton
        ml={8}
        icon={isDark ? <FaSun /> : <FaMoon />}
        color="gray.700"
        isRound="true"
        onClick={toggleColorMode}
      ></IconButton>
      <IconButton
        id="logout"
        ml={4}
        icon={<FaSignOutAlt />}
        color="gray.700"
        isRound="true"
        onClick={async () => {
          await signOut();
          router.push("/");
        }}
      ></IconButton>
    </Flex>
  );
};

export default Header;
