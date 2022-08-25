import { Button, Typography } from "@mui/material";
import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Betaspec</title>
        <meta
          name="description"
          content="Next generation test tracking and test case recording tool"
        />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <Typography variant="h1">Hello world</Typography>
      <Button variant="contained" color="primary">
        Click
      </Button>
    </div>
  );
};

export default Home;
