import React from 'react';
import HomeScreen from './1_screens/1_HomeScreen';

// database
import * as Databse from './1_screens/4_database/DatabaseFunctions';


const App = () => {

  Databse.openDatabaseAndCreateTable();
  // Databse.inserirTarefasIniciais();
  Databse.carregarTarefas();

  return (
    <HomeScreen />
  );

};

export default App;