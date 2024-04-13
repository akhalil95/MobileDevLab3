import React, {useState} from 'react';
import {Button} from 'react-native';
import ToDoList from '../components/ToDoList';
import ToDoForm from '../components/ToDoForm';
import MainLayout from '../layouts/MainLayout';

function HomeScreen({navigation}) {
  const [tasks, setTasks] = useState(['Do laundry', 'Go to gym', 'Walk dog']);

  const handleAddTask = task => {
    setTasks([...tasks, task]);
  };

  return (
    <MainLayout>
      <ToDoList tasks={tasks} />
      <ToDoForm addTask={handleAddTask} />
      <Button
        title="Go to About"
        onPress={() => navigation.navigate('About')}
      />
      <Button
        title="See Random Cat"
        onPress={() => navigation.navigate('RandomCat')}
      />
    </MainLayout>
  );
}

export default HomeScreen;
