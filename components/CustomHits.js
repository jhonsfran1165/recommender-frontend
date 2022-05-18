import {
  Box,
  Button,
  Center,
  Divider,
  Flex,
  Heading,
  Spacer,
  useColorModeValue,
} from "@chakra-ui/react";
import { BsFillBookFill, BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";
import { connectHits, Highlight, Snippet } from "react-instantsearch-dom";

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

const Hits = ({ hits }) => (
  <Flex gap={4} w="100%" wrap="wrap" m={8} pl={2}>
    {hits.map((hit) => (
      <Box
        key={hit.id}
        bg={useColorModeValue("white", "gray.800")}
        maxW="sm"
        borderWidth="1px"
        rounded="lg"
        shadow="lg"
        p="4"
        w="30%"
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
            <Highlight attribute="author_name" hit={hit} />
            <Spacer />
            <b>
              <Highlight attribute="medium_type" hit={hit} />
            </b>
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

          <Flex
            mb={2}
            mt={2}
            justifyContent="space-between"
            alignContent="center"
          >
            <Box fontSize="sm" color={useColorModeValue("gray.650", "white")}>
              <Snippet attribute="location" hit={hit} />
            </Box>
          </Flex>
        </Box>

        <Divider />

        <Center mt={4}>
          <Button
            w="200px"
            leftIcon={<BsFillBookFill />}
            colorScheme="red"
            variant="outline"
            boxShadow="xl"
          >
            Solicitar Libro
          </Button>
        </Center>
      </Box>
    ))}
  </Flex>
);

const CustomHits = connectHits(Hits);

export default CustomHits;
