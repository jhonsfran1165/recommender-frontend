import { Heading, HStack, Text } from "@chakra-ui/react";
import Link from "next/link";
import { FaSearchengin } from "react-icons/fa";

const Logo = (props) => {
  return (
    <HStack>
      <Text pl={5} fontSize="3xl" color="red.400">
        <FaSearchengin />
      </Text>
      <Link href={`/`}>
        <Heading fontSize="3xl" ml="2" color="red.400">
          Booker Univalle
        </Heading>
      </Link>
    </HStack>
  );
};

export default Logo;
