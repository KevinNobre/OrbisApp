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
import { loginUser } from '../../services/usuarioAPI';
import {Toast } from 'native-base';

type RootStackParamList = {
  Login: undefined;
  Registro: undefined;
  Home: undefined;
  ReporteEmergencia: undefined;
  SelecionarLocalizacao: undefined;
  Comunidade: undefined;
  Perfil: undefined;
};

type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Login'>;
type LoginScreenRouteProp = RouteProp<RootStackParamList, 'Login'>;



type Props = {
  navigation: LoginScreenNavigationProp;
  route: LoginScreenRouteProp;
};

const LoginScreen: React.FC<Props> = ({ navigation }) => {
  const [telefone, setTelefone] = useState('');
  const [senha, setSenha] = useState('');


  const handleLogin = async () => {
   try {
       const usuario = await loginUser(telefone, senha);

       if (usuario) {
         navigation.navigate('Home');
       } else {
         Toast.show({
           description: 'Telefone ou senha não conferem. Tente novamente.',
           bgColor: 'red.500',
         });
       }
     } catch (error) {
       console.error('Erro ao tentar fazer login', error);
       Toast.show({
         description: 'Erro ao tentar fazer login. Tente novamente.',
         bgColor: 'red.500',
       });
     }
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
          <Text style={styles.title}>Login</Text>
          <Text style={styles.subtitle}>Seja bem-vindo.</Text>

          <Text style={styles.label}>Telefone</Text>
          <TextInput
            style={styles.input}
            placeholder=""
            keyboardType="phone-pad"
            value={telefone}
            onChangeText={setTelefone}
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

          <TouchableOpacity style={{ alignSelf: 'flex-end', marginRight: 22, marginBottom: 20 }}>
            <Text style={styles.forgot}>Esqueceu a senha?</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
            <Text style={styles.loginButtonText}>Login</Text>
          </TouchableOpacity>

          <View style={styles.footer}>
            <Text style={styles.footerText}>Novo aqui?</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Registro')}>
              <Text style={styles.registerText}> Registre-se</Text>
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
  title: { color: '#E02323', fontSize: 34, fontWeight: 'bold' },
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
  forgot: { color: '#E02323', fontWeight: 'bold', fontSize: 16 },
  loginButton: {
    backgroundColor: '#E02323',
    paddingVertical: 14,
    borderRadius: 16,
    alignItems: 'center',
    marginBottom: 32,
  },
  loginButtonText: { color: '#FFF', fontSize: 16, fontWeight: 'bold' },
  footer: { flexDirection: 'row', justifyContent: 'center' },
  footerText: { fontSize: 16, fontWeight: 'bold', color: '#150502' },
  registerText: { fontSize: 16, fontWeight: 'bold', color: '#E02323' },
});

export default LoginScreen;
