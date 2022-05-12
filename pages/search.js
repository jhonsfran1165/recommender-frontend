
import { instantMeiliSearch } from "@meilisearch/instant-meilisearch";

import { RefinementList, Configure, ClearRefinements, Hits, InstantSearch, SearchBox, SortBy, Pagination } from "react-instantsearch-dom";
import { Stack, VStack, HStack, Flex, Heading, Box } from '@chakra-ui/react'
import { FaSearchengin, FaMoon, FaSun } from "react-icons/fa";
import { Grid, GridItem, Text, IconButton, Spacer, useColorMode } from '@chakra-ui/react'


const searchClient = instantMeiliSearch(
  "https://integration-demos.meilisearch.com",
  "q7QHwGiX841a509c8b05ef29e55f2d94c02c00635f729ccf097a734cbdf7961530f47c47"
);


export default function SearchEngine(props) {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark"

  return (
    <VStack p={5}>
      <Flex w="100%">
        <HStack>
          <Text fontSize='3xl' color="red.400"><FaSearchengin /></Text>
          <Heading pl={2} fontSize='3xl' ml="2" color="red.400">
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
            fontSize={{ base: 'xl', sm: '2xl', lg: '3xl' }}
          >
            <Text
              as={'span'}
              position={'relative'}
              _after={{
                content: "''",
                width: 'full',
                height: '30%',
                position: 'absolute',
                bottom: 1,
                left: 0,
                bg: 'red.400',
                zIndex: -1,
              }}>
              Busca tus libros,
            </Text>
            <br />
            <Text as={'span'} color={'red.400'}>
              obtén recomendaciones.
            </Text>
            <br />
            <Text as={'span'}>
              Nunca fue tan fácil estudiar.
            </Text>
            </Heading>
        </Flex>
      </Stack>
      <Stack p={10} w="100%">
        <Flex w="100%">
          <InstantSearch indexName="steam-video-games" searchClient={searchClient}>
            <Grid
              templateRows="repeat(2, 1fr)"
              templateColumns="repeat(6, 1fr)"
              gap={5}
            >
              <GridItem rowSpan={2} w='100%' colSpan={1}>
                <ClearRefinements />
                <SortBy
                  defaultRefinement="steam-video-games"
                  items={[
                    { value: "steam-video-games", label: "Relevant" },
                    {
                      value: "steam-video-games:recommendationCount:desc",
                      label: "Most Recommended",
                    },
                    {
                      value: "steam-video-games:recommendationCount:asc",
                      label: "Least Recommended",
                    },
                  ]}
                />
                <h2>Biblioteca</h2>
                <RefinementList attribute="genres" />
                <h2>Tipo</h2>
                <RefinementList attribute="misc" />
                <Configure
                  hitsPerPage={5}
                  attributesToSnippet={["description:50"]}
                  snippetEllipsisText={"..."}
                />
                Menú buscador
              </GridItem>
              <GridItem colSpan={4} w='100%'>
                <SearchBox />
                <Hits />
              </GridItem>
              <GridItem colSpan={4}>
                <Pagination />
              </GridItem>
            </Grid>
          </InstantSearch>
      </ Flex>
    </Stack>
    </VStack>
  );
}