import type { NextPage } from 'next';

import { Header } from '../components/Header';
import IDSMessage from '../components/IDSMessageSection';

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <IDSMessage />
    </>
  );
};

export default Home;
