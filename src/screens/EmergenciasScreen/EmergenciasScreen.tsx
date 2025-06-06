import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import NavBar from '../../components/NavBar';

const dadosMock = [
  {
    id: 1,
    tipo: 'Alagamento',
    descricao: 'A região do bairro da Vila Prudente está alagada devido a chuvas intensas na região, pessoas estão ilhadas próximas ao metrô.',
    endereco: 'Av Anhaia Mello, Vila Prudente, 411',
    icone: require('../../assets/alagamento.png'),
  },
  {
    id: 2,
    tipo: 'Ajuda Médica',
    descricao: 'Estamos precisando de itens de curativo para ajudar animais feridos por conta de um deslizamento de terra.',
    endereco: 'Av Lins, Vila Mariana, 4110',
    icone: require('../../assets/ajuda_medica.png'),
  },
];

export default function EmergenciasScreen() {
  const [abaAtiva, setAbaAtiva] = useState<'voce' | 'outros'>('voce');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Emergencias</Text>

      <View style={styles.tabs}>
        <TouchableOpacity
          style={[styles.tab, abaAtiva === 'voce' && styles.tabActive]}
          onPress={() => setAbaAtiva('voce')}
        >
          <Text
            style={[styles.tabText, abaAtiva === 'voce' && styles.tabTextActive]}
          >
            Reportados Por Você
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, abaAtiva === 'outros' && styles.tabActive]}
          onPress={() => setAbaAtiva('outros')}
        >
          <Text
            style={[styles.tabText, abaAtiva === 'outros' && styles.tabTextActive]}
          >
            Reportados Por Outros
          </Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.list}>
        {dadosMock.map((item) => (
          <View key={item.id} style={styles.card}>
            <View style={styles.cardHeader}>
              <View style={styles.location}>
                <Image
                  source={require('../../assets/location-icon.png')}
                  style={styles.locationIcon}
                />
                <Text style={styles.address}>{item.endereco}</Text>
              </View>
              {abaAtiva === 'voce' && (
                <TouchableOpacity>
                  <Image
                    source={require('../../assets/trash-icon.png')}
                    style={styles.trashIcon}
                  />
                </TouchableOpacity>
              )}
            </View>

            <View style={styles.cardContent}>
              <Image source={item.icone} style={styles.emergencyIcon} />
              <View style={styles.textContent}>
                <Text style={styles.cardTitle}>{item.tipo}</Text>
                <Text style={styles.cardDescription}>{item.descricao}</Text>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>

      <View style={styles.navbarContainer}>
        <NavBar active="SOS" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  tabs: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  tab: {
    flex: 1,
    paddingVertical: 8,
    alignItems: 'center',
    borderRadius: 20,
  },
  tabActive: {
    backgroundColor: '#FFE5E5',
  },
  tabText: {
    color: '#000',
    fontSize: 11,
  },
  tabTextActive: {
    color: '#E02323',
    fontWeight: 'bold',
  },
  list: {
    flex: 1,
    marginBottom: 80,
  },
  card: {
    backgroundColor: '#F2F2F2',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  location: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationIcon: {
    width: 14,
    height: 14,
    marginRight: 6,
  },
  address: {
    fontSize: 12,
    color: '#333',
  },
  trashIcon: {
    width: 20,
    height: 20,
    tintColor: '#E02323',
  },
  cardContent: {
    flexDirection: 'row',
    gap: 12,
  },
  emergencyIcon: {
    width: 42,
    height: 42,
  },
  textContent: {
    flex: 1,
  },
  cardTitle: {
    fontWeight: 'bold',
    marginBottom: 4,
    fontSize: 14,
  },
  cardDescription: {
    fontSize: 13,
    color: '#333',
  },
  content: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 24,
    paddingBottom: 80, 
    backgroundColor: '#fff',
  },
  navbarContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
});
