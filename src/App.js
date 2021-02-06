import React from "react";
import { Route, Switch } from "react-router-dom";

import { Grommet } from "grommet";

import Home from "./pages/Home";
import Calendar from "./pages/Calendar";
import EditNote from "./pages/EditNote";

function App() {
  const theme = {
    global: {
      font: {
        family: "Roboto",
        size: "15px",
        height: "15px",
      },
      input: {
        font: {
          weight: 400,
        },
      },
    },
  };

  return (
    <Grommet theme={theme} full>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/calendar" component={Calendar} />
        <Route exact path="/edit/:createdOn/:id" component={EditNote} />
      </Switch>
    </Grommet>
  );
}

export default App;
