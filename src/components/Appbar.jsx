import React from "react";

import { Header, Heading } from "grommet";
import { Menu, User } from "grommet-icons";

const Appbar = (props) => {
  const { toggleSidebar } = props;

  return (
    <Header
      align="center"
      background="accent-4"
      height="xxsmall"
      justify="between"
      pad={{ horizontal: "medium" }}
    >
      <Menu onClick={toggleSidebar} />

      <Heading level="3" margin="none">
        My Notes
      </Heading>

      <User />
    </Header>
  );
};

export default Appbar;
