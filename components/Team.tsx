import { Box, Flex, Grid, Button } from "@chakra-ui/react";
import { useTranslation } from "next-i18next";
import { FC } from "react";
import TeamCard from "./TeamCard";

// @ name: 팀원 이름, position: 포지션, image: public/images에 있는 이미지 이름, color: color 이름 (모든 색상이 가능하지는 않습니다.)
const teamCardConfig = [
  {
    name: "BABY DUCK",
    position: "DIRECTOR",
    image: "babyduck.png",
    color: "white",
    animation: "tada",
  },
  {
    name: "BHJ",
    position: "COMMUNITY MANAGER",
    image: "bhj.png",
    color: "white",
    animation: "tada",
  },
  {
    name: "SSUN LEE",
    position: "DESIGNER",
    image: "ssunlee.png",
    color: "white",
    animation: "tada",
  },
  {
    name: "MNY",
    position: "DEVELOPER",
    image: "mny.png",
    color: "white",
    animation: "tada",
  },
];

const Team: FC = () => {
  return (
    <Flex alignItems="center" id="Team" flexDir="column" w="100%">
      <Flex mt="100"></Flex>
      <Box
        textAlign="center"
        mb={8}
        fontFamily="NotoSansKR"
        fontSize="4vw"
        fontWeight="bold"
        color="#c88be0"
      >
        TEAM
      </Box>
      <Flex flexWrap={"wrap"} alignContent="center" justifyContent={"center"}>
        {teamCardConfig.map((v, i) => {
          return (
            <TeamCard
              key={i}
              name={v.name}
              position={v.position}
              image={v.image}
              color={v.color}
              animation={v.animation}
            />
          );
        })}
      </Flex>
    </Flex>
  );
};

export default Team;
