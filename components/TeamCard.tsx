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
  return (
    <Flex
      m={[8, 8, 8, 4]}
      // className={`${isAnimated && "animate__animated animate__" + animation}`}
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
        fontSize="2xl"
        mt={2}
        fontWeight="bold"
        textColor="c88be0"
      >
        {name}
      </Text>
      <Text mt={2} fontSize="lg" textColor="c88be0">
        {position}
      </Text>
    </Flex>
  );
};

export default TeamCard;
