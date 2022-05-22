import {
  Box,
  Button,
  Center,
  Divider,
  Flex,
  Heading,
  Spacer,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import Link from "next/link";
import { BsFillBookFill, BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";

function Rating({ rating, numReviews }) {
  return (
    <Box color={"yellow.500"} d="flex" alignItems="center">
      {Array(5)
        .fill("")
        .map((_, i) => {
          const roundedRating = Math.round(rating * 2) / 2;
          if (roundedRating - i >= 1) {
            return <BsStarFill key={i} style={{ marginLeft: "1" }} />;
          }
          if (roundedRating - i === 0.5) {
            return <BsStarHalf key={i} style={{ marginLeft: "1" }} />;
          }
          return <BsStar key={i} style={{ marginLeft: "1" }} />;
        })}
      <Box as="span" ml="2" fontSize="sm">
        {numReviews} review{numReviews > 1 && "s"}
      </Box>
    </Box>
  );
}

const Hit = ({ hit, w, disableAction }) => (
  <Box
    bg={useColorModeValue("white", "gray.800")}
    maxW="sm"
    borderWidth="1px"
    rounded="lg"
    shadow="lg"
    p="4"
    w={w || "30%"}
  >
    <Box h="200px" bg="red.400" />

    <Box p="4">
      <Box mb={2}>
        <Heading
          fontSize="lg"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          noOfLines={3}
        >
          {hit.copy_title}
        </Heading>
      </Box>
      <Divider />
      <Flex mt={4} justifyContent="space-between" alignContent="center">
        <Text fontSize="sm" as="h8" noOfLines={1}>
          {hit.author_name}
        </Text>
        <Spacer />
        <Heading fontSize="sm" as="h8" noOfLines={1}>
          {hit.medium_type}
        </Heading>
      </Flex>

      <Box fontSize="sm" color={useColorModeValue("gray.500", "white")}>
        {hit.shelfmark}
      </Box>

      <Flex mt={2} justifyContent="space-between" alignContent="center">
        <Rating
          rating={hit.copy_title.length}
          numReviews={hit.copy_title.length * 100}
        />
      </Flex>

      <Flex mb={2} mt={2} justifyContent="space-between" alignContent="center">
        <Box
          fontSize="sm"
          noOfLines={1}
          color={useColorModeValue("gray.650", "white")}
        >
          {hit.location}
        </Box>
      </Flex>
    </Box>

    <Divider />

    {!disableAction && (
      <Center mt={4}>
        <Link href={`/copies/${hit.id}`}>
          <Button
            w="200px"
            leftIcon={<BsFillBookFill />}
            colorScheme="red"
            variant="outline"
            boxShadow="xl"
          >
            Solicitar Libro
          </Button>
        </Link>
      </Center>
    )}
  </Box>
);

export default Hit;
