/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import ToDoList from './components/ToDoList';

const App = () => {
  const [tasks, setTasks] = useState(['Do laundry', 'Go to gym', 'Walk dog']);

  return (
    <View style={styles.container}>
      <ToDoList tasks={tasks} />
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
