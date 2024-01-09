// import from react
import React, { useState, useEffect } from 'react';

// import components
import {
  StatusBar,
  View,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  ScrollView,
  Image,
  } from 'react-native';

// import databse CRUD
import * as DataBase from './4_functions/1_CRUD_functions';

// import date formats
import * as DateFunctions from './4_functions/DateFunctions';

// import style sheet
import HomeStyle from './1_stylesheet/HomeStyle';



// Tasklist component
// ----------------------------------------------------------------------------------------------
const TaskList = ({ tasksvar, handleDeleteItem, handleRefresh }) => (
  <>
    {
      tasksvar.length === 0 ? (
        <Text style={HomeStyle.zeroitens}>Sem tarefas pendentes! Adicione novos itens...</Text>
      )

      :

      tasksvar.map((item, index) => (
        <View key={index} style={HomeStyle.taskinserted}>
          <View style={HomeStyle.taskdescript}>
            <Text
              style={HomeStyle.taskdescript_txt}
              numberOfLines={1}
              ellipsizeMode="tail"
            >
              {item.tarefa.charAt(0).toUpperCase() + item.tarefa.slice(1).toLowerCase()}
            </Text>
          </View>

          <TouchableOpacity
            style={HomeStyle.btndeletetask}
            onPress={
              () => {
                handleDeleteItem(item.id);
                handleRefresh();
              }
            }
          >
            <Image
              source={require('./3_imgs/deleteicon.png')}
              style={HomeStyle.deleteicon}
            />
          </TouchableOpacity>
        </View>
      ))
    }
  </>
);
// ----------------------------------------------------------------------------------------------

// load screen component
// ----------------------------------------------------------------------------------------------
const LoadScreen = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3000);

    return () => clearTimeout(timer);

  }, []);

  return (
    <>
      {isVisible ? (
        <View style={HomeStyle.loadscreen}>
          <Image
            source={require('./3_imgs/logo.png')}
            style={HomeStyle.loadscreenlogo}
          />
          <Text style={HomeStyle.loadscreenText}>Aguarde...</Text>
        </View>
      ) : null}
    </>
  );
};
// ----------------------------------------------------------------------------------------------

// delete all screen
// ----------------------------------------------------------------------------------------------
const DeleteAll = ({ handleRefresh }) => {  
  const [dellAll, setDellAll] = useState(false);

  const handleDeleteAll = () => {
    setDellAll(true);
  };

  const excludeAllconfirm = () => {
    DataBase.deletAll();
    handleRefresh();
    setDellAll(false);
  };

  const notexcludeAllconfirm = () => {
    handleRefresh();
    setDellAll(false);
  };

  return (
    <>
      {dellAll ? (
        <View style={ dellAll ? HomeStyle.framedeleteall : null}>
          <TouchableWithoutFeedback onPress={() => notexcludeAllconfirm()}>
            <View style={HomeStyle.backgrounddeleteall}>
              <Text style={HomeStyle.backgrounddeletealltxt}>Fechar  [ x ]</Text>
            </View>
          </TouchableWithoutFeedback>
          <View style={HomeStyle.boxmessagedeleteaall}>
            <Text style={HomeStyle.boxmessagedeleteaalltitle}>Deseja realmente apagar todas as tarefas?</Text>
            <TouchableOpacity style={HomeStyle.deleteallbtnconfirm} onPress={() => excludeAllconfirm()}>
              <Text style={HomeStyle.deleteallbtnconfirmtext}>apagar tudo</Text>
            </TouchableOpacity>
          </View>
        </View>
      )
      
      :

        <TouchableOpacity style={HomeStyle.cleantasks} onPress={() => setDellAll(true) }>
          <Text style={HomeStyle.cleantasks_text}>apagar todas as tarefas</Text>
        </TouchableOpacity>}
    </>
  );
};
// ----------------------------------------------------------------------------------------------

// App
// ----------------------------------------------------------------------------------------------
export default () => {

  // input task
  // --------------------------------------------------
  const [isFocused, setFocused] = useState(false);
  const [taskInput, setTaskInput] = useState('');
  const [refreshInput, setRefreshInput] = useState(0);
  // --------------------------------------------------

  // Refresh
  // --------------------------------------------------
  const handleRefresh = () => {
    setRefreshInput((prevCount) => prevCount + 1);
  };
  // --------------------------------------------------

  // get data from db
  // --------------------------------------------------
  const [tasks, setTasks] = useState([]);

  async function fetchData() {
    try {
      const result = await DataBase.ReadDataBase();
      setTasks(result);
    } catch (error) {
      console.error('Erro ao obter dados:', error);
    }
  }

  useEffect(() => {
    fetchData();
  }, [refreshInput]);
  // --------------------------------------------------

  return (

    <View style={HomeStyle.allcontent}>

      <LoadScreen />

      <SafeAreaView key={refreshInput} style={HomeStyle.safeareaview}>
        <StatusBar barStyle="dark-content" backgroundColor={HomeStyle.statusbar.backgroundColor} />
        <Text style={HomeStyle.titletop}>XTASKS</Text>
        <Text style={HomeStyle.datetime}>{DateFunctions.getFormattedDate()}</Text>
        <Text style={HomeStyle.texts}>Agora você organiza a sua vida! Adicione novos itens e se mantenha no controle.</Text>

        <View style={HomeStyle.frame_itask}>
          <TextInput
            style={[
              HomeStyle.itask,
              isFocused ? HomeStyle.itaskFocused : null,
            ]}
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
            <View style={HomeStyle.btnitask_line1}></View>
            <View style={HomeStyle.btnitask_line2}></View>
          </TouchableOpacity>
        </View>

        <Text style={HomeStyle.pendente}>Pendentes:</Text>
        <ScrollView style={HomeStyle.roll_tasks}>
          {/* List of tasks*/}
          <TaskList
            tasksvar={tasks}
            handleDeleteItem={DataBase.deleteItemFromDatabase}
            handleRefresh={handleRefresh}
          />
        </ScrollView>
      </SafeAreaView>

      <DeleteAll handleRefresh={handleRefresh} />

    </View>
  );
};
// ----------------------------------------------------------------------------------------------