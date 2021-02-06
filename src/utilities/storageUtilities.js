const localStorageKey = "my-notes";

/* Get all the notes from local storage created on specific date or all notes by default */
export const getNotes = (createdOn) => {
  const storedNotes = JSON.parse(localStorage.getItem(localStorageKey));
  if (!!createdOn) {
    return storedNotes?.filter((note) => note.createdOn === createdOn);
  }
  return storedNotes;
};

/* Get the note for the provided noteId */
export const getNote = (noteId) => {
  const storedNotes = getNotes() || [];
  return storedNotes.filter((note) => note.id === noteId)[0];
};

/* Saves the notes to local storage */
const saveNotes = (notes) => {
  localStorage.setItem(localStorageKey, JSON.stringify(notes));
};

/* Save a note to local storage along with existing notes */
export const saveNote = (note) => {
  const storedNotes = getNotes()?.filter((el) => el.id !== note.id) || [];
  storedNotes.unshift(note);
  saveNotes(storedNotes);
};

/* Delete note for the provided noteId */
export const deleteNote = (noteId) => {
  const storedNotes = getNotes();
  const modifiedNotes = storedNotes.filter((note) => note.id !== noteId);
  saveNotes(modifiedNotes);
};

/* Clears all the notes from local storage */
export const clearNotes = () => {
  localStorage.removeItem(localStorageKey);
};
