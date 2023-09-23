import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View, ScrollView, FlatList, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Header from './components/header';
import ToDoItem from './components/todoItem';
import AddTodo from './components/addToDo';
import Sandbox from './components/sandbox';


export default function App() {

  const [todos, setTodos] = useState([
    { key: 1, text: "Buy a book" },
    { key: 2, text: "Read a book" },
    { key: 3, text: "Move to other book" }
  ])

  const [text, setText] = useState("")

  const changeHandler = (val) => {
    setText(val)
  }

  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.key != key)
    })
  }

  const submitHandler = (text) => {
    if (text.length > 3) {
      setTodos((prevTodos) => {
        return [
          { key: todos.length + 1, text: text },
          ...prevTodos
        ]
      })
      setText("")
      Keyboard.dismiss()
    } else {
      Alert.alert("Oops", "Todos must be over 3 chars long!", [
        { text: "Understood", onPress: () => console.log("Alert closed") }
      ])
    }
  }

  return (
    <TouchableWithoutFeedback onPress={() =>{
      Keyboard.dismiss()
      console.log("keyboard dismissed")
    }}>
      <View style={styles.container}>
        {/* header */}
        <Header />
        
        <View style={styles.content}>
          <AddTodo submitHandler={submitHandler} text={text} changeHandler={changeHandler} />
          <View style={styles.list}>
            <FlatList
              data={todos}
              renderItem={({ item }) => (
                // <Text style={styles.text}>
                //   {item.text}
                // </Text>
                <ToDoItem item={item} pressHandler={pressHandler} />
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
    // <Sandbox />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 40,
    flex: 1
  },
  list: {
    flex:1,
    marginTop: 20
  }
});
