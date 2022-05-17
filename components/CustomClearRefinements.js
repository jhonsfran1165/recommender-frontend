import { Button, Center } from "@chakra-ui/react";
import { connectCurrentRefinements } from "react-instantsearch-dom";

const ClearRefinements = ({ items, refine }) => (
  <Center m={5}>
    <Button onClick={() => refine(items)} disabled={!items.length}>
      Clear all refinements
    </Button>
  </Center>
);

const CustomClearRefinements = connectCurrentRefinements(ClearRefinements);

export default CustomClearRefinements;
