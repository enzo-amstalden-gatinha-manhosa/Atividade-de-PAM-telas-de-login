import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from "react-native";

export default function Tela2({ navigation }) {
  return (
    // Tela
    <View style={estilos.container}>
      <Text style={estilos.titulo}>Acesse</Text>
      <Text style={estilos.subtitulo}>com E-mail e senha</Text>

      <TextInput
        style={estilos.input}
        placeholder="Digite seu E-mail"
      />

      <TextInput
        style={estilos.input}
        placeholder="Digite sua senha"
      />

      <View style={estilos.opcoesLogin}>
        <TouchableOpacity style={estilos.botao1}>
          <Text style={estilos.textoBotao}>Acessar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={estilos.botao2}>
          <Text style={[estilos.textoBotao, { color: "#34A853" }]}>Cadastrar</Text>
        </TouchableOpacity>
      </View>

      <Text style={estilos.ouTexto}>Ou continue com</Text>

      <View style={estilos.linha}>
        <TouchableOpacity onPress={() => navigation.navigate("Tela1")}> 
          <Image source={require("../imagens/Google.png")} style={estilos.icone} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Tela1")}>
          <Image source={require("../imagens/Facebook.png")} style={estilos.icone} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1, // Preenche tela
    justifyContent: "center", // Centraliza verticalmente
    alignItems: "center", // Centraliza horizontalmente
    padding: 20, // Espaçamento ( Ana Flávia está orgulhosa )
    backgroundColor: "#fff", // Cor de fundo
  },
  titulo: {
    fontSize: 30, // Tamanho do título
    fontWeight: "bold", // Negrito
    marginBottom: 5, // Espaço em baixo do título
    alignSelf: "flex-start", // Alinha à esquerda
  },
  subtitulo: {
    fontSize: 15, // Tamanho do subtítulo
    color: "#555", // Cor
    marginBottom: 20, // Espaço em baixo
    alignSelf: "flex-start",
  },
  input: {
    width: "100%", // Largura total
    borderWidth: 1, // Largura da borda
    borderColor: "#ccc", // Cor da borda
    borderRadius: 8, // Cantinho redondinho
    padding: 15, // Espaço interno
    marginBottom: 10, 
  },
  opcoesLogin: {
    width: "100%",
    marginTop: 10, // Espaço em cima
  },
  botao1: {
    backgroundColor: "#34A853",
    padding: 15,
    borderRadius: 8,
    alignItems: "center", // Centraliza o texto
    marginBottom: 10,
  },
  botao2: {
    backgroundColor: "#fff",
    borderWidth: 1, // Borda do botão
    borderColor: "#ccc", // Cor da borda
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
  },
  textoBotao: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "bold",
  },
  ouTexto: {
    marginVertical: 20, // Espaço em cima e em baixo
    fontSize: 15,
    color: "#555",
  },
  linha: {
    flexDirection: "row", // Organização dos ícones em linha
    gap: 20, // Espaço dos ícones
  },
  icone: {
    width: 40,
    height: 40,
    resizeMode: "contain", // Proporção da imagem
  },
});