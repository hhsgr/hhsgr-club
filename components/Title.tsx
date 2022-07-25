import { Box, Button, Center, Flex, Image, Link } from "@chakra-ui/react";
import { FC, useState } from "react";
import { FaDiscord } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";

// @ 타이틀 이미지는 이미지에 마우스를 올리면 Gif 이미지가 나오도록 하였습니다. public/images 교체하셔서 사용하시면 됩니다.
const titleImage = "title.png";
// const titleImageGif = "title.gif";
const storyImage = "lion.gif";

const Title: FC = () => {
  const [isHover, setIsHover] = useState<boolean>(false);

  return (
    <Flex
      flexDir="column"
      id="Title"
      w="100%"
      bgColor="#c88be0"
      alignItems={"center"}
    >
      <Flex
        w="100%"
        top="0"
        justifyContent="space-around"
        alignItems="center"
        // shadow="md"
        // zIndex={1}
        flexDir="row"
        bgColor="#d9b5fd"
        visibility={"hidden"}
      >
        <Box cursor="pointer">
          <Image src={`../images/logo.png`} alt="LOGO" padding="1" />
        </Box>
        <Flex alignItems="center" my={[4, 4, 0]} flexDir="row">
          <Button variant="ghost" size={["xs", "xs", "sm"]}>
            <FaDiscord size={24} />
          </Button>
          <Button variant="ghost" size={["xs", "xs", "sm"]}>
            <FaDiscord size={24} />
          </Button>
          <Button variant="ghost" size={["xs", "xs", "sm"]}>
            <FaDiscord size={24} />
          </Button>
          <Button variant="ghost" size={["xs", "xs", "sm"]}>
            <FaDiscord size={24} />
          </Button>
        </Flex>
      </Flex>
      <Flex bgColor={"#8f3bff"}>
        <Image src={`../images/${titleImage}`} />
      </Flex>
      <Box height={10}></Box>
      <Flex
        className="animate__animated animate__slideInRight"
        alignItems="center"
        justifyContent="space-around"
      >
        <Image
          src={`../images/${storyImage}`}
          borderRadius="2xl"
          width="20%"
          height="20%"
          p={2}
        />
        <Box width={10}></Box>
        <Image
          src={`../images/${storyImage}`}
          borderRadius="2xl"
          width="20%"
          height="20%"
          p={2}
        />
        <Box width={10}></Box>{" "}
        <Image
          src={`../images/${storyImage}`}
          borderRadius="2xl"
          width="20%"
          height="20%"
          p={2}
        />
        <Box width={10}></Box>{" "}
        <Image
          src={`../images/${storyImage}`}
          borderRadius="2xl"
          width="20%"
          height="20%"
          p={2}
        />
        <Box width={10}></Box>{" "}
        <Image
          src={`../images/${storyImage}`}
          borderRadius="2xl"
          width="20%"
          height="20%"
          p={2}
        />
      </Flex>
      <Box height={10}></Box>
      <Button
        borderRadius="2xl"
        p="5"
        bgColor="#519cf9"
        color="#fff"
        fontFamily={"NotoSansCJKkr"}
        fontWeight="bold"
        fontSize={"2vw"}
      >
        CHECK IT ON OPENSEA!
      </Button>
    </Flex>
  );
};

export default Title;
