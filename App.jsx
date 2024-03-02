/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import ToDoList from './components/ToDoList';
import ToDoForm from './components/ToDoForm';

const App = () => {
  const [tasks] = useState(['Do laundry', 'Go to gym', 'Walk dog']);

  return (
    <View style={styles.container}>
      <ToDoList tasks={tasks} />
      <ToDoForm />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
