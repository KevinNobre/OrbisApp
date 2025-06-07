import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { createUser } from '../../services/usuarioAPI';

type RootStackParamList = {
  Login: undefined;
  Registro: undefined;
};

type RegistroScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Registro'>;
type RegistroScreenRouteProp = RouteProp<RootStackParamList, 'Registro'>;

type Props = {
  navigation: RegistroScreenNavigationProp;
  route: RegistroScreenRouteProp;
};

const RegistroScreen: React.FC<Props> = ({ navigation }) => {
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [cep, setCep] = useState('');
  const [senha, setSenha] = useState('');

  const handleRegister = () => {
    alert(`Nome: ${nome}\nTelefone: ${telefone}\nCEP: ${cep}\nSenha: ${senha}`);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <ScrollView style={{ flex: 1 }}>
        <View style={styles.container}>
          <Image
            source={{ uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/gPE6ykvDcP/xp5mwe7v_expires_30_days.png" }}
            resizeMode="stretch"
            style={styles.logo}
          />
          <Text style={styles.title}>Vamos começar.</Text>
          <Text style={styles.subtitle}>Seja bem vindo.</Text>

          <Text style={styles.label}>Nome Completo</Text>
          <TextInput
            style={styles.input}
            placeholder="Nome"
            value={nome}
            onChangeText={setNome}
          />

          <Text style={styles.label}>Telefone</Text>
          <TextInput
            style={styles.input}
            placeholder="+55 |"
            keyboardType="phone-pad"
            value={telefone}
            onChangeText={setTelefone}
          />

          <Text style={styles.label}>CEP</Text>
          <TextInput
            style={styles.input}
            placeholder="xxx-xxxxx"
            keyboardType="numeric"
            value={cep}
            onChangeText={setCep}
          />

          <Text style={styles.label}>Senha</Text>
          <View style={styles.passwordContainer}>
            <Image
              source={{ uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/gPE6ykvDcP/3z1fexm2_expires_30_days.png" }}
              style={styles.passwordIcon}
            />
            <TextInput
              style={styles.passwordInput}
              placeholder="Digite sua senha"
              secureTextEntry
              value={senha}
              onChangeText={setSenha}
            />
          </View>

          <TouchableOpacity style={styles.registerButton} onPress={handleRegister}>
            <Text style={styles.registerButtonText}>Registrar</Text>
          </TouchableOpacity>

          <View style={styles.footer}>
            <Text style={styles.footerText}>Já é um membro?</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text style={styles.loginText}> Login</Text>
            </TouchableOpacity>
          </View>

          <View style={{ height: 100 }} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { padding: 22 },
  logo: { width: 85, height: 70, alignSelf: 'center', marginBottom: 24 },
  title: { color: '#E02323', fontSize: 28, fontWeight: 'bold' },
  subtitle: { color: '#150502', fontSize: 16, marginBottom: 28 },
  label: { fontSize: 16, color: '#150502', marginBottom: 6 },
  input: {
    backgroundColor: '#FFF',
    borderColor: '#15050266',
    borderWidth: 1,
    borderRadius: 16,
    paddingVertical: 14,
    paddingHorizontal: 15,
    fontSize: 16,
    marginBottom: 16,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#15050266',
    borderWidth: 1,
    borderRadius: 16,
    paddingVertical: 14,
    paddingHorizontal: 16,
    backgroundColor: '#FFF',
    marginBottom: 24,
  },
  passwordIcon: { width: 24, height: 24, marginRight: 10 },
  passwordInput: { fontSize: 16, flex: 1 },
  registerButton: {
    backgroundColor: '#E02323',
    paddingVertical: 14,
    borderRadius: 16,
    alignItems: 'center',
    marginBottom: 32,
  },
  registerButtonText: { color: '#FFF', fontSize: 16, fontWeight: 'bold' },
  footer: { flexDirection: 'row', justifyContent: 'center' },
  footerText: { fontSize: 16, fontWeight: 'bold', color: '#150502' },
  loginText: { fontSize: 16, fontWeight: 'bold', color: '#E02323' },
});

export default RegistroScreen;
