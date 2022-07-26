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
      </Flex>
      <Flex px="10%" flexDir={"column"} alignContent="center">
        <Flex
          mb="10"
          fontFamily="NotoSansKR"
          fontSize="3vw"
          fontWeight="bold"
          color="#fff"
        >
          CHAPTER 01.
        </Flex>
        <Flex
          mb="5"
          fontFamily="NotoSansKR"
          fontSize="3vw"
          fontWeight="bold"
          color="#fff"
        >
          한가로이 바다를 헤엄쳐 다니던 한마리의 아기고래 헤롱이 🐳
        </Flex>
        <Flex
          mb="5"
          fontFamily="NotoSansKR"
          fontSize="3vw"
          fontWeight="bold"
          color="#fff"
        >
          난파선에서 흘러나온 ‘통’ 🏺 하나와 우연히 마주한다... 🧐
        </Flex>
        <Flex
          mb="5"
          fontFamily="NotoSansKR"
          fontSize="3vw"
          fontWeight="bold"
          color="#fff"
        >
          호기심에 이끌려 통 안에 들어 있던 액체의 맛을 본 헤롱이 😵‍💫
        </Flex>
        <Flex
          mb="5"
          fontFamily="NotoSansKR"
          fontSize="3vw"
          fontWeight="bold"
          color="#fff"
        >
          아니 이것은❗️❓
        </Flex>
        <Flex
          mb="5"
          fontFamily="NotoSansKR"
          fontSize="3vw"
          fontWeight="bold"
          color="#fff"
        >
          맛보자 마자 눈이 번쩍 뜨여 😳 주변 친구들을 불러 모아 신비한 액체를
          나누어 마신다... 🤪
        </Flex>
        <Flex
          mb="5"
          fontFamily="NotoSansKR"
          fontSize="3vw"
          fontWeight="bold"
          color="#fff"
        >
          이 통 안에 들어있던 감미로운 액체는 바로 ‘술’!!!
        </Flex>
        <Flex
          mb="5"
          fontFamily="NotoSansKR"
          fontSize="3vw"
          fontWeight="bold"
          color="#fff"
          textAlign="center"
        >
          🍺 🍾 🍷 🍹 🥂 🍸 🥃 🍶
        </Flex>
        <Flex
          mb="5"
          fontFamily="NotoSansKR"
          fontSize="3vw"
          fontWeight="bold"
          color="#fff"
        >
          술의 맛에 해롭게 눈을 뜬 고래 친구들은 모두 함께 바다에 흩어져 있을
          다양한 술을 찾아 모험을 떠나기로 하는데... ⚓️
        </Flex>
        <Flex
          mb="5"
          fontFamily="NotoSansKR"
          fontSize="3vw"
          fontWeight="bold"
          color="#fff"
        >
          To be Continued...
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Story;
