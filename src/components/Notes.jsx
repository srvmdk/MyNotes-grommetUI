import React from "react";

import { Box, Grid } from "grommet";

import AddNoteCard from "./AddNoteCard";
import NoteCard from "../components/NoteCard";

import { getNotes } from "../utilities/storageUtilities";

const Notes = (props) => {
  const { createdOn } = props;

  const savedNotes = getNotes(createdOn);
  
  return (
    <Box align="center" fill overflow={{ vertical: "scroll" }} pad="small">
      <Grid
        alignContent="center"
        columns="small"
        rows="small"
        gap="medium"
        margin="small"
        fill="horizontal"
      >
        <AddNoteCard createdOn={createdOn} />

        {!!savedNotes &&
          !!savedNotes.length &&
          savedNotes.map((note) => <NoteCard key={note.id} {...note} />)}
      </Grid>
    </Box>
  );
};

export default Notes;
