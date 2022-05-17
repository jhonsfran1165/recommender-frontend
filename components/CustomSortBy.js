import { Box, Select } from "@chakra-ui/react";
import { connectSortBy } from "react-instantsearch-dom";

const SortBy = ({ items, refine }) => (
  <Box>
    <Select
      spacing={3}
      placeholder="Select option"
      onChange={(event) => {
        event.preventDefault();
        refine(event.target.value);
      }}
    >
      {items.map((item) => (
        <option
          style={{ fontWeight: item.isRefined ? "bold" : "" }}
          key={item.value}
          value={item.value}
        >
          {item.label}
        </option>
      ))}
    </Select>
  </Box>
);

const CustomSortBy = connectSortBy(SortBy);

export default CustomSortBy;
