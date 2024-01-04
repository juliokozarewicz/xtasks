import React from 'react';

// components
import {
  StatusBar,
  View,
  SafeAreaView,
  Text,
  TextInput,
  Button
} from 'react-native';

// Import home stylesheet
import homeStyle from './1_stylesheet/home';

const App = () => {

  return (
    

    <View style={homeStyle.allcontent}>

      <SafeAreaView style={homeStyle.safeareaview}>

        <StatusBar barStyle="dark-content" backgroundColor={homeStyle.statusbar.backgroundColor} />

        <Text style={homeStyle.titletop}>Olá, tudo bem!</Text>
        <Text style={homeStyle.texts}>Organize sua vida! Adicione novos itens e nunca mais esqueça de realizar suas tarefas =)</Text>

        <View style={homeStyle.frame_itask}>

          <TextInput
            style={homeStyle.itask}

            placeholder='Insira uma tarefa...'
            placeholderTextColor={homeStyle.itask_placeholder.color}

          >
          </TextInput>
          
          <Button
            style={homeStyle.btnitask}
            title="+"
            onPress={ () => alert('testeee!')}
          />

        </View>

      </SafeAreaView>

    </View>

  );
};

export default App;