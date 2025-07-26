import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
// Placeholder for map component, e.g. react-native-maps MapView
export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>K'Route</Text>
      {/* Map component would be placed here */}
      <Text>Map view placeholder</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 16 },
});
