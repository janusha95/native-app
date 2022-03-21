import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
  FlatList,
} from "react-native";

export default function App() {
  const [goal, setGoal] = useState("");
  const [addGoal, setAddGoal] = useState([]);

  const handleChange = (goal) => {
    setGoal(goal);
  };

  const addChange = () => {
    setAddGoal([...addGoal, { key: Math.random().toString(), value: goal }]);
  };
  return (
    <View style={{ padding: 50 }}>
      <View style={styles.container}>
        <TextInput
          placeholder="Course Goals"
          style={styles.input}
          onChangeText={handleChange}
          value={goal}
        />
        <Button title="ADD" onPress={addChange} />
      </View>
      <FlatList
        data={addGoal}
        renderItem={(itemData) => (
          <View key={goal} style={styles.listItem}>
            <Text>{itemData.item.value}</Text>
          </View>
        )}
      />
      {/* <ScrollView>
        {addGoal.map((goals) => (
          <View key={goal} style={styles.listItem}>
            <Text>{goals}</Text>
          </View>
        ))}
      </ScrollView> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  input: {
    width: "80%",
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
  },
  listItem: {
    padding: 10,
    margin: 10,
    backgroundColor: "#ccc",
    borderColor: "black",
    borderWidth: 1,
  },
});
