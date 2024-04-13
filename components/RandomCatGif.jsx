import React, {useEffect, useState} from 'react';
import {View, Image, Button, StyleSheet, Text} from 'react-native';

const RandomCatGif = () => {
  const [catGifUrl, setCatGifUrl] = useState('');

  const fetchCatGif = async () => {
    try {
      setCatGifUrl('https://cataas.com/cat/gif?' + new Date().getTime());
    } catch (error) {
      console.error('Error fetching cat GIF:', error);
    }
  };

  useEffect(() => {
    fetchCatGif();
  }, []);

  return (
    <View style={styles.container}>
      {catGifUrl ? (
        <Image
          source={{uri: catGifUrl}}
          style={styles.image}
          resizeMode="contain"
        />
      ) : (
        <Text>Loading...</Text>
      )}
      <Button title="Get New Cat Gif" onPress={fetchCatGif} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  image: {
    width: 300,
    height: 300,
    marginVertical: 20,
  },
});

export default RandomCatGif;
