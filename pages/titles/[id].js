import { Flex, VStack } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import EmailPassword from "supertokens-auth-react/recipe/emailpassword";
import { Hit, Loader } from "../../components";
import useCopiesByTitle from "../../hooks/useCopiesByTitle";
import useRules from "../../hooks/useRules";

const EmailPasswordAuthNoSSR = dynamic(
  new Promise((res) => res(EmailPassword.EmailPasswordAuth)),
  { ssr: false }
);

const Copy = (props) => {
  const router = useRouter();
  const { id } = router.query;
  const [loading, data, error] = useCopiesByTitle(id);
  const [loadingRules, dataRules, errorRules] = useRules(id);

  if (loading || loadingRules) {
    return <Loader />;
  } else {
    return (
      <EmailPasswordAuthNoSSR>
        <VStack>
          <Flex gap={4} w="100%" wrap="wrap" pl={2}>
            {data?.map((element, index) => {
              return <Hit w="100%" key={index} hit={element} />;
            })}
          </Flex>
        </VStack>
      </EmailPasswordAuthNoSSR>
    );
  }
};

export default Copy;
