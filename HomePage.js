import React, { useState } from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';

export default function HomePage({ navigation }) {
  const [dishCount, setDishCount] = useState(0);

  return (
    <View style={styles.container}>
      <Image source={require('../assets/logo.png')} style={styles.logo} />
      <Text style={styles.title}>Welcome to Food App!</Text>
      <Text style={styles.subtitle}>Average dishes: {dishCount}</Text>
      <Button title="Get Started" onPress={() => navigation.navigate('Menu')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  logo: { width: 150, height: 150, marginBottom: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  subtitle: { fontSize: 16, marginBottom: 20 },
});
