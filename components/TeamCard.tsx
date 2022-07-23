import { Flex, Image, Text, useColorMode } from "@chakra-ui/react";
import { FC } from "react";
import "animate.css";
import { useAnimate } from "hooks";

interface TeamCardProps {
  name: string;
  position: string;
  image: string;
  color: string;
  animation: string;
}

const TeamCard: FC<TeamCardProps> = ({
  name,
  position,
  image,
  color,
  animation,
}) => {
  const { colorMode } = useColorMode();

  const { isAnimated, dom } = useAnimate();

  return (
    <Flex
      m={[8, 8, 8, 4]}
      // className={`${isAnimated && "animate__animated animate__" + animation}`}
      ref={dom}
      bgGradient={
        colorMode === "light"
          ? `linear(to-b, ${color}.500, ${color}.400, ${color}.300, ${color}.200)`
          : `linear(to-b, ${color}.100, ${color}.300, ${color}.500, ${color}.700)`
      }
      w={225}
      py={6}
      rounded="xl"
      justifyContent="center"
      alignItems="center"
      flexDir="column"
      shadow="lg"
    >
      <Image src={`../images/${image}`} w={175} rounded="full" alt="team" />
      <Text
        fontFamily={"NotoSansCJKkr"}
        fontSize="30"
        mt={2}
        fontWeight="bold"
        color={"c88be0"}
      >
        {name}
      </Text>
      <Text mt={2} fontSize="20" color={"c88be0"}>
        {position}
      </Text>
    </Flex>
  );
};

export default TeamCard;
