import { Box, Button, Flex, Image, Text, useColorMode } from "@chakra-ui/react";
import axios from "axios";
import { MINT_NFT_ADDRESS } from "caverConfig";
import { useCaver } from "hooks";
import { NextPage } from "next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useState } from "react";
import { FaDiscord } from "react-icons/fa";

const Minting: NextPage = () => {
  const [account, setAccount] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [newNFT, setNewNFT] = useState<any>(undefined);

  const { caver, mintNFTContract } = useCaver();

  const { colorMode } = useColorMode();

  const onClickKaikas = async () => {
    try {
      const accounts = await window.klaytn.enable();

      setAccount(accounts[0]);
    } catch (error) {
      console.error(error);
    }
  };

  const onClickMint = async () => {
    try {
      // const response = await mintNFTContract?.methods.mintNFT().send({
      //   from: account,
      //   value: caver?.utils.convertToPeb(2, "KLAY"),
      //   gas: 3000000,
      // });

      setIsLoading(true);

      const response = await caver?.klay.sendTransaction({
        type: "SMART_CONTRACT_EXECUTION",
        from: account,
        to: MINT_NFT_ADDRESS,
        value: caver.utils.toPeb("300", "KLAY"),
        gas: 3000000,
        data: mintNFTContract?.methods.mintNFT().encodeABI(),
      });

      if (response?.status) {
        const balanceOf = await mintNFTContract?.methods
          .balanceOf(account)
          .call();

        if (balanceOf) {
          const myNewNFT = await mintNFTContract?.methods
            .tokenOfOwnerByIndex(account, balanceOf - 1)
            .call();

          if (myNewNFT) {
            const tokenURI = await mintNFTContract?.methods
              .tokenURI(myNewNFT)
              .call();

            if (tokenURI) {
              const imageResponse = await axios.get(tokenURI);

              if (imageResponse.status === 200) {
                setNewNFT(imageResponse.data);
              }
            }
          }
        }
      }

      setIsLoading(false);
    } catch (error) {
      console.error(error);

      setIsLoading(false);
    }
  };

  return (
    <Flex justifyContent="center" alignItems="center" flexDir="column">
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
      <Flex justifyContent="center" alignItems="center">
        <Flex bgColor={"#8f3bff"}>
          <Image src={`../images/minting_page.png`} />
        </Flex>
      </Flex>
      <Flex mt="10">
        <Flex mr="10">
          {account === "" ? (
            <Button onClick={onClickKaikas} size="lg" colorScheme="orange">
              <Image
                src={
                  colorMode === "light"
                    ? "../images/kaikas-white.png"
                    : "../images/kaikas.png"
                }
                w={8}
                mr={2}
                alt="kaikas"
              />
              Connect to Kaikas
            </Button>
          ) : (
            <Flex>
              <Button fontSize="2xl" colorScheme="orange" variant="ghost">
                Account - {account}
              </Button>
              <Button onClick={() => setAccount("")} colorScheme="orange">
                Disconnect
              </Button>
            </Flex>
          )}
        </Flex>
        <Flex>
          <Button
            size="lg"
            colorScheme="green"
            onClick={onClickMint}
            disabled={account === "" || isLoading}
            isLoading={isLoading}
            loadingText="Loading ..."
          >
            Mint Now !
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});

export default Minting;
