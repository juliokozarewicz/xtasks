import React from 'react';


// import functions
import * as DataBase from './4_functions/1_CRUD_functions';
import * as DateFunctions from './4_functions/DateFunctions'

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
} from 'react-native';
// ----------------------------------------------------------------------

// Import home stylesheet
// ----------------------------------------------------------------------
import HomeStyle from './1_stylesheet/HomeStyle';
// ----------------------------------------------------------------------

// export app function
// ----------------------------------------------------------------------
export default () => {
  
  // input task
  // ----------------------------------------------------------------------
  const [isFocused, setFocused] = React.useState(false);
  const [taskInput, setTaskInput] = React.useState('');
  const [refreshInput, setRefreshInput] = React.useState(0);


  const handleRefresh = () => {
    setRefreshInput((prevCount) => prevCount + 1);
  };
  // ----------------------------------------------------------------------

  // database
  // ----------------------------------------------------------------------
  DataBase.ReadDataBase((result: Array<any>) => {console.log(result)});
  // ----------------------------------------------------------------------


  return (
  
    <View key={refreshInput} style={HomeStyle.allcontent}>

      <SafeAreaView style={HomeStyle.safeareaview}>

        <StatusBar barStyle="dark-content" backgroundColor={HomeStyle.statusbar.backgroundColor} />

        <Text style={HomeStyle.titletop}>XTASKS</Text>
        <Text style={HomeStyle.datetime}>{DateFunctions.getFormattedDate()}</Text>
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


            onChangeText={(text) => setTaskInput(text)}


            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
          /> 

          <TouchableOpacity
            style={HomeStyle.btnitask}
            onPress={() => {
              DataBase.CreateItemDataBase(taskInput);
              setTaskInput('');
              setFocused(false);
              handleRefresh();
            }}
          >

            <View style={HomeStyle.btnitask_line1} ></View>
            <View style={HomeStyle.btnitask_line2} ></View>

          </TouchableOpacity>

        </View>

        <Text style={HomeStyle.pendente}>Pendentes:</Text>
          
        <ScrollView style={HomeStyle.roll_tasks}>

          

          {/* List of tasks*/}
          {
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
              >
                <Image
                  source={require('./3_imgs/deleteicon.png')}
                  style={HomeStyle.deleteicon}
                />


              </TouchableOpacity>

            </View>
          }

        </ScrollView>

      </SafeAreaView>
        
      <TouchableOpacity style={HomeStyle.cleantasks}>
        <Text style={HomeStyle.cleantasks_text}>apagar todas as tarefas</Text>
      </TouchableOpacity>

    </View>

  );
};
// ----------------------------------------------------------------------