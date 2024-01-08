import React, { useState, useEffect } from 'react';
import { StatusBar, View, SafeAreaView, Text, TextInput, TouchableOpacity, ScrollView, Image } from 'react-native';
import * as DataBase from './4_functions/1_CRUD_functions';
import * as DateFunctions from './4_functions/DateFunctions';
import HomeStyle from './1_stylesheet/HomeStyle';

// Adicionando o componente TaskList
const TaskList = ({ tasks }) => (
  <>
    {tasks.map((item, index) => (
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
        >
          <Image
            source={require('./3_imgs/deleteicon.png')}
            style={HomeStyle.deleteicon}
          />
        </TouchableOpacity>
      </View>
    ))}
  </>
);

export default () => {
  const [isFocused, setFocused] = useState(false);
  const [taskInput, setTaskInput] = useState('');
  const [refreshInput, setRefreshInput] = useState(0);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchData();
  }, [refreshInput]);

  async function fetchData() {
    try {
      const result = await DataBase.ReadDataBase();
      setTasks(result);
    } catch (error) {
      console.error('Erro ao obter dados:', error);
    }
  }

  const handleRefresh = () => {
    setRefreshInput((prevCount) => prevCount + 1);
  };

  return (
    <View key={refreshInput} style={HomeStyle.allcontent}>
      <SafeAreaView style={HomeStyle.safeareaview}>
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
          <TaskList tasks={tasks} />
        </ScrollView>
      </SafeAreaView>

      <TouchableOpacity style={HomeStyle.cleantasks}>
        <Text style={HomeStyle.cleantasks_text}>apagar todas as tarefas</Text>
      </TouchableOpacity>
    </View>
  );
};