import React from 'react';

// components
import {
  StatusBar,
  View,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity
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
          /> 

          <TouchableOpacity
            style={homeStyle.btnitask}
            onPress={ () => alert('testeee!')}
          >

            <Text style={homeStyle.btnitask_text}>+</Text>

          </TouchableOpacity>

        </View>

      </SafeAreaView>

    </View>

  );
};

export default App;