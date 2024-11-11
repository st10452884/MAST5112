import React, { useState } from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';

export default function RemoveDishPage({ navigation }) {
  const [dishes, setDishes] = useState([
    { id: '1', name: 'Spaghetti' },
    { id: '2', name: 'Ice Cream' },
  ]);

  const removeDish = (id) => setDishes(dishes.filter((dish) => dish.id !== id));

  return (
    <View style={styles.container}>
      <FlatList
        data={dishes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.dish}>
            <Text>{item.name}</Text>
            <Button title="Remove" onPress={() => removeDish(item.id)} />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10 },
  dish: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 },
});
