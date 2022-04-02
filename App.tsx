import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [data, setData] = useState('No data');

  const handlePress = () => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => setData(JSON.stringify(json)))
  }

  return (
    <View style={styles.container}>
      <Text>{data}</Text>
      <Button
        onPress={handlePress}
        title="Load from api"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7d7d7d',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
