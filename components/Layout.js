import { Container, useColorModeValue, VStack } from "@chakra-ui/react";
import { Footer, Header } from "../components";

const Layout = ({ children }) => {
  return (
    <Container
      maxW="container.xl"
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <VStack>
        <Header />
        <main style={{ "margin-top": "150px", "margin-bottom": "100px" }}>
          {children}
        </main>
        <Footer />
      </VStack>
    </Container>
  );
};

export default Layout;
