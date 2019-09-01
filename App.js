import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const [submit, setSubmit] = useState('Click the button');
  return (
    <View style={styles.container}>
      <Text>{submit}</Text>
      <Button title="Submit" onPress={() => setSubmit('Hello there')}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
