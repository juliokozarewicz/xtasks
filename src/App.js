import React from 'react';

// date

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

  // border focus input task
  const [isFocused, setFocused] = React.useState(false);

  // date
  function getFormattedDate() {
    const currentDate = new Date();

    const day = currentDate.getDate().toString().padStart(2, '0');

    const monthNames = [
      'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
      'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
    ];

    const month = monthNames[currentDate.getMonth()];
    const year = currentDate.getFullYear();

    return `${day} de ${month} de ${year}`;
  }
 

  const formattedDate = getFormattedDate();

  return (

    <View style={homeStyle.allcontent}>

      <SafeAreaView style={homeStyle.safeareaview}>

        <StatusBar barStyle="dark-content" backgroundColor={homeStyle.statusbar.backgroundColor} />

        <Text style={homeStyle.titletop}>XTASKS</Text>
        <Text style={homeStyle.datetime}>{formattedDate}</Text>
        <Text style={homeStyle.texts}>Agora você organiza a sua vida! Adicione novos itens e se matenha no controle.</Text>

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