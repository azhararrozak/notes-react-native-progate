import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import Home from './src/screens/home'
import AddNote from './src/screens/addNote'
import EditNote from './src/screens/editNote'

const CurrentPageWidget = ({ currentPage, noteList, setCurrentPage, getNoteById, addNote, editNote, selectedNoteId, setSelectedNoteId, deleteNote }) => {
  switch (currentPage) {
    case 'home':
      return (
        <Home
          noteList={noteList}
          setCurrentPage={setCurrentPage}
          setSelectedNoteId={setSelectedNoteId}
          deleteNote={deleteNote}
        />
      )
    case 'add':
      return <AddNote setCurrentPage={setCurrentPage} addNote={addNote} />
    case 'edit':
      return <EditNote setCurrentPage={setCurrentPage} editNote={editNote} getNoteById={getNoteById} selectedNoteId={selectedNoteId}/>
    default:
      return <Home />
  }
}

const App = () => {
  const [currentPage, setCurrentPage] = useState('home')
  const [selectedNoteId, setSelectedNoteId] = useState(null);

  const [noteList, setNoteList] = useState([
    {
      id: 1,
      title: 'Note pertama',
      desc:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
    },
  ])

  const addNote = (title, desc) => {
    const id = noteList.length > 0 ? noteList[noteList.length - 1].id + 1 : 1;
    setNoteList([
      ...noteList,
      {
        id,
        title: title,
        desc: desc,
      },
    ]);
  };

  const getNoteById = (id) => {
    return noteList.find((note) => note.id === id);
  }

  const editNote = (id, title, desc) => {
    const newNoteList = noteList.map((note) => {
      if (note.id === id) {
        return {
          id,
          title,
          desc,
        };
      }
      return note;
    });
    setNoteList(newNoteList);
  }

  const deleteNote = (id) => {
    const newNoteList = noteList.filter((note) => note.id !== id);
    setNoteList(newNoteList);
  }

  return (
    <View
      style={styles.container}
    >
      <CurrentPageWidget
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        noteList={noteList}
        addNote={addNote}
        editNote={editNote}
        getNoteById={getNoteById}
        selectedNoteId={selectedNoteId}
        setSelectedNoteId={setSelectedNoteId}
        deleteNote={deleteNote}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#252525',
    height: '100%',
    color: 'white',
  },
})

export default App