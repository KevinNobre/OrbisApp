import React, { createContext, useState, useContext, ReactNode } from 'react';

export interface Emergencia {
  id: string;
  tipo: string;
  descricao: string;
  endereco: string;
  icone: any;
}

interface EmergenciasContextProps {
  emergenciasUsuario: Emergencia[];
  adicionarEmergencia: (nova: Emergencia) => void;
}

const EmergenciasContext = createContext<EmergenciasContextProps>({
  emergenciasUsuario: [],
  adicionarEmergencia: () => {},
});

export const useEmergencias = () => useContext(EmergenciasContext);

export const EmergenciasProvider = ({ children }: { children: ReactNode }) => {
  const [emergenciasUsuario, setEmergenciasUsuario] = useState<Emergencia[]>([]);

  const adicionarEmergencia = (nova: Emergencia) => {
    setEmergenciasUsuario((prev) => [...prev, nova]);
  };

  return (
    <EmergenciasContext.Provider value={{ emergenciasUsuario, adicionarEmergencia }}>
      {children}
    </EmergenciasContext.Provider>
  );
};
