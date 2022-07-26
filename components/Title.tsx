import { Box, Button, Center, Flex, Image, Link } from "@chakra-ui/react";
import { FC, useState } from "react";
import { FaDiscord } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";

// @ 타이틀 이미지는 이미지에 마우스를 올리면 Gif 이미지가 나오도록 하였습니다. public/images 교체하셔서 사용하시면 됩니다.
const titleImage = "title_new.png";
// const titleImageGif = "title.gif";
const exampleImage1 = "example1.png";
const exampleImage2 = "example2.png";
const exampleImage3 = "example3.png";
const exampleImage4 = "example4.png";
const exampleImage5 = "example5.png";

const Title: FC = () => {
  const [isHover, setIsHover] = useState<boolean>(false);

  return (
    <Flex
      flexDir="column"
      id="Title"
      w="full"
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
          src={`../images/${exampleImage1}`}
          borderRadius="3xl"
          borderColor="#fff"
          border="50"
          width="20%"
          height="20%"
          p={2}
        />
        <Box width={10}></Box>
        <Image
          src={`../images/${exampleImage2}`}
          borderRadius="3xl"
          width="20%"
          height="20%"
          p={2}
        />
        <Box width={10}></Box>{" "}
        <Image
          src={`../images/${exampleImage3}`}
          borderRadius="3xl"
          width="20%"
          height="20%"
          p={2}
        />
        <Box width={10}></Box>{" "}
        <Image
          src={`../images/${exampleImage4}`}
          borderRadius="3xl"
          width="20%"
          height="20%"
          p={2}
        />
        <Box width={10}></Box>{" "}
        <Image
          src={`../images/${exampleImage5}`}
          borderRadius="3xl"
          width="20%"
          height="20%"
          p={2}
        />
      </Flex>
      <Box height={10}></Box>
      <Button
        borderRadius="2xl"
        p="3"
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
