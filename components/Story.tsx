import { Box, Flex, Image, Text, useColorMode, Button } from "@chakra-ui/react";
import { useTranslation } from "next-i18next";
import { FC } from "react";
// import { Button } from "react-scroll";

// @ 이미지는 public/images, 스토리 내용은 public/locales의 json 파일을 각각 수정해서 사용하시면 됩니다.
const storyImage = "lion.gif";
const roadmapImage = "roadmap.png";
const storyConfig = [
  {
    mt: 0,
    title: "storyTitle1",
    description: "story1",
  },
  {
    mt: 8,
    title: "storyTitle2",
    description: "story2",
  },
];

const Story: FC = () => {
  const { t } = useTranslation("common");

  const { colorMode } = useColorMode();

  return (
    <Flex
      minH="100vh"
      justifyContent="center"
      alignItems="center"
      id="Story"
      flexDir={["column", "column", "column"]}
      bgGradient="linear(to-t, #83feff, #c88be0)"
    >
      <Box height={20}></Box>
      <Flex w={["full%", "full%", "100%"]}>
        <Box w={["full", "full%"]} p={8}>
          <Text
            textAlign="center"
            mb={8}
            fontFamily="NotoSansKR"
            fontSize="40"
            fontWeight="bold"
            color="#fff"
          >
            STORY
          </Text>
        </Box>
        <Box height={800}></Box>
      </Flex>
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
            fontSize="40"
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
      <Flex w={["full%", "full%", "100%"]}>
        <Box w={["full", "full%"]} p={8}>
          <Text
            textAlign="center"
            mb={8}
            fontFamily="NotoSansKR"
            fontSize="40"
            fontWeight="bold"
            color="#fff"
          >
            BENEFITS
          </Text>
        </Box>
      </Flex>
      <Flex height={330} flexDir={["column", "column", "row"]}>
        <Box
          width={550}
          height={330}
          bgColor="#fff"
          m={[74, 0, 20, 3]}
          p={[94, 54, 94, 55]}
          borderRadius="40"
        ></Box>
        <Box
          width={550}
          height={330}
          bgColor="#fff"
          m={[74, 0, 20, 3]}
          p={[94, 54, 94, 55]}
          borderRadius="40"
        ></Box>
      </Flex>
      <Flex height="5"></Flex>
      <Flex height={330} flexDir="row">
        <Box
          width={550}
          height={330}
          bgColor="#fff"
          m={[74, 0, 20, 3]}
          p={[94, 54, 94, 55]}
          borderRadius="40"
        ></Box>
        <Box
          width={550}
          height={330}
          bgColor="#fff"
          m={[74, 0, 20, 3]}
          p={[94, 54, 94, 55]}
          borderRadius="40"
        ></Box>
      </Flex>
      <Flex height={120}></Flex>
    </Flex>
  );
};

export default Story;
