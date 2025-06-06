import React, { useEffect, useRef, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Animated,
  Switch,
  Image,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import NavBar from '../../components/NavBar';

const HomeScreen: React.FC = () => {
  const scaleAnim = useRef(new Animated.Value(1)).current;
  const [isVoluntario, setIsVoluntario] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(scaleAnim, {
          toValue: 1.2,
          duration: 800,
          useNativeDriver: true,
        }),
        Animated.timing(scaleAnim, {
          toValue: 1,
          duration: 800,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, [scaleAnim]);

  const handleSosPress = () => {
    navigation.navigate('ReporteEmergencia' as never); // Navega para a tela de emergência
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.greeting}>
          Hey! <Text style={styles.bold}>Juliana</Text>
        </Text>
        <Image
          source={{
            uri: 'https://cdn-icons-png.flaticon.com/512/1827/1827392.png',
          }}
          style={styles.bell}
        />
      </View>

      <Text style={styles.helpText}>A ajuda está a um clique de distância!</Text>
      <Text style={styles.helpText}>
        Clique no <Text style={styles.sosText}>SOS</Text> para pedir ajuda.
      </Text>

      <Animated.View
        style={[styles.sosCircle, { transform: [{ scale: scaleAnim }] }]}
      >
        <TouchableOpacity style={styles.sosButton} onPress={handleSosPress}>
          <Text style={styles.sosButtonText}>SOS</Text>
        </TouchableOpacity>
      </Animated.View>

      <View style={styles.switchContainer}>
        <Text style={styles.switchLabel}>Voluntários para doação</Text>
        <Switch
          value={isVoluntario}
          onValueChange={setIsVoluntario}
          thumbColor={isVoluntario ? '#E02323' : '#E02323'}
          trackColor={{ false: '#ccc', true: '#E02323' }}
        />
      </View>

      <NavBar active="Home" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 40,
    alignItems: 'center',
  },
  greeting: { fontSize: 16, color: '#000' },
  bold: { fontWeight: 'bold' },
  bell: { width: 24, height: 24 },
  helpText: {
    fontSize: 14,
    textAlign: 'center',
    marginTop: 12,
    color: '#150502',
  },
  sosText: { color: '#E02323', fontWeight: 'bold' },
  sosCircle: {
    alignSelf: 'center',
    marginVertical: 40,
    width: 250,
    height: 250,
    borderRadius: 125,
    backgroundColor: '#ff4d4d33',
    justifyContent: 'center',
    alignItems: 'center',
  },
  sosButton: {
    width: 180,
    height: 180,
    borderRadius: 90,
    backgroundColor: '#E02323',
    justifyContent: 'center',
    alignItems: 'center',
  },
  sosButtonText: {
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
  },
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
  },
  switchLabel: {
    fontSize: 14,
    color: '#000',
  },
});

export default HomeScreen;
