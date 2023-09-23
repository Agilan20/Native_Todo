import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View, ScrollView, FlatList, TouchableOpacity, Button } from 'react-native';

export default function AddTodo({ submitHandler, text, changeHandler }) {
    return (
        <View>
            <TextInput
                style={styles.input}
                placeholder='New task...'
                onChangeText={changeHandler}
                value={text}
            />
            <Button onPress={() => submitHandler(text)} title='Add Task' color="coral" />
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: "#ddd"
    }
})