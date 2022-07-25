import { Box, Flex, Image, Text, useColorMode, Button } from "@chakra-ui/react";
import { useTranslation } from "next-i18next";
import { FC } from "react";
// import { Button } from "react-scroll";

// @ 이미지는 public/images, 스토리 내용은 public/locales의 json 파일을 각각 수정해서 사용하시면 됩니다.
const roadmapImage = "roadmap.png";

const Roadmap: FC = () => {
  return (
    <Flex
      minH="100vh"
      justifyContent="center"
      alignItems="center"
      id="Roadmap"
      flexDir={["column", "column", "column"]}
      bgGradient="linear(to-t, #a3d1f3, #bda4e6)"
    >
      <Flex height="20"></Flex>
      <Flex w={["full%", "full%", "100%"]} flexDir="column">
        <Flex
          w={["full", "full%"]}
          p={8}
          alignItems="center"
          justifyContent="center"
        >
          <Text
            textAlign="center"
            mb={8}
            fontFamily="NotoSansKR"
            fontSize="4vw"
            fontWeight="bold"
            color="#fff"
          >
            ROADMAP
          </Text>
        </Flex>
        <Flex
          w={["full", "full%"]}
          p={8}
          alignItems="center"
          justifyContent="center"
        >
          <Image
            src={`../images/${roadmapImage}`}
            // position="center"
            // alignItems={"center"}
            justifyContent={"center"}
          />
          <Image />
          <Flex width="10%"></Flex>
        </Flex>
        <Box height={800}></Box>
      </Flex>
    </Flex>
  );
};

export default Roadmap;
