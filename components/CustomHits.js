import { Flex } from "@chakra-ui/react";
import { connectHits } from "react-instantsearch-dom";
import Hit from "./Hit";

const Hits = ({ hits }) => (
  <Flex id={"searchResults"} gap={4} w="100%" wrap="wrap" m={8} pl={2}>
    {hits.map((hit) => (
      <Hit key={hit.id} hit={hit} />
    ))}
  </Flex>
);

const CustomHits = connectHits(Hits);

export default CustomHits;
