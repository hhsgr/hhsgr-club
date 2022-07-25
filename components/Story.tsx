import { Box, Flex, Image, Text, useColorMode, Button } from "@chakra-ui/react";
import { useTranslation } from "next-i18next";
import { FC } from "react";

const Story: FC = () => {
  return (
    <Flex
      w="100%"
      justifyContent="center"
      alignItems="center"
      id="Story"
      flexDir="column"
      bgGradient="linear(to-t, #bda4e6, #c88be0)"
    >
      <Flex>
        <Box mt="100">
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
