import { Box, Flex, Grid, Button } from "@chakra-ui/react";
import { useTranslation } from "next-i18next";
import { FC } from "react";

const Partner: FC = () => {
  return (
    <Flex alignItems="center" id="Team" flexDir="column" w="100%">
      <Flex mt="100"></Flex>
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
        borderRadius="2xl"
        p="5"
        bgColor="#519cf9"
        color="#fff"
        fontFamily={"NotoSansCJKkr"}
        fontWeight="bold"
        fontSize={"2vw"}
      >
        JOIN US!
      </Button>
      <Flex mb="100"></Flex>
    </Flex>
  );
};

export default Partner;
