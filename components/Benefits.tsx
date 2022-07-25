import { Box, Flex, Image, Text, useColorMode, Button } from "@chakra-ui/react";
import { useTranslation } from "next-i18next";
import { FC } from "react";

const Benefits: FC = () => {
  return (
    <Flex
      w="100%"
      justifyContent="center"
      alignItems="center"
      id="Benefits"
      flexDir={["column", "column", "column"]}
      bgGradient="linear(to-t, #83fdfe, #a3d1f3)"
    >
      <Flex mt="100">
        <Box w={["full", "full%"]} p={8}>
          <Text
            textAlign="center"
            mb="15"
            fontFamily="NotoSansKR"
            fontSize="4vw"
            fontWeight="bold"
            color="#fff"
          >
            BENEFITS
          </Text>
        </Box>
      </Flex>
      <Flex flexDir={["column", "row", "row"]}>
        <Image
          src={`../images/benefit1.png`}
          borderRadius="2xl"
          p={2}
          width={["100%", "50%"]}
        />
        <Image
          src={`../images/benefit2.png`}
          borderRadius="2xl"
          p={2}
          width={["100%", "50%"]}
        />
      </Flex>
      <Flex flexDir={["column", "row", "row"]}>
        <Image
          src={`../images/benefit3.png`}
          borderRadius="2xl"
          p={2}
          width={["100%", "50%"]}
        />
        <Image
          src={`../images/benefit4.png`}
          borderRadius="2xl"
          p={2}
          width={["100%", "50%"]}
        />
      </Flex>
      <Flex mb="100"></Flex>
    </Flex>
  );
};

export default Benefits;
