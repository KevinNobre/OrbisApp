import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const emergencias = [
  { id: 'acidente', label: 'Acidente', icon: require('../../assets/acidente.png') },
  { id: 'fogo', label: 'Fogo', icon: require('../../assets/fogo.png') },
  { id: 'alagamento', label: 'Alagamento', icon: require('../../assets/alagamento.png') },
  { id: 'deslizamento', label: 'Deslizamento de Terra', icon: require('../../assets/deslizamento.png') },
  { id: 'ajuda_medica', label: 'Ajuda Médica', icon: require('../../assets/ajuda_medica.png') },
];

const ReporteEmergenciaScreen = () => {
  const [tipoSelecionado, setTipoSelecionado] = useState('acidente');
  const navigation = useNavigation();

  const handleConfirmar = () => {
    alert(`Tipo de emergência: ${tipoSelecionado}`);
  };

  const handleAlterarLocalizacao = () => {
    navigation.navigate('SelecionarLocalizacao');
  };

  return (
    <ScrollView style={styles.container}>
      {/* Cabeçalho */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={require('../../assets/arrow-left.png')}
            style={styles.iconVoltar}
          />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Reporte de Emergência</Text>
      </View>

      <Text style={styles.titulo}>Selecione o tipo da sua emergência</Text>

      <View style={styles.grid}>
        {emergencias.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={[
              styles.item,
              tipoSelecionado === item.id && styles.itemAtivo,
            ]}
            onPress={() => setTipoSelecionado(item.id)}
          >
            <Image source={item.icon} style={styles.icone} />
            {tipoSelecionado === item.id && (
              <Image
                source={require('../../assets/check.png')}
                style={styles.check}
              />
            )}
            <Text
              style={[
                styles.label,
                tipoSelecionado === item.id && styles.labelAtivo,
              ]}
            >
              {item.label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.localizacaoContainer}>
        <Text style={styles.localizacaoTitulo}>Localização</Text>
        <View style={styles.localizacaoLinha}>
          
          <Text style={styles.endereco}>FIAP, 1264</Text>
          <TouchableOpacity onPress={handleAlterarLocalizacao}>
            <Text style={styles.alterar}>Alterar</Text>
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity style={styles.botaoConfirmar} onPress={handleConfirmar}>
        <Text style={styles.botaoTexto}>Confirmar Reporte</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, backgroundColor: '#fff' },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    gap: 12,
  },
  iconVoltar: {
    width: 20,
    height: 20,
    tintColor: '#000',
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  titulo: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#150502',
    marginBottom: 12,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  item: {
    width: '30%',
    alignItems: 'center',
    marginVertical: 12,
    opacity: 0.4,
    position: 'relative',
  },
  itemAtivo: {
    opacity: 1,
  },
  icone: {
    width: 48,
    height: 48,
    marginBottom: 4,
    resizeMode: 'contain',
  },
  check: {
    position: 'absolute',
    top: -4,
    right: 4,
    width: 18,
    height: 18,
  },
  label: {
    fontSize: 12,
    color: '#999',
    textAlign: 'center',
  },
  labelAtivo: {
    color: '#E02323',
    fontWeight: 'bold',
  },
  localizacaoContainer: {
    marginTop: 24,
    borderTopWidth: 1,
    borderColor: '#eee',
    paddingTop: 16,
  },
  localizacaoTitulo: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#150502',
  },
  localizacaoLinha: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  locationIcon: {
    width: 16,
    height: 16,
  },
  endereco: {
    fontSize: 14,
    flex: 1,
    color: '#000',
  },
  alterar: {
    fontSize: 14,
    color: '#E02323',
    fontWeight: 'bold',
  },
  botaoConfirmar: {
    backgroundColor: '#E02323',
    paddingVertical: 16,
    borderRadius: 16,
    alignItems: 'center',
    marginTop: 32,
  },
  botaoTexto: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default ReporteEmergenciaScreen;
