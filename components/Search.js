import { Flex, Grid, GridItem, Heading } from "@chakra-ui/react";
import { instantMeiliSearch } from "@meilisearch/instant-meilisearch";
import { Configure, InstantSearch } from "react-instantsearch-dom";
import {
  CustomClearRefinements,
  CustomHits,
  CustomPagination,
  CustomRefinementList,
  CustomSearchBox,
  CustomSortBy,
} from "../components";

// TODO: pass this throguth env vars
const searchClient = instantMeiliSearch(
  "http://localhost:7700",
  "asd7687asdasdkjhwrdf97fcsadfs"
);

const Search = (props) => {
  return (
    <Flex w="100%" p={10}>
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
  );
};

export default Search;
