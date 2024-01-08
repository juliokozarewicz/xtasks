// import from react
import React from 'react';

// import components
import {
  StatusBar,
  View,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
  Alert,
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

// load screen
// ----------------------------------------------------------------------------------------------
const LoadScreen = () => {
  const [isVisible, setIsVisible] = React.useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false); // Define isVisible como false após 2 segundos
    }, 3000);

    // Limpa o timer se o componente for desmontado antes do término
    return () => clearTimeout(timer);

  }, []); // O array de dependências vazio garante que o useEffect seja executado apenas uma vez ao montar o componente

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


// App
// ----------------------------------------------------------------------------------------------
export default () => {

  // input task
  // --------------------------------------------------
  const [isFocused, setFocused] = React.useState(false);
  const [taskInput, setTaskInput] = React.useState('');
  const [refreshInput, setRefreshInput] = React.useState(0);
  // --------------------------------------------------

  // Refresh
  // --------------------------------------------------
  const handleRefresh = () => {
    setRefreshInput((prevCount) => prevCount + 1);
  };
  // --------------------------------------------------

  // get data from db
  // --------------------------------------------------
  const [tasks, setTasks] = React.useState([]);

  async function fetchData() {
    try {
      const result = await DataBase.ReadDataBase();
      setTasks(result);
    } catch (error) {
      console.error('Erro ao obter dados:', error);
    }
  }

  React.useEffect(() => {
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
          <TaskList tasksvar={tasks}  handleDeleteItem={DataBase.deleteItemFromDatabase} handleRefresh={handleRefresh} />
        </ScrollView>
      </SafeAreaView>

      <TouchableOpacity style={HomeStyle.cleantasks} onPress={() => {DataBase.deletAll(); handleRefresh()}}>
        <Text style={HomeStyle.cleantasks_text}>apagar todas as tarefas</Text>
      </TouchableOpacity>
    </View>
  );
};
// ----------------------------------------------------------------------------------------------