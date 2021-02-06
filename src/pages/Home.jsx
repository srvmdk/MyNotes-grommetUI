import React from "react";

import Notes from "../components/Notes";

import PageWrapper from "../hoc/PageWrapper";

const Home = () => {
  return (
    <PageWrapper>
      <Notes />
    </PageWrapper>
  );
};

export default Home;
