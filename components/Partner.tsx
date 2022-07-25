import { Box, Flex, Grid, Button } from "@chakra-ui/react";
import { useTranslation } from "next-i18next";
import { FC } from "react";

const Partner: FC = () => {
  return (
    <Flex minH="100vh" alignItems="center" id="Team" flexDir="column">
      <Flex height={330}></Flex>
      <Flex>
        <Box
          textAlign="center"
          mb={8}
          fontFamily="NotoSansKR"
          fontSize="4vw"
          fontWeight="bold"
          color="#c88be0"
        >
          PARTNERS
        </Box>
        <Flex height="130"></Flex>
      </Flex>
      <Button
        borderRadius={64}
        height={10}
        bgColor="#519cf9"
        color="#fff"
        fontFamily={"NotoSansCJKkr"}
        fontWeight="bold"
        fontSize={"20"}
      >
        JOIN US!
      </Button>
      <Flex height="250"></Flex>
    </Flex>
  );
};

export default Partner;
