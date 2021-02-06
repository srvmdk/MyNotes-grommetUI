import React from "react";
import { withRouter } from "react-router-dom";

import { Card, CardBody, Heading, Text } from "grommet";
import { AddCircle } from "grommet-icons";

import { v4 as uuid } from "uuid";

import { getDate } from "../utilities/dateUtilities";

const AddNoteCard = (props) => {
  const { createdOn } = props;

  return (
    <Card
      background="light-3"
      onClick={() =>
        props.history.push(
          `/edit/${!!createdOn ? createdOn : getDate()}/${uuid()}`
        )
      }
    >
      <CardBody align="center" justify="center">
        <AddCircle color="dark-6" size="xlarge" />

        <Text color="dark-6">
          <Heading level="4" margin="none">
            Add Note
          </Heading>
        </Text>
      </CardBody>
    </Card>
  );
};

export default withRouter(AddNoteCard);
