import {
  Flex,
  Grid,
  GridItem,
  Heading,
  HStack,
  IconButton,
  Spacer,
  Stack,
  Text,
  useColorMode,
  VStack,
} from "@chakra-ui/react";
import { instantMeiliSearch } from "@meilisearch/instant-meilisearch";
import { FaMoon, FaSearchengin, FaSun } from "react-icons/fa";
import { Configure, InstantSearch } from "react-instantsearch-dom";
import CustomClearRefinements from "../components/CustomClearRefinements";
import CustomHits from "../components/CustomHits";
import CustomPagination from "../components/CustomPagination";
import CustomRefinementList from "../components/CustomRefinementList";
import CustomSearchBox from "../components/CustomSearchBox";
import CustomSortBy from "../components/CustomSortBy";

const searchClient = instantMeiliSearch(
  "http://localhost:7700",
  "asd7687asdasdkjhwrdf97fcsadfs"
);

export default function SearchEngine(props) {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";

  return (
    <VStack p={5}>
      <Flex w="100%">
        <HStack>
          <Text fontSize="3xl" color="red.400">
            <FaSearchengin />
          </Text>
          <Heading pl={2} fontSize="3xl" ml="2" color="red.400">
            Booker Univalle
          </Heading>
        </HStack>
        <Spacer></Spacer>
        <IconButton
          ml={8}
          icon={isDark ? <FaSun /> : <FaMoon />}
          isRound="true"
          onClick={toggleColorMode}
        ></IconButton>
      </Flex>
      <Stack p={10} w="100%">
        <Flex w="100%">
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
      </Stack>
      <Stack p={10} w="100%">
        <Flex w="100%">
          <InstantSearch indexName="copies" searchClient={searchClient}>
            <Grid
              templateRows="repeat(2, 1fr)"
              templateColumns="repeat(8, 1fr)"
              gap={5}
            >
              <GridItem rowSpan={2} w="100%" colSpan={1}>
                <CustomClearRefinements />
                <CustomSortBy
                  defaultRefinement="copies"
                  items={[
                    { value: "copies", label: "BarCode" },
                    {
                      value: "copies:bar_code:desc",
                      label: "Most Recommended",
                    },
                    {
                      value: "copies:bar_code:asc",
                      label: "Least Recommended",
                    },
                  ]}
                />
                <Heading as="h6" size="xs" mt={4} mb={2}>
                  Biblioteca
                </Heading>
                <CustomRefinementList attribute="medium_type" />
                <Heading as="h6" size="xs" mt={4} mb={2}>
                  Tipo
                </Heading>
                <CustomRefinementList attribute="location" />
                <Configure
                  hitsPerPage={9}
                  attributesToSnippet={["description:50"]}
                  snippetEllipsisText={"..."}
                />
              </GridItem>
              <GridItem rowSpan={2} colSpan={7} w="100%">
                <CustomSearchBox />
                <CustomHits />
                <CustomPagination />
              </GridItem>
            </Grid>
          </InstantSearch>
        </Flex>
      </Stack>
    </VStack>
  );
}
