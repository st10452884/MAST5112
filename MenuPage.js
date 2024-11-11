import React, { useState } from 'react';
import { View, Text, FlatList, Image, StyleSheet, Button } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

export default function MenuPage({ navigation }) {
  const [courses, setCourses] = useState([
    { id: '1', name: 'Starters', image: require('../assets/starters.png') },
    { id: '2', name: 'Main Course', image: require('../assets/main.png') },
    { id: '3', name: 'Desserts', image: require('../assets/dessert.png') },
    { id: '4', name: 'Drinks', image: require('../assets/drinks.png') },
  ]);

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: 'Add Dish', value: 'add' },
    { label: 'Remove Dish', value: 'remove' },
  ]);

  return (
    <View style={styles.container}>
      <FlatList
        data={courses}
        keyExtractor={(item) => item.id}
        numColumns={4}
        renderItem={({ item }) => (
          <View style={styles.course}>
            <Image source={item.image} style={styles.courseImage} />
            <Text>{item.name}</Text>
          </View>
        )}
      />
      <DropDownPicker
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        onChangeValue={(value) => {
          if (value === 'add') navigation.navigate('AddDish');
          if (value === 'remove') navigation.navigate('RemoveDish');
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10 },
  course: { flex: 1, alignItems: 'center', margin: 10 },
  courseImage: { width: 70, height: 70, marginBottom: 5 },
});
