import { Text, View, Switch } from 'react-native';
import { estilo } from './estilos';
import { useState, useContext } from 'react';
import { TemaContext } from '../../contexts/TemaContext';

export default function Configuracao({ navigation }) {
  const [estado, setEstado] = useState(true);
  const {temaAtual, setTemaAtual} = useContext(TemaContext)

  return (
    <View style={estilo.container}>
      <Text style={estilo.titulo}>Configuração</Text>

      <View style={estilo.inputArea}>
      <Text style={estilo.subtitulo}>Tema: {temaAtual}</Text>
      <Switch
        onValueChange={() => temaAtual === 'Escuro' ? setTemaAtual('Claro') : setTemaAtual('Escuro')}
        value={temaAtual === 'Escuro' ? true : false}
      />
      </View>
    </View>
  );
}

