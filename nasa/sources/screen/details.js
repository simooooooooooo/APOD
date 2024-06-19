import React, { useState, useEffect } from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import Layout from "./layout";
import { useRoute } from "@react-navigation/native";
import translate from "translate";


const DetalleVista = ({ navigation }) => {
  const {
    params: { url, title, desc, date },
  } = useRoute();

  const [descripcionTraducida, setDescripcionTraducida] = useState("");

  useEffect(() => {
    const traducirDescripcion = async () => {
      try {
        const textoTraducido = await translate(desc, { from: "en", to: "es" });
        setDescripcionTraducida(textoTraducido); 
      } catch (error) {
        console.error("Error al traducir la descripción:", error);
      }
    };

    traducirDescripcion();
  }, [desc]);

  return (
    <Layout>
      <Text style={styles.titulo}>{title}</Text>
      <Text style={styles.fecha}>{date}</Text>
      <View style={styles.imagenConainer}>
        <Image
          source={{
            uri: url,
          }}
          style={styles.img}
        />
      </View>
      <ScrollView style={styles.scroll}>
        <View style={styles.descripcionContainer}>
          <Text style={styles.descripcion}>{descripcionTraducida}</Text>
        </View>
      </ScrollView>
    </Layout>
  );
};

const styles = StyleSheet.create({
  titulo: {
    fontSize: 22,
    textAlign: "center",
    fontWeight: "bold",
    color: "white",
    padding: 8,
  },
  fecha: {
    color: "white",
    textAlign: "center",
  },
  img: {
    width: "100%",
    height: "100%",
    padding: 20,
    borderRadius: 15,
    marginVertical: 5,
  },
  descripcion: {
    color: "white",
    fontSize: 15,
    textAlign: "justify",
  },
  descripcionContainer: {
    paddingTop: 15,
    height: "100%",
  },
  imagenConainer: {
    height: 350,
  },
  scroll: {
    marginVertical: 10,
    height: "100%",
  },
});

export default DetalleVista;
