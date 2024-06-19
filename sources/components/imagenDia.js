import { Image, StyleSheet, Text, View } from "react-native";
import Link from "./link";

export default Cards = ({ Data, onPres }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>{Data.title}</Text>
      <Image style={styles.img} source={{ uri: Data.url }} />
      <Text style={styles.texto}>{Data.date}</Text>
      <Link texto="detalles" onPres={onPres} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    padding: 10,
    borderColor: "grey",
    borderWidth: 2,
    borderRadius: 10,
  },
  img: {
    alignSelf: "center",
    width: 270,
    height: 200,
    borderRadius: 10,
  },
  texto: {
    paddingVertical: 5,
    color: "white",
  },
});