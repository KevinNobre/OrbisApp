import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SelecionarLocalizacaoScreen = () => {
  const navigation = useNavigation();
  const [local, setLocal] = useState('FIAP');
  const [bairro, setBairro] = useState('Vila Mariana');
  const [numero, setNumero] = useState('1264');

  const handleConfirmar = () => {
    alert(`${local}, ${bairro}, ${numero}`);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={require('../../assets/arrow-left.png')}
            style={styles.iconVoltar}
          />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Selecione sua Localização</Text>
      </View>

      <TextInput placeholder="CEP" style={styles.input} />


      <View style={styles.inputGroup}>
        <TextInput value={local} onChangeText={setLocal} style={styles.input} placeholder="Local" />
        <TextInput value={bairro} onChangeText={setBairro} style={styles.input} placeholder="Bairro" />
        <TextInput value={numero} onChangeText={setNumero} style={styles.input} placeholder="Número" />
      </View>

      <TouchableOpacity style={styles.confirmar} onPress={handleConfirmar}>
        <Text style={styles.botaoTexto}>Confirmar Reporte</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#fff' },
  header: { flexDirection: 'row', alignItems: 'center', marginBottom: 16, gap: 12 },
  iconVoltar: { width: 20, height: 20, tintColor: '#000' },
  headerTitle: { fontSize: 16, fontWeight: 'bold', color: '#000' },
  input: {
    borderWidth: 1,
    borderColor: '#E02323',
    borderRadius: 8,
    padding: 12,
    marginBottom: 8,
  },
  map: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginBottom: 16,
  },
  inputGroup: {},
  confirmar: {
    backgroundColor: '#E02323',
    paddingVertical: 16,
    borderRadius: 16,
    alignItems: 'center',
    marginTop: 16,
  },
  botaoTexto: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default SelecionarLocalizacaoScreen;
