import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Home from "./Screens/Home";
import Constants from "expo-constants";
// import ClassA from "./Screens/ClassA";
import Create from "./Screens/Create";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import UnicornDetail from "./Screens/UnicornDetail";
import UnicornEdit from "./Screens/UnicornEdit";

const Stack = createNativeStackNavigator();

const myStyles = {
  title: "Unicorn List",
  headerTintColor: "white",
  headerStyle: {
    backgroundColor: "blue",
  },
};

function App() {
  return (
    <View style={styles.container}>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={myStyles} />
        <Stack.Screen
          name="Create"
          component={Create}
          options={{ ...myStyles, title: "New Unicorn " }}
        />
        <Stack.Screen
          name="Detail"
          component={UnicornDetail}
          options={{ ...myStyles, title: "Unicorn Details" }}
        />
        <Stack.Screen
          name="Edit"
          component={UnicornEdit}
          options={{ ...myStyles, title: "Edit Unicorn" }}
        />
      </Stack.Navigator>
    </View>
  );
}

export default () => {
  return (
    <NavigationContainer>
      <App />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#efff",
    marginTop: Constants.statusBarHeight,
  },
});
