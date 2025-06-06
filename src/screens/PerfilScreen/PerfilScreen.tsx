import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
import NavBar from '../../components/NavBar';

export default function PerfilScreen() {
  const navigation = useNavigation();

  const handleLogout = () => {
  navigation.navigate('Login');
};

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.header}>Perfil</Text>

        <TouchableOpacity style={styles.option} onPress={() => navigation.navigate('DetalhesConta')}>
          <Text style={styles.optionText}>Detalhes Da Conta</Text>
          <AntDesign name="arrowright" size={20} color="#000" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.option} onPress={() => navigation.navigate('ConfiguracoesSoS')}>
          <Text style={styles.optionText}>Configurações SoS</Text>
          <AntDesign name="arrowright" size={20} color="#000" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.option} onPress={() => navigation.navigate('SobreNos')}>
          <Text style={styles.optionText}>Sobre Nós</Text>
          <AntDesign name="arrowright" size={20} color="#000" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
            <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
      </View>

      <NavBar active="Perfil" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    padding: 24,
    paddingBottom: 100, // espaço para a navbar
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 32,
  },
  option: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  optionText: {
    fontSize: 16,
  },
  logoutButton: {
    marginTop: 40,
    borderColor: '#F44336',
    borderWidth: 1.5,
    borderRadius: 24,
    paddingVertical: 14,
    alignItems: 'center',
  },
  logoutText: {
    color: '#F44336',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
