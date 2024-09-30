import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function TelaPerfil() {
  const navigation = useNavigation();

  const logout = () => {
    // Aqui você pode adicionar a lógica para invalidar o token ou sessão no backend, se necessário
    // Por exemplo, se você estiver usando um token JWT, pode armazená-lo no armazenamento local e removê-lo aqui

    // Remover o token do armazenamento local (exemplo)
    // AsyncStorage.removeItem('token'); // caso você esteja usando AsyncStorage

    // Redirecionar para a tela de login
    Alert.alert("Logout", "Você foi desconectado com sucesso!", [
      { text: "OK", onPress: () => navigation.navigate("TelaDeLogin") }
    ]);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('../image/Andersonperfil.png')} // adicionando a Foto
          style={styles.profileImage}
        />
        <Text style={styles.name}>José Anderson Azevedo Da Silva</Text>
        <Text style={styles.email}>andersonazessilva@gmail.com</Text>
        <Text style={styles.code}>Matricula: <Text style={styles.codeHighlight}>DG061195</Text></Text>
      </View>

      <View style={styles.menu}>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuText}>Dados pessoais</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuText}>Meus documentos</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuText}>Vídeo de apresentação</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuText}>Carteira de Trabalho</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuText}>Endereço</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuText}>Contatos</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuText}>Responsável</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuText}>Nacionalidade</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem} onPress={logout}>
          <Text style={styles.menuText}>Sair</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  header: {
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  email: {
    fontSize: 16,
    color: '#555',
  },
  code: {
    fontSize: 16,
    marginTop: 5,
  },
  codeHighlight: {
    fontWeight: 'bold',
    color: '#e91e63', // Cor para destacar o código
  },
  menu: {
    marginTop: 20,
    padding: 10,
  },
  menuItem: {
    padding: 15,
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  menuText: {
    fontSize: 16,
  },
});
