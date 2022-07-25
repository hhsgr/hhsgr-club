import { Box, Flex, Grid, Button } from "@chakra-ui/react";
import { useTranslation } from "next-i18next";
import { FC } from "react";
import TeamCard from "./TeamCard";

// @ name: 팀원 이름, position: 포지션, image: public/images에 있는 이미지 이름, color: color 이름 (모든 색상이 가능하지는 않습니다.)
const teamCardConfig = [
  {
    name: "PKD",
    position: "Tech Leader",
    image: "team1.png",
    color: "white",
    animation: "tada",
  },
  {
    name: "BHJ",
    position: "Product Designer",
    image: "team2.png",
    color: "white",
    animation: "tada",
  },
  {
    name: "SSUN LEE",
    position: "Community Manager",
    image: "team3.png",
    color: "white",
    animation: "tada",
  },
  {
    name: "MNY",
    position: "Frontend",
    image: "team4.png",
    color: "white",
    animation: "tada",
  },
];

const Team: FC = () => {
  const { t } = useTranslation("common");

  return (
    <Flex minH="100vh" alignItems="center" id="Team" flexDir="column" w="100%">
      <Flex height="200"></Flex>
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
      <Grid
        templateColumns={[
          "repeat(1, 1fr)",
          "repeat(1, 1fr)",
          "repeat(2, 1fr)",
          "repeat(4, 1fr)",
        ]}
      >
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
      </Grid>
    </Flex>
  );
};

export default Team;
