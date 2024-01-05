import React from 'react';
import HomeScreen from './1_screens/1_HomeScreen';

// database
import * as Database from './1_screens/4_database/DatabaseFunctions';


const App = () => {

  // create db if not exists
  Database.openDatabaseAndCreateTable();
  Database.carregarTarefas();

  return (
    <HomeScreen />
  );

};

export default App;