import Footer from "@components/Footer";
import Story from "@components/Story";
import Roadmap from "@components/Roadmap";
import Team from "@components/Team";
import Benefits from "@components/Benefits";
import Partner from "@components/Partner";
import type { NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Title from "@components/Title";

const Home: NextPage = () => {
  return (
    <>
      <Title />
      <Story />
      <Roadmap />
      <Benefits />
      <Team />
      <Partner />
      <Footer />
    </>
  );
};

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});

export default Home;
