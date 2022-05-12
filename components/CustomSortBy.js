import { Select } from "@chakra-ui/react";
import { connectSortBy } from "react-instantsearch-dom";

const SortBy = ({ items, refine }) => (
  <ul>
    <Select
      placeholder="Select option"
      onChange={(item) => {
        refine(item.value);
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
  </ul>
);

const CustomSortBy = connectSortBy(SortBy);

export default CustomSortBy;
