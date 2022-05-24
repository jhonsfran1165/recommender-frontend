import { Flex } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { Hit } from "../../components";

const Copy = ({ data }) => {
  const router = useRouter();
  const { id } = router.query;
  console.log(data);

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
      <Hit hit={data[0].antecedents} w="100%" disableAction={true} />
    </Flex>
  );
};

export async function getServerSideProps(context) {
  const id = context.params.id;
  // Fetch data from external API
  const res = await fetch(`http://localhost:8000/api/v1/rules/rules?id=${id}`);
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}

export default Copy;
