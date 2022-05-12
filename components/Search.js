import { Grid, GridItem } from "@chakra-ui/react";
import { instantMeiliSearch } from "@meilisearch/instant-meilisearch";
import React from "react";
import { Configure, Hits, InstantSearch } from "react-instantsearch-dom";
import CustomClearRefinements from "../components/CustomClearRefinements";
import CustomPagination from "../components/CustomPagination";
import CustomRefinementList from "../components/CustomRefinementList";
import CustomSearchBox from "../components/CustomSearchBox";
import Hit from "../components/Hits";
import CustomSortBy from "./CustomSortBy";

const searchClient = instantMeiliSearch(
  "https://integration-demos.meilisearch.com",
  "q7QHwGiX841a509c8b05ef29e55f2d94c02c00635f729ccf097a734cbdf7961530f47c47"
);

const App = () => (
  <div className="ais-InstantSearch">
    <h1>MeiliSearch + React InstantSearch</h1>
    <h2>
      Search in Steam video games{" "}
      <span role="img" aria-label="emoji">
        🎮
      </span>
    </h2>
    <p>
      This is not the official Steam dataset but only for demo purpose. Enjoy
      searching with MeiliSearch!
    </p>
    <InstantSearch indexName="steam-video-games" searchClient={searchClient}>
      <Grid
        h="200px"
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(5, 1fr)"
        gap={4}
      >
        <GridItem rowSpan={2} colSpan={1}>
          <div className="left-panel">
            <CustomClearRefinements />
            <CustomSortBy
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
            <h2>Genres</h2>
            <CustomRefinementList attribute="genres" />
            <h2>Players</h2>
            <CustomRefinementList attribute="players" />
            <h2>Platforms</h2>
            <CustomRefinementList attribute="platforms" />
            <h2>Misc</h2>
            <CustomRefinementList attribute="misc" />
            <Configure
              hitsPerPage={6}
              attributesToSnippet={["description:50"]}
              snippetEllipsisText={"..."}
            />
          </div>
        </GridItem>
        <GridItem colSpan={4}>
          <div>
            {/* <SearchBox /> */}
            <CustomSearchBox />
            <Hits hitComponent={Hit} />
            <CustomPagination showLast={true} />
          </div>
        </GridItem>
        <GridItem colSpan={4} bg="tomato"></GridItem>
      </Grid>
    </InstantSearch>
  </div>
);

// const Hit = ({ hit }) => (
//   <div key={hit.id}>
//     <div className="hit-name">
//       <Highlight attribute="name" hit={hit} />
//     </div>
//     <img src={hit.image} align="left" alt={hit.name} />
//     <div className="hit-description">
//       <Snippet attribute="description" hit={hit} />
//     </div>
//     <div className="hit-info">price: {hit.price}</div>
//     <div className="hit-info">release date: {hit.releaseDate}</div>
//   </div>
// );

export default App;
