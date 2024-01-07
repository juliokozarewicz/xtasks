import SQLite from 'react-native-sqlite-storage';

// config db local
// -------------------------------------------------------
const db_name = 'tarefas';
const table_name = 'lista_tarefas';
const column_name_1 = 'tarefa';
// -------------------------------------------------------


// db connection
// -------------------------------------------------------
const db = SQLite.openDatabase({ name: `${db_name}.db`, location: 'default' });
// -------------------------------------------------------


/*
// **** teste inserção db
// -------------------------------------------------------
db.transaction(
    (tx) => {
        tx.executeSql(
        `DELETE FROM ${table_name}`,
        );
    }
);
// -------------------------------------------------------
*/

// create database, table and column
// -------------------------------------------------------
export const openDatabaseAndCreateTable = () => {
  db.transaction(
    (tx) => {
      tx.executeSql(
        `CREATE TABLE IF NOT EXISTS ${table_name} (id INTEGER PRIMARY KEY AUTOINCREMENT, ${column_name_1} TEXT NOT NULL)`,
      );
    }
  );
};
// -------------------------------------------------------


// read data from db
// -------------------------------------------------------
export const ReadDataBase = (callback) => {
    db.transaction(tx => {
    tx.executeSql(
        `SELECT ${column_name_1} FROM ${table_name}`,
        [],
        (tx, results) => {
            const data = [];
            
            for (let i = 0; i < results.rows.length; i++) {
                data.push(results.rows.item(i)[column_name_1]);
            }

            callback(data);
        }
    );
    });
};
// -------------------------------------------------------

// create item in db
// -------------------------------------------------------
export const CreateItemDataBase = (task) => {

    db.transaction((tx) => {
        tx.executeSql(
        `INSERT INTO ${table_name} (${column_name_1}) VALUES (?)`,
        [`${task}`],
        );
    });
    
};
// -------------------------------------------------------