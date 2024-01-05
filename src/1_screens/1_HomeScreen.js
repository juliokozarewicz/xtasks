import React from 'react';

// database
// ----------------------------------------------------------------------
import * as Database from './4_database/DatabaseFunctions';
// ----------------------------------------------------------------------

// components
// ----------------------------------------------------------------------
import {
  StatusBar,
  View,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
  AsyncStorage,
} from 'react-native';
// ----------------------------------------------------------------------

// Import home stylesheet
// ----------------------------------------------------------------------
import HomeStyle from './1_stylesheet/HomeStyle';
// ----------------------------------------------------------------------

// export app function
// ----------------------------------------------------------------------
export default () => {

  // border focus input task
  // ----------------------------------------------------------------------
  const [isFocused, setFocused] = React.useState(false);
  // ----------------------------------------------------------------------

  // date
  // ----------------------------------------------------------------------
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
  // ----------------------------------------------------------------------
  
  // data base  
  // ----------------------------------------------------------------------
  const tarefasInseridas = Database.ReadData()
  // ----------------------------------------------------------------------


  return (
  
    <View style={HomeStyle.allcontent}>

      <SafeAreaView style={HomeStyle.safeareaview}>

        <StatusBar barStyle="dark-content" backgroundColor={HomeStyle.statusbar.backgroundColor} />

        <Text style={HomeStyle.titletop}>XTASKS</Text>
        <Text style={HomeStyle.datetime}>{formattedDate}</Text>
        <Text style={HomeStyle.texts}>Agora você organiza a sua vida! Adicione novos itens e se matenha no controle.</Text>

        <View style={HomeStyle.frame_itask}>

          <TextInput
            style={
              [
                HomeStyle.itask,
                isFocused ? HomeStyle.itaskFocused : null,
              ]
            }
              
            placeholder='Insira uma tarefa...'
            placeholderTextColor={HomeStyle.itask_placeholder.color}


            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
          /> 

          <TouchableOpacity
            style={HomeStyle.btnitask}
            onPress={ () => alert('testeee!')}
          >

            <View style={HomeStyle.btnitask_line1} ></View>
            <View style={HomeStyle.btnitask_line2} ></View>

          </TouchableOpacity>

        </View>

        <Text style={HomeStyle.pendente}>Pendentes:</Text>
          
        <ScrollView style={HomeStyle.roll_tasks}>

          {/* List of tasks*/}
          <View style={HomeStyle.taskinserted}>

            <View style={HomeStyle.taskdescript}>
              <Text
                style={HomeStyle.taskdescript_txt}
                numberOfLines={1}
                ellipsizeMode="tail"
              >
                {'sair PassEar com O cachoRRo as 09:00h.'.charAt(0).toUpperCase() + 'sair PassEar com O cachoRRo as 09:00h'.slice(1).toLowerCase()}
              </Text>
            </View>

            <TouchableOpacity
              style={HomeStyle.btndeletetask}
              onPress={ () => alert('testeee!')}
            >
              <Image
                source={require('./3_imgs/deleteicon.png')}
                style={HomeStyle.deleteicon}
              />


                {

                    
                }


            </TouchableOpacity>

          </View>

        </ScrollView>

      </SafeAreaView>
        
      <TouchableOpacity style={HomeStyle.cleantasks}>
        <Text style={HomeStyle.cleantasks_text}>apagar todas as tarefas</Text>
      </TouchableOpacity>

    </View>

  );
};
// ----------------------------------------------------------------------