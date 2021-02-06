import React from "react";
import { withRouter } from "react-router-dom";

import { Box, Card, CardBody, CardHeader, Heading, Text } from "grommet";
import { Trash } from "grommet-icons";

import { previewContent } from "../utilities/contentUtilities";
import { getDateFormatted } from "../utilities/dateUtilities";
import { deleteNote } from "../utilities/storageUtilities";

const NoteCard = (props) => {
  const { id, title, content, createdOn } = props;

  const editHandler = () => {
    props.history.push(`/edit/${createdOn}/${id}`);
  };

  const deleteHandler = (evt) => {
    evt.stopPropagation();
    deleteNote(id);
    alert("Note deleted !!!");
    props.history.push("/");
  };

  return (
    <Card background="dark-6" onClick={editHandler}>
      <CardHeader
        align="start"
        background="accent-4"
        direction="column"
        gap="none"
        pad={{ horizontal: "small", vertical: "xsmall" }}
      >
        <Box fill align="center" direction="row" justify="between">
          <Box flex pad={{ right: "small" }}>
            <Heading truncate level="6" margin="none">
              {title}
            </Heading>
            <Text margin="none" size="10px">
              {getDateFormatted(createdOn)}
            </Text>
          </Box>

          <Trash size="small" value="trash" onClick={deleteHandler} />
        </Box>
      </CardHeader>

      <CardBody background="light-3" pad="small">
        <Text size="13px">{previewContent(content)}</Text>
      </CardBody>
    </Card>
  );
};

export default withRouter(NoteCard);
