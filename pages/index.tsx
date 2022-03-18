import type { NextPage } from "next";

import { Header } from "@/components/Header";
import { Main } from "@/components/Main";
import { Footer } from "@/components/Footer";
import { PageHead } from "@/components/PageHead";
import { About } from "@/components/AboutSection";
import { MessageSection } from "@/components/MessageSection";
import { DropdownDescription } from "@/components/DropdownDescription";
import { TheIdsSection } from "@/components/TheIdsSection";
import { PodcastSection } from "@/components/PodcastContainer";
import { SpaceSection } from "@/components/SpaceSection";
import { JourneySection } from "@/components/JourneySection";

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <Main>
        <PageHead />
        <About />
        <MessageSection />
        <DropdownDescription />
        <JourneySection />
        <SpaceSection />
        <TheIdsSection />
        <PodcastSection />
      </Main>
      <Footer />
    </>
  );
};

export default Home;
