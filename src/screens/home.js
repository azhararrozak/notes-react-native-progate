import React from 'react'
import { FlatList, StyleSheet, View, Text } from 'react-native'
import CustomButton from '../components/customButton'

const NoteCard = ({ item, setCurrentPage, setSelectedNoteId, deleteNote }) => (
  <View style={styles.card}>
    <Text style={styles.cardTitle}>{item.title}</Text>
    <Text style={styles.cardContent}>{item.desc}</Text>
    <View style={styles.buttons}>
      <CustomButton
        backgroundColor="#FFC300"
        color="#151D3B"
        text="Ubah"
        fontSize={12}
        width={100}
        onPress={() => {
            setSelectedNoteId(item.id);
            setCurrentPage('edit')
          }}
      />
      <CustomButton
        backgroundColor="#D82148"
        color="#fff"
        text="Hapus"
        fontSize={12}
        width={100}
        //deletewithid
        onPress={() => {
          deleteNote(item.id)
        }}
      />
    </View>
  </View>
)

const Home = ({ noteList, setCurrentPage, setSelectedNoteId, deleteNote }) => (
  <View style={styles.container}>
    <Text style={styles.homeTitle}>All notes</Text>
    <Text style={styles.notesLength}>{noteList.length} notes</Text>
    <FlatList
      showsVerticalScrollIndicator={false}
      data={noteList}
      renderItem={({ item }) => (
        <NoteCard 
        item={item} 
        setCurrentPage={setCurrentPage}
        setSelectedNoteId={setSelectedNoteId}
        deleteNote={deleteNote}
        />
      )}
      keyExtractor={(item) => item.id}
    />
    <CustomButton
      backgroundColor="#DDD"
      color="#203239"
      text="Tambahkan Note"
      width="100%"
      onPress={() => {
        setCurrentPage('add')
      }}
    />
  </View>
)

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 20,
    paddingVertical: 40,
    color: 'white',
  },
  homeTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#FEFEFE',
  },
  notesLength: {
    marginTop: 10,
    marginBottom: 20,
    color: '#FEFEFE',
    fontSize: 16,
  },
  card: {
    padding: 20,
    marginVertical: 15,
    backgroundColor: '#323232',
    borderRadius: 10,
  },
  cardTitle: {
    fontWeight: '600',
    fontSize: 16,
    marginBottom: 5,
    color: 'white',
  },
  cardContent: {
    color: 'white',
    textAlign: 'justify',
  },
  buttons: {
    marginTop: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
})

export default Home