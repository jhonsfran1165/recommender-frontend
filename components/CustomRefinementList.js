import { Checkbox, List, ListItem, Text } from "@chakra-ui/react";
import { connectRefinementList } from "react-instantsearch-dom";

const RefinementList = ({ items, refine }) => (
  <List>
    {items.map((item) => (
      <ListItem key={item.label}>
        <Checkbox
          style={{ fontWeight: item.isRefined ? "bold" : "" }}
          onChange={(event) => {
            event.preventDefault();
            refine(item.value);
          }}
        >
          <Text fontSize="xs">
            {item.label} ({item.count})
          </Text>
        </Checkbox>
      </ListItem>
    ))}
  </List>
);

const CustomRefinementList = connectRefinementList(RefinementList);

export default CustomRefinementList;
