import { Text, View, Switch } from 'react-native';
import { estilos } from './estilos';
import { useContext } from 'react';
import { TemaContext } from '../../contexts/TemaContext';

export default function Configuracao({ navigation }) {
  const {temaAtual, setTemaAtual, temaEscolhido} = useContext(TemaContext)

  const estilo = estilos(temaEscolhido)

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

