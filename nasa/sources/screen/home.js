import React, { useEffect, useState } from "react";
import Layout from "./layout";
import Header from "../components/header";
import Cards from "../components/imagenDia";
import fech from "../utility/fech";
import { format, sub } from "date-fns";
import { FlatList, View } from "react-native";
import ImagenesDiasView from "../components/imagenesDias";
import Textwhite from "../components/textwhite";
import { ActivityIndicator, MD2Colors } from "react-native-paper";


export default Home = ({ navigation }) => {
  const [imagenDia, setImagenDia] = useState({});
  const [imagenesDias, setImagenesDias] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

 

  useEffect(() => {
    const cargarimagen = async () => {
      try {
        const res = await fech("");
        res.explanation = await translateText(res.explanation);
        setImagenDia(res);
      } catch (er) {
        console.log(er);
      }
    };

    const cargarUltimasImagenes = async () => {
      try {
        const date = new Date();
        const fechaActual = format(date, "yyyy-MM-dd");
        const fechaSieteDiasAtras = format(sub(date, { days: 6 }), "yyyy-MM-dd");

        const ultimas7ImagenesResponse = await fech(`&start_date=${fechaSieteDiasAtras}&end_date=${fechaActual}`);
        for (let img of ultimas7ImagenesResponse) {
          img.explanation = await translateText(img.explanation);
        }
        setImagenesDias(ultimas7ImagenesResponse);
      } catch (er) {
        console.error(er);
      } finally {
        setIsLoading(false);
      }
    };

    cargarimagen().catch(null);
    cargarUltimasImagenes().catch(null);
  }, []);

  const handleDetalles = (objetoimagen) => {
    navigation.navigate("Detalles", {
      title: objetoimagen.title,
      url: objetoimagen.url,
      desc: objetoimagen.explanation,
      date: objetoimagen.date,
    });
  };

  return (
    <Layout>
      <Header texto="Descubre" />
      {isLoading ? (
        <ActivityIndicator
          style={{
            marginTop: 20,
            alignItems: "center",
            flex: 1,
            justifyContent: "center",
          }}
          animating={true}
          color={MD2Colors.white}
          size="large"
        />
      ) : (
        <>
          <Cards Data={imagenDia} onPres={() => handleDetalles(imagenDia)} />
          <Textwhite texto="Imágenes de los últimos 7 días" />
          <FlatList
            style={{ marginVertical: 5 }}
            data={imagenesDias}
            renderItem={({ item }) => (
              <ImagenesDiasView
                title={item.title}
                date={item.date}
                url={item.url}
                onPres={() => handleDetalles(item)}
              />
            )}
            keyExtractor={(item) => item.title}
            ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
          ></FlatList>
        </>
      )}
    </Layout>
  );
};
