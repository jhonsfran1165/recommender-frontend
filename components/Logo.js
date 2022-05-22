import { Heading, HStack, Text } from "@chakra-ui/react";
import { FaSearchengin } from "react-icons/fa";

const Logo = (props) => {
  return (
    <HStack>
      <Text pl={5} fontSize="3xl" color="red.400">
        <FaSearchengin />
      </Text>
      Logo
      <Heading fontSize="3xl" ml="2" color="red.400">
        Booker Univalle
      </Heading>
    </HStack>
  );
};

export default Logo;
