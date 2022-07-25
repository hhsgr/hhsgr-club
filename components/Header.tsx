import { FC } from "react";
import { useRouter } from "next/router";
import {
  Box,
  Button,
  color,
  Flex,
  Image,
  useColorMode,
} from "@chakra-ui/react";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";
import { FaDiscord, FaInstagram, FaTwitter } from "react-icons/fa";
import { IoMoon, IoSunny } from "react-icons/io5";

// @ 로고 이미지는 public/images를 교체하시면 됩니다. URL은 우리 프로젝트의 URL을 작성하시면 됩니다.
const logoImage = "logo.png";
const openseaURL = "https://testnets.opensea.io/collection/projectlion-nft";
const discordURL = "https://discord.gg/5MPRtfrr";
const kakaoURL = "https://open.kakao.com/o/gtjsAJre";
const twitterURL =
  "https://twitter.com/HHSGR_TWC?s=20&t=qRlCtchfgiKO5Z_FCsAgGA";
// const instagramURL = "https://www.instagram.com/projectlion.io/";

const Header: FC = () => {
  const scrollLink = ["Story", "Roadmap", "Benefits", "Team"];

  const router = useRouter();

  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex
      position="fixed"
      w="100%"
      top="0"
      justifyContent="space-around"
      alignItems="center"
      px={0}
      shadow="md"
      zIndex={1}
      flexDir={["column", "column", "row"]}
      bgColor="#d9b5fd"
      opacity={"80%"}
      // height={79}
    >
      <Box fontWeight="bold" fontSize="lg" cursor="pointer">
        <Link href="/">
          <Image src={`../images/${logoImage}`} alt="LOGO" padding="1" />
        </Link>
      </Box>
      <Flex alignItems="center">
        <Box>
          {scrollLink.map((v, i) => {
            return (
              <ScrollLink key={i} to={v} spy={true} smooth={true}>
                <Button
                  variant="ghost"
                  mx={[0, 0, 8]}
                  size={["xs", "sm", "md"]}
                  color="#fff"
                >
                  {v}
                </Button>
              </ScrollLink>
            );
          })}
        </Box>
        <Flex
          alignItems="center"
          my={[4, 4, 0]}
          flexDir={["column", "row", "row"]}
        >
          <Link href={openseaURL}>
            <Button variant="ghost" size={["xs", "xs", "sm"]}>
              <Image src="../images/opensea.png" alt="opensea" w={6} />
            </Button>
          </Link>
          <Link href={discordURL}>
            <Button variant="ghost" size={["xs", "xs", "sm"]}>
              <FaDiscord size={24} />
            </Button>
          </Link>
          <Link href={kakaoURL}>
            <Button variant="ghost" size={["xs", "xs", "sm"]}>
              <Image src="../images/kakao.png" alt="kakaotalk" w={6} />
            </Button>
          </Link>
          <Link href={twitterURL}>
            <Button variant="ghost" size={["xs", "xs", "sm"]}>
              <FaTwitter size={24} />
            </Button>
          </Link>
          {/* <Link href={instagramURL}>
            <Button variant="ghost" size={["xs", "xs", "sm"]}>
              <FaInstagram size={24} />
            </Button>
          </Link> */}
          {/* <Box onClick={toggleColorMode}>
          {colorMode === "light" ? (
            <Button variant="ghost" size={["xs", "xs", "sm"]}>
              <IoMoon size={24} />
            </Button>
          ) : (
            <Button variant="ghost" size={["xs", "xs", "sm"]}>
              <IoSunny size={24} />
            </Button>
          )}
        </Box>
        <Box>
          <Link
            href={router.asPath}
            locale={router.locale === "en" ? "ko" : "en"}
          >
            <Button variant="ghost" size={["xs", "xs", "sm"]}>
              {router.locale === "en" ? "EN" : "KO"}
            </Button>
          </Link>
        </Box> */}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Header;
