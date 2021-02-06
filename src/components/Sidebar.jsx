import React from "react";
import { withRouter } from "react-router-dom";

import { Box, Collapsible, Text } from "grommet";
import { Home, ClearOption, Schedule } from "grommet-icons";

import { clearNotes } from "../utilities/storageUtilities";

const Sidebar = (props) => {
  const { openSidebar } = props;

  const handleClear = () => {
    clearNotes();
    props.history.push("/");
    alert("Notes cleared!!!");
  };

  return (
    <Collapsible direction="horizontal" open={openSidebar}>
      <Box
        align="center"
        justify="evenly"
        background="accent-4"
        height="medium"
        margin={{ horizontal: "small" }}
        round="medium"
        width="xxsmall"
      >
        <Box
          align="center"
          hoverIndicator="background"
          onClick={() => props.history.push("/")}
          width="small"
        >
          <Home size="medium" />
          <Text size="10px">Home</Text>
        </Box>

        <Box
          align="center"
          hoverIndicator
          onClick={() => props.history.push("/calendar")}
          width="small"
        >
          <Schedule size="medium" />
          <Text size="10px">Calendar</Text>
        </Box>

        <Box
          align="center"
          hoverIndicator="background"
          onClick={handleClear}
          width="small"
        >
          <ClearOption size="medium" />
          <Text size="10px">Clear All</Text>
        </Box>
      </Box>
    </Collapsible>
  );
};

export default withRouter(Sidebar);
