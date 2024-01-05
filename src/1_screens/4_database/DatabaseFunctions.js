import SQLite from 'react-native-sqlite-storage';

const db = SQLite.openDatabase({ name: 'tarefas.db', location: 'default' });

export const openDatabaseAndCreateTable = () => {

  db.transaction((tx) => {
    tx.executeSql(
      'CREATE TABLE IF NOT EXISTS lista_tarefas (id INTEGER PRIMARY KEY AUTOINCREMENT, tarefa TEXT NOT NULL)',
      [],
      (tx, results) => {
        console.log('Tabela criada com sucesso');
      },
      (error) => {
        console.error('Erro ao criar a tabela', error);
      }
    );
  });
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
        'SELECT * FROM lista_tarefas',
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