import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export class ClassA extends Component {
  state = {
    name: "class name",
  };

  render() {
    return (
      <View>
        <Text>{this.state.name}</Text>
        <Button
          title="click me"
          onPress={() => this.setState({ name: "changed the class name" })}
        />
      </View>
    );
  }
}

export default ClassA;
