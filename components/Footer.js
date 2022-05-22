import { Flex, Spacer, Text, useColorModeValue } from "@chakra-ui/react";
import Logo from "./Logo";

const Footer = (props) => {
  return (
    <Flex
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
      justify={{ base: "center", md: "space-between" }}
      align={{ base: "center", md: "center" }}
      w="100%"
      as="footer"
      mt={20}
      p={5}
    >
      <Logo />

      <Spacer></Spacer>
      <Text>© 2022 Universidad del Valle. All rights reserved</Text>
    </Flex>
  );
};

export default Footer;
