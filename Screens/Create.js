import React, { useState } from "react";
import { StyleSheet, Text, View, Alert } from "react-native";
import { TextInput, Button } from "react-native-paper";

function Create(props) {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [colour, setColour] = useState("");

  const createUnicorn = () => {
    const url = `https://crudcrud.com/api/6d79d693c85745609f72b7a44d9a0b8b/unicorns/`;

    const unicorn = {
      name: name,
      age: age,
      colour: colour,
    };

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(unicorn),
    })
      .then((response) => {
        JSON.stringify(response);
      })
      .then((data) => {
        props.navigation.navigate("Home", { data: data });
      })
      .catch((error) => Alert.alert(error.toString()));
  };

  return (
    <View>
      <TextInput
        style={styles.inputStyle}
        label="Name"
        value={name}
        mode="outlined"
        onChangeText={(text) => setName(text)}
      />
      <TextInput
        style={styles.inputStyle}
        label="Age"
        value={age}
        mode="outlined"
        keyboardType="numeric"
        onChangeText={(text) => setAge(text)}
      />
      <TextInput
        style={styles.inputStyle}
        label="Colour"
        value={colour}
        mode="outlined"
        onChangeText={(text) => setColour(text)}
      />
      <Button
        style={styles.inputStyle}
        icon="pencil"
        mode="contained"
        onPress={() => createUnicorn()}
      >
        Add Unicorn
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  inputStyle: {
    padding: 10,
    margin: 20,
  },
});

export default Create;
