import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Dimensions, Modal } from 'react-native';
import { BarChart } from 'react-native-chart-kit';
import { Ionicons } from '@expo/vector-icons';

// Dados do gráfico
const data = {
  labels: ['Resolvidas', 'Atendimento', 'Encerradas', 'Pendentes', 'Abertas'],
  datasets: [{ data: [50, 30, 40, 10, 20] }],
};

const screenWidth = Dimensions.get('window').width;

const TelaAdmin = ({ navigation }) => {
  const usuarioLogado = {
    nome: 'Administrador',
    status: 'Online',
  };

  const usuarios = [
    { id: '1', nome: 'Usuário 1', status: 'Ativo' },
    // Outros usuários podem ser adicionados aqui
  ];

  const buttons = [
    { title: 'Gerenciar Ocorrências', icon: 'list', screen: 'TelaChamados' },
    { title: 'Ver Histórico', icon: 'time', screen: 'TelaHistorico' },
    { title: 'Notificações', icon: 'notifications', screen: 'TelaNotificacoes' },
    { title: 'Relatórios', icon: 'stats-chart', screen: 'TelaRelatorios' },
  ];

  const [modalVisible, setModalVisible] = useState(false);

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.itemText}>{item.nome}</Text>
      <Text style={styles.itemStatus}>{item.status}</Text>
      <TouchableOpacity
        style={styles.detailsButton}
        onPress={() => {
          setModalVisible(true);
        }}
      >
        <Text style={styles.detailsButtonText}>Ver Detalhes</Text>
      </TouchableOpacity>
    </View>
  );

  const renderButton = ({ item }) => (
    <TouchableOpacity
      style={styles.button}
      onPress={() => navigation.navigate(item.screen)}
    >
      <Ionicons name={item.icon} size={24} color="#fff" />
      <Text style={styles.buttonText}>{item.title}</Text>
    </TouchableOpacity>
  );

  const renderContent = () => (
    <>
      <View style={styles.profileContainer}>
        <Text style={styles.profileText}>Usuário: {usuarioLogado.nome}</Text>
        <Text style={styles.profileStatus}>Status: {usuarioLogado.status}</Text>
      </View>

      <Text style={styles.title}>Painel do Administrador</Text>

      <Text style={styles.chartTitle}>Estatísticas de Ocorrências</Text>
      <BarChart
        data={data}
        width={screenWidth - 40}
        height={220}
        chartConfig={chartConfig}
        style={styles.chart}
      />

      <Text style={styles.subTitle}>Usuários Cadastrados</Text>
      <FlatList
        data={usuarios}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
      />
    </>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={buttons}
        renderItem={renderButton}
        keyExtractor={(item) => item.title}
        ListHeaderComponent={renderContent}
        contentContainerStyle={styles.buttonContainer}
      />

      {/* Modal para exibir detalhes do usuário */}
      <Modal
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Detalhes do Usuário</Text>
            <Text>Informações adicionais podem ser exibidas aqui.</Text>
            <TouchableOpacity style={styles.closeButton} onPress={() => setModalVisible(false)}>
              <Text style={styles.closeButtonText}>Fechar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const chartConfig = {
  backgroundColor: '#fff',
  backgroundGradientFrom: '#e0e0e0',
  backgroundGradientTo: '#e0e0e0',
  decimalPlaces: 0,
  color: (opacity = 1) => `rgba(3, 169, 244, ${opacity})`,
  labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fafafa',
  },
  profileContainer: {
    marginBottom: 20,
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 3,
  },
  profileText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  profileStatus: {
    fontSize: 18,
    color: '#4CAF50',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#007BFF',
  },
  chartTitle: {
    fontSize: 20,
    marginBottom: 15,
    color: '#666',
    textAlign: 'center',
  },
  chart: {
    marginBottom: 20,
    borderRadius: 8,
  },
  buttonContainer: {
    paddingBottom: 30,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#007BFF',
    padding: 15,
    borderRadius: 8,
    marginVertical: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  subTitle: {
    fontSize: 22,
    marginVertical: 15,
    fontWeight: 'bold',
    color: '#555',
  },
  listContainer: {
    paddingBottom: 30,
  },
  item: {
    padding: 15,
    marginVertical: 5,
    backgroundColor: '#fff',
    borderRadius: 8,
    elevation: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  itemText: {
    fontSize: 16,
    color: '#333',
  },
  itemStatus: {
    fontSize: 16,
    color: '#4CAF50', // Cor para status ativo
  },
  detailsButton: {
    backgroundColor: '#6C757D',
    paddingVertical: 7,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  detailsButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  // Estilos do modal
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fundo semi-transparente
  },
  modalContent: {
    width: 300,
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  closeButton: {
    marginTop: 15,
    backgroundColor: '#007BFF',
    paddingVertical: 10,
    borderRadius: 8,
  },
  closeButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default TelaAdmin;
