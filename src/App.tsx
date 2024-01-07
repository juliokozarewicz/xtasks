import React from 'react';
import HomeScreen from './1_screens/1_HomeScreen';

// database
import * as DataBase from './1_screens/4_functions/1_databse_functions';


const App = () => {

  // create db if not exists
  DataBase.openDatabaseAndCreateTable();
  
  DataBase.ReadDataBase(result => {
    console.log(result);
  });

  DataBase.ReadDataBase();

  return (
    <HomeScreen />
  );

};

export default App;