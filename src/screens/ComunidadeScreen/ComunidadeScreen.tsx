import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import NavBar from '../../components/NavBar';

export default function ComunidadeScreen() {
  return (
    <View style={styles.wrapper}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.header}>Comunidade</Text>

        <Text style={styles.subheader}>
          GRAD – Grupo de Resposta a Animais em Desastres
        </Text>
        <Text style={styles.date}>21-01-25</Text>

        <Image
          source={require('./../../assets/crianca.png')} 
          style={styles.image}
        />

        <Text style={styles.title}>
          🌟{' '}
          <Text style={styles.bold}>
            O que fazer nas férias: educando crianças para proteger os animais
            e o meio ambiente
          </Text>
        </Text>

        <Text style={styles.body}>
          As férias são o momento perfeito para criar memórias inesquecíveis
          com as crianças. Além de descanso e diversão, esse período pode ser
          uma oportunidade única para ensinar valores essenciais como o respeito
          aos animais e a proteção do meio ambiente.
        </Text>
      </ScrollView>

      
      <NavBar active="Comunidade" />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    padding: 24,
    paddingBottom: 80, // espaço extra para não sobrepor a navbar
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  subheader: {
    fontWeight: 'bold',
    textAlign: 'left',
    marginBottom: 4,
  },
  date: {
    fontSize: 12,
    color: '#555',
    marginBottom: 12,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    resizeMode: 'cover',
    marginBottom: 12,
  },
  title: {
    fontSize: 15,
    marginBottom: 10,
  },
  bold: {
    fontWeight: 'bold',
  },
  body: {
    fontSize: 14,
    color: '#333',
    lineHeight: 20,
  },
});
