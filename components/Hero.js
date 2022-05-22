import { Box, Flex, Heading, Text } from "@chakra-ui/react";

const Hero = (props) => {
  return (
    <Box>
      <Flex w="100%" p={10} as="main" mt={20}>
        <Heading
          lineHeight={1.1}
          fontWeight={400}
          fontSize={{ base: "xl", sm: "2xl", lg: "3xl" }}
        >
          <Text
            as={"span"}
            position={"relative"}
            _after={{
              content: "''",
              width: "full",
              height: "30%",
              position: "absolute",
              bottom: 1,
              left: 0,
              bg: "red.400",
              zIndex: -1,
            }}
          >
            Busca tus libros,
          </Text>
          <br />
          <Text as={"span"} color={"red.400"}>
            obtén recomendaciones.
          </Text>
          <br />
          <Text as={"span"}>Nunca fue tan fácil estudiar.</Text>
        </Heading>
      </Flex>
    </Box>
  );
};

export default Hero;
