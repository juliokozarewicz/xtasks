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



// External components (INIT)
// ===============================

// Tasklist component
// ----------------------------------------------------------------------------------------------
const TaskList = ({ tasksvar, setDellOne, setItemState, setUpdate }) => (
  <>
    {

      tasksvar.length === 0 ? (
        <Text style={HomeStyle.zeroitens}>Sem tarefas pendentes! Adicione novos itens...</Text>
      )

      :

      tasksvar.map((item, index) => (
        <View key={index} style={HomeStyle.taskinserted}>
          <TouchableOpacity
            style={HomeStyle.taskdescript}
            onPress={() => {
              setUpdate(true);
              setItemState(
                  {
                    "tarefa": item.tarefa,
                    "id": item.id,
                    "description": item.description,
                  });
            }}
          >
            <Text
              style={HomeStyle.taskdescript_txt}
              numberOfLines={1}
              ellipsizeMode="tail"
            >
              {item.tarefa.charAt(0).toUpperCase() + item.tarefa.slice(1).toLowerCase()}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={HomeStyle.btndeletetask}
            onPress={
              () => {
                setDellOne(true);
                setItemState(
                  {
                    "tarefa": item.tarefa,
                    "id": item.id,
                  });
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

      {
      
        isVisible ? (
          <View style={HomeStyle.loadscreen}>
            <Image
              source={require('./3_imgs/logo.png')}
              style={HomeStyle.loadscreenlogo}
            />
            <Text style={HomeStyle.loadscreenText}>Aguarde...</Text>
          </View>
        )
      
      : 
      
        null
      
      }

    </>

  );

};
// ----------------------------------------------------------------------------------------------

// delete all screen
// ----------------------------------------------------------------------------------------------
const DeleteAll = ({ handleRefresh, dellAll, setDellAll }) => {  

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

      {
      
      dellAll ? (
        <View style={HomeStyle.framedeleteall}>
          <TouchableWithoutFeedback onPress={() => notexcludeAllconfirm()}>
            <View style={HomeStyle.backgrounddeleteall}>
              <Text style={HomeStyle.backgrounddeletealltxt}>Fechar  [ x ]</Text>
            </View>
          </TouchableWithoutFeedback>
          <View style={HomeStyle.boxmessagedeleteaall}>
            <Image
              source={require('./3_imgs/deleteicon.png')}
              style={HomeStyle.deleteiconall}
            />
            <Text style={HomeStyle.boxmessagedeleteaalltitle}>Deseja realmente apagar todas as tarefas?</Text>
            <TouchableOpacity style={HomeStyle.deleteallbtnconfirm} onPress={() => excludeAllconfirm()}>
              <Text style={HomeStyle.deleteallbtnconfirmtext}>apagar tudo</Text>
            </TouchableOpacity>
            <TouchableOpacity style={HomeStyle.cancelalllbtnconfirm} onPress={() => notexcludeAllconfirm()}>
              <Text style={HomeStyle.cancelalllbtnconfirmtxt}>cancelar</Text>
            </TouchableOpacity>
          </View>
        </View>
      )

      :

        null
        
        }

    </>

  );
  
};
// ----------------------------------------------------------------------------------------------

// delete one
// ----------------------------------------------------------------------------------------------
const DeleteOneItem = ({dellOne, setDellOne, handleRefresh, item}) => {

  const excludeAllconfirm = () => {
    DataBase.deleteItemFromDatabase(item.id);
    handleRefresh();
    setDellOne(false);
  };

  const notexcludeAllconfirm = () => {
    handleRefresh();
    setDellOne(false);
  };


  return (
    <>

      {
      
      dellOne ? (
        <View style={ HomeStyle.framedeleteall }>
          <TouchableWithoutFeedback onPress={() => notexcludeAllconfirm()}>
            <View style={HomeStyle.backgrounddeleteall}>
              <Text style={HomeStyle.backgrounddeletealltxt}>Fechar  [ x ]</Text>
            </View>
          </TouchableWithoutFeedback>
          <View style={HomeStyle.boxmessagedeleteaall}>
            <Image
              source={require('./3_imgs/deleteicongreen.png')}
              style={HomeStyle.deleteiconall}
            />
            <Text style={HomeStyle.boxmessagedeleteaalltitle}>A tarefa foi concluída?</Text>
            <Text
              numberOfLines={2}
              ellipsizeMode="tail"
              style={HomeStyle.boxmessagedeleteaOnetitle}>
                "{item.tarefa}"
            </Text>
            <TouchableOpacity style={HomeStyle.deleteOnebtnconfirm} onPress={() => excludeAllconfirm()}>
              <Text style={HomeStyle.deleteallbtnconfirmtext}>apagar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={HomeStyle.cancelalllbtnconfirm} onPress={() => notexcludeAllconfirm()}>
              <Text style={HomeStyle.cancelalllbtnconfirmtxt}>cancelar</Text>
            </TouchableOpacity>
          </View>
        </View>
      )

      :

        null
        
      }

    </>

  );

};
// ----------------------------------------------------------------------------------------------










// update tasks
// ----------------------------------------------------------------------------------------------
const UpdateTask = ({update, setUpdate, handleRefresh, item, setFocused}) => {

  const [updatetxt, setUpdatetxt] = useState();

  useEffect(() => {
    setUpdatetxt(item.tarefa);
  }, [item.tarefa]);

  const notUpdate = () => {
    setUpdate(false);
    setFocused(false);
    handleRefresh();
  };

  return (

    <>

      {

      update ? (
        <View style={ HomeStyle.framedeleteall }>
          <TouchableWithoutFeedback onPress={ () => notUpdate()}>
            <View style={HomeStyle.backgrounddeleteall}>
              <Text style={HomeStyle.backgrounddeletealltxt}>Fechar  [ x ]</Text>
            </View>
          </TouchableWithoutFeedback>
          <View style={HomeStyle.boxmessageupdate}>
            <Image
              source={require('./3_imgs/editicon.png')}
              style={HomeStyle.updateicon}
            />
            <Text style={HomeStyle.boxmessagedeleteaalltitle}>Deseja fazer alterações?</Text>





            <TextInput
            style={[
              HomeStyle.itaskupdate,
              //isFocused ? HomeStyle.itaskFocused : null,
            ]}
              value={updatetxt}
              placeholder='Insira uma tarefa...'
              placeholderTextColor={HomeStyle.itask_placeholder.color}
              onChangeText={(text) => setUpdatetxt(text)}
              onFocus={() => setFocused(true)}
              onBlur={() => setFocused(false)}
            />




            <TextInput
              style={[
                HomeStyle.itaskupdate2,
                //isFocused ? HomeStyle.itaskFocused : null,
              ]}
                value={item.description}
                placeholder='Insira uma tarefa...'
                placeholderTextColor={HomeStyle.itask_placeholder.color}
                onChangeText={(text) => setUpdatetxt(text)}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
              />

            
            <TouchableOpacity style={HomeStyle.deleteOnebtnconfirm}>
              <Text style={HomeStyle.deleteallbtnconfirmtext}>alterar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={HomeStyle.cancelalllbtnconfirm} onPress={ () => notUpdate()}>
              <Text style={HomeStyle.cancelalllbtnconfirmtxt}>cancelar</Text>
            </TouchableOpacity>
          </View>
        </View>
      )

      :

        null

      }

    </>

  );
};
// ----------------------------------------------------------------------------------------------

// ===============================
// External components (END)


// App
// ----------------------------------------------------------------------------------------------
export default () => {

  // states
  // --------------------------------------------------

    // input task
    const [isFocused, setFocused] = useState(false);
    const [taskInput, setTaskInput] = useState('');
    const [refreshInput, setRefreshInput] = useState(0);

    // dell all itens
    const [dellAll, setDellAll] = useState(false);

    // item for changes or delete
    const [itemState, setItemState] = useState({"tarefa": "", "description": "", "id": "",});

    // dell one
    const [dellOne, setDellOne] = useState(false);

    // update task
    const [update, setUpdate] = useState(false);

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
            setDellOne={setDellOne}
            handleRefresh={handleRefresh}
            setItemState={setItemState}
            setUpdate={setUpdate}
          />
        </ScrollView>
      </SafeAreaView>

      <DeleteAll handleRefresh={handleRefresh} dellAll={dellAll} setDellAll={setDellAll}/>
      <DeleteOneItem handleRefresh={handleRefresh} dellOne={dellOne} setDellOne={setDellOne} item={itemState}/>
      <UpdateTask update={update} setUpdate={setUpdate} handleRefresh={handleRefresh}  item={itemState} isFocused={isFocused} setFocused={setFocused} taskInput={taskInput} setTaskInput={setTaskInput} />

      <TouchableOpacity style={HomeStyle.cleantasks} onPress={() => {setDellAll(true)} }>
          <Text style={HomeStyle.cleantasks_text}>apagar todas as tarefas</Text>
      </TouchableOpacity>

    </View>
  );
};
// ----------------------------------------------------------------------------------------------