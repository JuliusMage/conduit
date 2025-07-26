import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
// Placeholder for map component, e.g. react-native-maps MapView
export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>K'Route</Text>
      <TextInput placeholder="Where to?" style={styles.input} />
      {/* Map component would be placed here */}
      <Text>Map view placeholder</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  title: { fontSize: 24, fontWeight: 'bold', marginVertical: 16, textAlign: 'center' },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 8,
    marginBottom: 16,
  },
});
