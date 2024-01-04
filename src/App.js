import React from 'react';

// components
import {
  StatusBar,
  View,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView
} from 'react-native';

// Import home stylesheet
import homeStyle from './1_stylesheet/home';

const App = () => {

  const [isFocused, setFocused] = React.useState(false);
    
  return (

    <View style={homeStyle.allcontent}>

      <SafeAreaView style={homeStyle.safeareaview}>

        <StatusBar barStyle="dark-content" backgroundColor={homeStyle.statusbar.backgroundColor} />

        <Text style={homeStyle.titletop}>Olá, tudo bem?</Text>
        <Text style={homeStyle.texts}>Agora você organiza a sua vida! Adicione novos itens e nunca mais esqueça de realizar suas tarefas</Text>

        <View style={homeStyle.frame_itask}>

          <TextInput
            style={
              [
                homeStyle.itask,
                isFocused ? homeStyle.itaskFocused : null,
              ]
            }
              
            placeholder='Insira uma tarefa...'
            placeholderTextColor={homeStyle.itask_placeholder.color}


            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
          /> 

          <TouchableOpacity
            style={homeStyle.btnitask}
            onPress={ () => alert('testeee!')}
          >

            <View style={homeStyle.btnitask_line1} ></View>
            <View style={homeStyle.btnitask_line2} ></View>

          </TouchableOpacity>

        </View>
          
        <ScrollView style={homeStyle.roll_tasks}>
          <TextInput placeholder='Insira uma tarefa...' placeholderTextColor={homeStyle.itask_placeholder.color}/>
          <TextInput placeholder='Insira uma tarefa...' placeholderTextColor={homeStyle.itask_placeholder.color}/>
          <TextInput placeholder='Insira uma tarefa...' placeholderTextColor={homeStyle.itask_placeholder.color}/>
          <TextInput placeholder='Insira uma tarefa...' placeholderTextColor={homeStyle.itask_placeholder.color}/>
          <TextInput placeholder='Insira uma tarefa...' placeholderTextColor={homeStyle.itask_placeholder.color}/>
          <TextInput placeholder='Insira uma tarefa...' placeholderTextColor={homeStyle.itask_placeholder.color}/>
          <TextInput placeholder='Insira uma tarefa...' placeholderTextColor={homeStyle.itask_placeholder.color}/>
          <TextInput placeholder='Insira uma tarefa...' placeholderTextColor={homeStyle.itask_placeholder.color}/>
          <TextInput placeholder='Insira uma tarefa...' placeholderTextColor={homeStyle.itask_placeholder.color}/>
          <TextInput placeholder='Insira uma tarefa...' placeholderTextColor={homeStyle.itask_placeholder.color}/>
          <TextInput placeholder='Insira uma tarefa...' placeholderTextColor={homeStyle.itask_placeholder.color}/>
          <TextInput placeholder='Insira uma tarefa...' placeholderTextColor={homeStyle.itask_placeholder.color}/>
          <TextInput placeholder='Insira uma tarefa...' placeholderTextColor={homeStyle.itask_placeholder.color}/>
          <TextInput placeholder='Insira uma tarefa...' placeholderTextColor={homeStyle.itask_placeholder.color}/>
          <TextInput placeholder='Insira uma tarefa...' placeholderTextColor={homeStyle.itask_placeholder.color}/>
          <TextInput placeholder='Insira uma tarefa...' placeholderTextColor={homeStyle.itask_placeholder.color}/>
          <TextInput placeholder='Insira uma tarefa...' placeholderTextColor={homeStyle.itask_placeholder.color}/>
          <TextInput placeholder='Insira uma tarefa...' placeholderTextColor={homeStyle.itask_placeholder.color}/>
        </ScrollView>

      </SafeAreaView>
        
      <TouchableOpacity style={homeStyle.cleantasks}>
        <Text style={homeStyle.cleantasks_text}>Apagar todas as tarefas</Text>
      </TouchableOpacity>

    </View>

  );
};

export default App;