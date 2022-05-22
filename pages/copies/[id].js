import { Flex } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { Hit } from "../../components";

const Copy = () => {
  const router = useRouter();
  const { id } = router.query;

  const hit = {
    author_name: "Hartog, Johan",
    bar_code: "53570.0",
    copy_title: "Biografia del almirante Luis Brion",
    id: 1,
    location: "Biblioteca Mario Carvajal - Melendez - Cali. Univalle.",
    medium_type: "IMPR",
    pr_classmark: "920.0",
    shelfmark: "920.987 B858H",
  };

  return (
    <Flex p={10} mt={20}>
      <Hit hit={hit} w="100%" disableAction={true} />
    </Flex>
  );
};

export default Copy;
