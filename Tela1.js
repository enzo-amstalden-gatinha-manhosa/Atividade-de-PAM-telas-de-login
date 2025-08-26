import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

export default function Tela1({ navigation }) {
  return (
    // Tela
    <View style={estilo.container}>
      <Image source={require("../imagens/casual_dog.png")} style={estilo.imagem} />

      <Text style={estilo.titulo}>Ótimo dia!</Text>
      <Text style={estilo.subtitulo}>Como deseja acessar?</Text>

      <TouchableOpacity style={estilo.botaoG}>
        <Image source={require("../imagens/Google.png")} style={estilo.icone} />
        <Text style={estilo.textoBotao}>Como deseja acessar?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={estilo.botaoO} onPress={() => navigation.navigate("Tela2")}>
        <Text style={estilo.texto}>Outras opções</Text>
      </TouchableOpacity>
    </View>
  );
}

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#fff"
  },
  imagem: {
    width: 250, // Largura
    height: 250, // Altura
    marginBottom: 20,
    resizeMode: "contain" // Proporção
  },
  titulo: {
    fontSize: 40,
    fontWeight: "bold",
    marginBottom: 10
  },
  subtitulo: {
    fontSize: 15,
    marginBottom: 30,
    color: "#555"
  },
  botaoG: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#34A853",
    padding: 10,
    borderRadius: 10,
    width: "100%",
    justifyContent: "center",
    marginBottom: 15
  },
  icone: {
    width: 25,
    height: 25,
    marginRight: 10
  },
  textoBotao: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "bold"
  },
  botaoO: {
    padding: 10
  },
  texto: {
    color: "#34A853",
    fontSize: 15,
    textAlign: "center"
  }
});