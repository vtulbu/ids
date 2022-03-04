import type { NextPage } from "next";
import NavBar from "../components/NavBar";
import IDSMessage from "../components/IDSMessageSection";

const Home: NextPage = () => {
  return (
    <>
      <NavBar />
      <IDSMessage />
    </>
  );
};

export default Home;
