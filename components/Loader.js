import { Box, Container, Spinner, Stack } from "@chakra-ui/react";

export default function CallToActionWithAnnotation() {
  return (
    <>
      <Container maxW={"3xl"}>
        <Stack
          as={Box}
          textAlign={"center"}
          spacing={{ base: 8, md: 14 }}
          py={{ base: 20, md: 36 }}
        >
          <Stack
            direction={"column"}
            spacing={3}
            align={"center"}
            alignSelf={"center"}
            position={"relative"}
          >
            <Spinner color="red.500" size="xl" />
          </Stack>
        </Stack>
      </Container>
    </>
  );
}
