import React, { useState } from "react";

import { Box } from "grommet";

import Appbar from "../components/Appbar";
import Sidebar from "../components/Sidebar";

const PageWrapper = (props) => {
  const [openSidebar, setOpenSidebar] = useState(true);

  const toggleSidebar = () => {
    setOpenSidebar(!openSidebar);
  };

  return (
    <Box fill background="light-1">
      <Appbar toggleSidebar={toggleSidebar} />

      <Box flex direction="row" align="center">
        <Sidebar openSidebar={openSidebar} />
        {props.children}
      </Box>
    </Box>
  );
};

export default PageWrapper;
