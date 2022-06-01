import { Flex, VStack } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import EmailPassword from "supertokens-auth-react/recipe/emailpassword";
import { Hit, Loader } from "../../components";
import useCopy from "../../hooks/useCopy";
import useRules from "../../hooks/useRules";

const EmailPasswordAuthNoSSR = dynamic(
  new Promise((res) => res(EmailPassword.EmailPasswordAuth)),
  { ssr: false }
);

const Copy = (props) => {
  const router = useRouter();
  const { id } = router.query;
  const [loading, data, error] = useCopy(id);
  const [loadingRules, dataRules, errorRules] = useRules(id);

  if (loading || loadingRules) {
    return <Loader />;
  } else {
    return (
      <EmailPasswordAuthNoSSR>
        <VStack>
          <Flex p={10}>
            <Hit hit={data} w="100%" disableAction={true} />
          </Flex>
          <Flex gap={4} w="100%" wrap="wrap" pl={2}>
            {dataRules?.map((rule) => {
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
      </EmailPasswordAuthNoSSR>
    );
  }
};

export default Copy;
