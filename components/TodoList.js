import React from 'react';
import {StyleSheet, ScrollView, Text} from 'react-native';

const TodoList = () => {
  return (
    <ScrollView contentContainerStyle={styles.listContainer}>
      <Text style={styles.todoTitle}>TodoList</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    alignItems: 'center',
  },
  todoTitle: {
    fontSize: 20,
    marginLeft: 20,
    marginTop: 20,
    fontWeight: '600',
  },
});

export default TodoList
