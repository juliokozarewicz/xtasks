import SQLite from 'react-native-sqlite-storage';

// config db local
const db_name = 'tarefas';
const table_name = 'lista_tarefas';

const db = SQLite.openDatabase({ name: `${db_name}.db`, location: 'default' });

export const openDatabaseAndCreateTable = () => {
  db.transaction(
    (tx) => {
      tx.executeSql(
        `CREATE TABLE IF NOT EXISTS ${table_name} (id INTEGER PRIMARY KEY AUTOINCREMENT, tarefa TEXT NOT NULL)`,
      );
    }
  );
};







export const inserirTarefasIniciais = () => {
    const tarefasIniciais = ['Tarefa1', 'Tarefa2', 'Tarefa3'];
    tarefasIniciais.forEach((tarefa) => {
    db.transaction((tx) => {
        tx.executeSql(
        'INSERT INTO lista_tarefas (tarefa) VALUES (?)',
        [tarefa],
        (tx, results) => {
            console.log('Dados inseridos com sucesso');
        },
        (error) => {
            console.error('Erro ao inserir dados', error);
        }
        );
    });
    });
};

export const carregarTarefas = () => {
    db.transaction((tx) => {
    tx.executeSql(
        `SELECT * FROM ${table_name}`,
        [],
        (tx, results) => {
        const rows = results.rows.raw();
        console.log('Tarefas carregadas:', rows);
        },
        (error) => {
        console.error('Erro ao buscar dados', error);
        }
    );
    });
};