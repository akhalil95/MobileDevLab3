import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import RandomCatGif from '../components/RandomCatGif';
import MainLayout from '../layouts/MainLayout';

const RandomCatScreen = () => {
  return (
    <MainLayout>
      <View style={styles.container}>
        <Text style={styles.title}>Enjoy a Random Cat Gif!</Text>
        <RandomCatGif />
      </View>
    </MainLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    margin: 20,
  },
});

export default RandomCatScreen;
