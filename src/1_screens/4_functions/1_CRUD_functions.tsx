import SQLite from 'react-native-sqlite-storage';

// config db local
// -------------------------------------------------------
const db_name = 'tarefas';
const table_name = 'lista_tarefas';
const column_name_1 = 'tarefa';
const column_name_2 = 'descricao';
// -------------------------------------------------------


// db connection
// -------------------------------------------------------
const db = SQLite.openDatabase({ name: `${db_name}.db`, location: 'default' });
// -------------------------------------------------------

// delete all tasks
// -------------------------------------------------------
export const deletAll = () => {
  db.transaction(
      (tx) => {
          tx.executeSql(
          `DELETE FROM ${table_name}`,
          );
      }
  );
};
// -------------------------------------------------------

// create database, table and column
// -------------------------------------------------------
export const openDatabaseAndCreateTable = () => {
  db.transaction(
    (tx) => {
      tx.executeSql(
        `CREATE TABLE IF NOT EXISTS ${table_name} (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          ${column_name_1} TEXT CHECK(LENGTH(${column_name_1}) <= 250),
          ${column_name_2} TEXT CHECK(LENGTH(${column_name_2}) <= 1000)
        )`,
      );
    }
  );
};
// -------------------------------------------------------

// read data from db
// -------------------------------------------------------
export const ReadDataBase = () => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        `SELECT * FROM ${table_name}`,
        [],
        (tx, results) => {
          const data = [];

          for (let i = 0; i < results.rows.length; i++) {
            data.push(results.rows.item(i));
          }

          resolve(data);
        },
        (error) => {
          reject(error);
        }
      );
    });
  });
};
// -------------------------------------------------------

// create item in db
// -------------------------------------------------------
export const CreateItemDataBase = (task: string, description: string) => {

    if (task.trim() === '') {
    
    } else {

      db.transaction((tx) => {
          tx.executeSql(
            `INSERT INTO ${table_name} (${column_name_1}, ${column_name_2}) VALUES (?, ?)`,
          [task, description],
          );
      });

    };
    
};
// -------------------------------------------------------

// delete item db
// -------------------------------------------------------
export const deleteItemFromDatabase = (itemId) => {
  db.transaction((tx) => {
    tx.executeSql(
      `DELETE FROM ${table_name} WHERE id = ?`,
      [itemId],
    );
  });
};
// -------------------------------------------------------