// Ultimo dia da semana NextLevelWeek

//Importando o modulo do sql
const Database = require('sqlite-async')



//Criar as tabelas do banco de dados
function execute(db) {
    
   return  db.exec(`
        CREATE TABLE IF NOT EXISTS proffys (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT,
            avatar TEXT,
            whattsapp TEXT,
            bio TEXT
        );
    
        CREATE TABLE IF NOT EXISTS classes(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            subject INTEGER,
            cost TEXT,
            proffy_id INTEGER
        );

        CREATE TABLE IF NOT EXISTS class_schedule (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            class_id INTEGER,
            weekday INTEGER,
            time_from INTEGER,
            time_to INTEGER
        );
     
   `)
}

//Abrindo o banco de dados na pasta especifica e depois abrir a funcao e receber a exportação para test.js
module.exports = Database.open(__dirname + '/database.sqlite').then(execute)