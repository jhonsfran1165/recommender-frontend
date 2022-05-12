import { Checkbox } from "@chakra-ui/react";
import { connectRefinementList } from "react-instantsearch-dom";

const RefinementList = ({ items, refine }) => (
  <ul>
    {items.map((item) => (
      <li key={item.label}>
        <Checkbox
          style={{ fontWeight: item.isRefined ? "bold" : "" }}
          onChange={(event) => {
            event.preventDefault();
            refine(item.value);
          }}
        >
          {item.label} ({item.count})
        </Checkbox>
      </li>
    ))}
  </ul>
);

const CustomRefinementList = connectRefinementList(RefinementList);

export default CustomRefinementList;
