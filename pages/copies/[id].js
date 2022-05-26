import { Flex, VStack } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { Hit } from "../../components";

const Copy = ({ copy, rules }) => {
  const router = useRouter();
  return (
    <VStack>
      <Flex p={10}>
        <Hit hit={copy} w="100%" disableAction={true} />
      </Flex>
      <Flex gap={4} w="100%" wrap="wrap" pl={2}>
        {rules.map((rule) => {
          const {
            antecedent_support,
            consequent_support,
            support,
            confidence,
            lift,
            leverage,
            conviction,
          } = rule;

          return (
            <Hit
              key={rule.consequents.id}
              rule={{
                antecedent_support,
                consequent_support,
                support,
                confidence,
                lift,
                leverage,
                conviction,
              }}
              hit={rule.consequents}
              w="100%"
            />
          );
        })}
      </Flex>
    </VStack>
  );
};

export async function getServerSideProps(context) {
  const id = context.params.id;
  // Fetch data from external API
  const res = await fetch(`http://localhost:8000/api/v1/rules/rules?id=${id}`);
  const copy = await fetch(`http://localhost:8000/api/v1/copies/copy?id=${id}`);
  const copy_data = await copy.json();
  const rules = await res.json();

  // Pass data to the page via props
  return { props: { copy: copy_data, rules } };
}

export default Copy;
