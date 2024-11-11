import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function AddDishPage({ navigation }) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [course, setCourse] = useState('');

  const saveDish = () => {
    console.log({ name, description, price, course });
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text>Dish Name</Text>
      <TextInput style={styles.input} value={name} onChangeText={setName} />
      <Text>Description</Text>
      <TextInput style={styles.input} value={description} onChangeText={setDescription} />
      <Text>Price</Text>
      <TextInput style={styles.input} value={price} onChangeText={setPrice} />
      <Text>Course</Text>
      <TextInput style={styles.input} value={course} onChangeText={setCourse} />
      <Button title="Save Dish" onPress={saveDish} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10 },
  input: { borderWidth: 1, marginBottom: 10, padding: 5 },
});
