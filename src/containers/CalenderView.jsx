import React, { useState } from "react";

import { Calendar, Main, ResponsiveContext } from "grommet";
import Notes from "../components/Notes";

import { getDate } from "../utilities/dateUtilities";

const CalendarView = () => {
  const [creationDate, setCreationDate] = useState(getDate());

  const dateHandler = (date) => {
    setCreationDate(getDate(date));
  };

  return (
    <ResponsiveContext.Consumer>
      {(size) => (
        <Main
          flex
          direction={size === "small" ? "column" : "row"}
          align={size === "small" ? "center" : "stretch"}
          justify="evenly"
        >
          <Calendar
            date={creationDate}
            daysOfWeek
            margin="small"
            onSelect={(date) => dateHandler(date)}
            size="small"
          />

          <Notes createdOn={creationDate} />
        </Main>
      )}
    </ResponsiveContext.Consumer>
  );
};

export default CalendarView;
