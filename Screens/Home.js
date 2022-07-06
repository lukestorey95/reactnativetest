import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { Card, FAB } from "react-native-paper";

function Home(props) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const renderData = (item) => {
    return (
      <Card
        style={styles.cardStyle}
        key={item._id}
        onPress={() => clickedItem(item)}
      >
        <Text style={{ fontSize: 20 }}>{item.name}</Text>
      </Card>
    );
  };

  const loadData = () => {
    fetch("https://crudcrud.com/api/6d79d693c85745609f72b7a44d9a0b8b/unicorns")
      .then((response) => response.json())
      .then((json) => {
        setData(json);
        setLoading(false);
      })
      .catch((error) => Alert.alert(error.toString()));
  };

  useEffect(() => {
    loadData();
  }, [props]);

  const clickedItem = (data) => {
    props.navigation.navigate("Detail", { data: data });
  };

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={data}
        renderItem={({ item }) => {
          return renderData(item);
        }}
        onRefresh={() => loadData()}
        refreshing={loading}
        keyExtractor={(item) => `${item._id}`}
      />

      <FAB
        style={styles.fab}
        small={false}
        icon="plus"
        onPress={() => props.navigation.navigate("Create")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  cardStyle: {
    padding: 10,
    margin: 10,
  },

  fab: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 0,
    backgroundColor: "blue",
  },
});

export default Home;
