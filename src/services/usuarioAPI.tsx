import axios from 'axios';
import { usuario } from './types';


const api = axios.create({
  baseURL: 'http://localhost:7250/', 
  headers: {
    'Content-Type': 'application/json', 
  },
});

export const loginUser = async (telefone: string, senha: string) => {
  try {
    const response = await api.get('/api/Usuario');

    const listaUsuarios = response.data; 

    const usuario = listaUsuarios.find(
      (usuario: any) => usuario.telefone === telefone && usuario.senha === senha
    );

    if (usuario) {
      return usuario;
    } else {
      throw new Error('Telefone ou senha não conferem');
    }
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(error.message || 'Erro ao tentar fazer login');
    } else {
      throw new Error('Erro desconhecido');
    }
  }
};



export const createUser = async (novoUsuario: usuario) => {
    try {
      const response = await api.post('/api/Usuario', novoUsuario);
      return response.data;
    } catch (error: unknown) {
      if (error instanceof Error) {
        throw new Error(error.message || 'Erro ao criar usuário');
      } else {
        throw new Error('Erro desconhecido ao criar usuário');
      }
    }
  };
    
