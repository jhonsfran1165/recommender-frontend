import { Button } from "@chakra-ui/react";
import { connectCurrentRefinements } from "react-instantsearch-dom";

const ClearRefinements = ({ items, refine }) => (
  <Button onClick={() => refine(items)} disabled={!items.length}>
    Clear all refinements
  </Button>
);

const CustomClearRefinements = connectCurrentRefinements(ClearRefinements);

export default CustomClearRefinements;
