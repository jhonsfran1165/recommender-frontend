import { Center, Flex, Heading, Link } from "@chakra-ui/react";
import { connectPagination } from "react-instantsearch-dom";

const Pagination = ({ currentRefinement, nbPages, refine }) => (
  <Center>
    <Flex gap={4}>
      {new Array(nbPages).fill(null).map((_, index) => {
        const page = index + 1;
        const style = {
          fontWeight: currentRefinement === page ? "bold" : "",
        };

        return (
          <Link
            key={index}
            onClick={(event) => {
              event.preventDefault();
              refine(page);
            }}
            href="#"
            style={style}
          >
            <Heading
              fontSize="lg"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
            >
              {page}
            </Heading>
          </Link>
        );
      })}
    </Flex>
  </Center>
);

const CustomPagination = connectPagination(Pagination);

export default CustomPagination;
