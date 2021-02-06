import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";

import { Box, Button, Text, TextArea, TextInput } from "grommet";
import { Save } from "grommet-icons";

import PageWrapper from "../hoc/PageWrapper";

import { getDateFormatted } from "../utilities/dateUtilities";
import { getNote, saveNote } from "../utilities/storageUtilities";

const EditNote = (props) => {
  const { id, createdOn } = props.match.params;

  const [note, setNote] = useState({
    id,
    title: "",
    content: "",
    createdOn,
  });

  useEffect(() => {
    const savedNote = getNote(id);

    if (savedNote) {
      setNote(savedNote);
    }
  }, [id]);

  const changeHandler = (evt) => {
    const { name, value } = evt.target;
    setNote((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const saveHandler = () => {
    if (!note.title || !note.content) {
      alert("Error: Unable to save.\nTitle or Content missing!!!");
      return;
    }
    saveNote(note);
    props.history.goBack();
  };

  return (
    <PageWrapper>
      <Box pad="medium" fill>
        <Text
          color="dark-6"
          margin={{ bottom: "small" }}
          size="xsmall"
          textAlign="end"
        >
          {`Created on: ${getDateFormatted(note.createdOn)}`}
        </Text>

        <Box align="center" height="medium">
          <TextInput
            placeholder="Type note title"
            name="title"
            value={note.title || ""}
            onChange={changeHandler}
          />

          <Box fill margin={{ vertical: "medium" }}>
            <TextArea
              fill
              placeholder="Type note content"
              name="content"
              resize="vertical"
              value={note.content || ""}
              onChange={changeHandler}
              font="small"
            />
          </Box>

          <Button
            color="accent-4"
            icon={<Save />}
            label="Save"
            onClick={saveHandler}
            primary
          />
        </Box>
      </Box>
    </PageWrapper>
  );
};

export default withRouter(EditNote);
