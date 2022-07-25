import { Box, Flex, Image, Text, useColorMode, Button } from "@chakra-ui/react";
import { useTranslation } from "next-i18next";
import { FC } from "react";

const Story: FC = () => {
  return (
    <Flex
      w="100%"
      minH="100vh"
      justifyContent="center"
      alignItems="center"
      id="Story"
      flexDir={["column", "column", "column"]}
      bgGradient="linear(to-t, #bda4e6, #c88be0)"
    >
      <Flex height="20"></Flex>
      <Flex w={["full%", "full%", "100%"]}>
        <Box w={["full", "full%"]} p={8}>
          <Text
            textAlign="center"
            mb={8}
            fontFamily="NotoSansKR"
            fontSize="4vw"
            fontWeight="bold"
            color="#fff"
          >
            STORY
          </Text>
        </Box>
        <Box height={800}></Box>
      </Flex>
    </Flex>
  );
};

export default Story;
