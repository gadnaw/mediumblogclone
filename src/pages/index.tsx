import { type NextPage } from "next";
import Head from "next/head";

import Header from "../../components/Header";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Medium Blog Clone 2.0</title>
        <meta name="description" content="Medium Clone 2.0 by Sonny Sangha" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="sm:inline-flex">
        <h1 className="text-5xl">hello tailwind</h1>
        <h1 className="">hello tailwind</h1>
        <h1 className="">hello tailwind</h1>
      </div>
      <Header />
    </>
  );
};

export default Home;
