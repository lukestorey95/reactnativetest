import React from "react";
import { StyleSheet, Text, View, Alert } from "react-native";
import { Button } from "react-native-paper";

function UnicornDetail(props) {
  const data = props.route.params.data;

  const deleteData = (data) => {
    const url = `https://crudcrud.com/api/6d79d693c85745609f72b7a44d9a0b8b/unicorns/${data._id}/`;

    fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((data) => {
        props.navigation.navigate("Home");
      })
      .catch((error) => Alert.alert(error.toString()));
  };

  return (
    <View style={styles.viewStyle}>
      <Text style={{ fontSize: 25 }}>{data.name}</Text>
      <Text style={{ fontSize: 20 }}>{data.age}</Text>
      <Text style={{ fontSize: 20 }}>{data.colour}</Text>

      <View style={styles.btnStyle}>
        <Button
          icon="update"
          mode="contained"
          onPress={() => props.navigation.navigate("Edit", { data: data })}
        >
          Edit
        </Button>
        <Button icon="delete" mode="contained" onPress={() => deleteData(data)}>
          Delete
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  viewStyle: {
    margin: 10,
    padding: 10,
  },

  btnStyle: {
    flexDirection: "row",
    justifyContent: "space-around",
    margin: 15,
    padding: 10,
  },
});

export default UnicornDetail;
