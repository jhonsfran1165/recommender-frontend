import { Link } from "@chakra-ui/react";
import { connectPagination } from "react-instantsearch-dom";

const Pagination = ({ currentRefinement, nbPages }) => (
  <ul>
    {new Array(nbPages).fill(null).map((_, index) => {
      const page = index + 1;
      const style = {
        fontWeight: currentRefinement === page ? "bold" : "",
      };

      return (
        <li key={index}>
          <Link href="#" style={style}>
            {page}
          </Link>
        </li>
      );
    })}
  </ul>
);

const CustomPagination = connectPagination(Pagination);

export default CustomPagination;
