import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import NotesList from "./components/NotesList";
import Search from "./components/Search";
import Header from "./components/Header";


const App = () => {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "This is my first note!",
      date: "10/22/2022"
    },
    {
      id: nanoid(),
      text: "This is my second note!",
      date: "10/22/2022"
    },
    {
      id: nanoid(),
      text: "This is my third note!",
      date: "10/22/2022"
    },

  ]);

  const [searchText, setSearchText] = useState("");

  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedNotes = JSON.parse(
      localStorage.getItem("notes-react-app-data")
    );
    const savedMode = JSON.parse(
      localStorage.getItem("notes-react-app-dark-mode")
    );

    if (savedMode == true) {
      setDarkMode(true);
    }

    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("notes-react-app-data", JSON.stringify(notes)
    );
    localStorage.setItem("notes-react-app-dark-mode", JSON.stringify(darkMode)
    );
  }, [notes, darkMode]);

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    };

    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id)
    setNotes(newNotes);
  };

  return (
    <div id="dark-mode-container" className={`${darkMode && "dark-mode"} fade`}>
      <div className="container">
        <Header
          darkMode={darkMode}
          handleToggleDarkMode={setDarkMode}
        />
        <Search handleSearchNote={setSearchText} />
        <NotesList
          notes={notes.filter((note) =>
            note.text.toLowerCase().includes(searchText))}
          handleAddNote={addNote}
          handleDeleteNote={deleteNote}
        />
      </div>
    </div>
  );
};

export default App;