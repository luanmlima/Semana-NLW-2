// Importando o Banco de dados do aquivo db.js
const Database = require('./db')
const createProffy = require('./createProffy')


Database.then(async (db) => {
    //Inserir dados
    proffyValue = {
        name: "Luan Martins",
        avatar: "https://avatars1.githubusercontent.com/u/63361367?s=460&u=2f6c4281f6bd4ae8d598bd9f630157dc1983b304&v=4",
        whattsapp: "86957856",
        bio: 'Professor de história durante 25 anos.<br><br>Apaixonado por entender como a história é importante para a vida da humanidade como um todo.',

    }

    classValue = {
        subject: 1,
        cost: '50,00'
        //proffy id virá pelo banco de dados
    }

    classScheduleValues = [
        {
            weekday: 1,
            time_from: 720,
            time_to: 1220
            //class_id id virá pelo banco de dados após cadastrarmos a aula
        },
        {
            weekday: 0,
            time_from: 520,
            time_to: 1220
        }
    ]

    //await createProffy(db, {proffyValue, classValue, classScheduleValues})

    //Consultar dados inserido

    
    //---Consulta de dados inseridos---


    //Todos os proffys
    const selectedProffys = await db.all("SELECT * FROM proffys")
    //  console.log(selectedProffys)
     
    //Consultar as classes de um determinado professor e trazer os dados do professor
    const selectClassesAnsProffys = await db.all(`
    SELECT classes.*, proffys.*
    FROM proffys
    JOIN classes ON (classes.proffy_id = proffys.id)
    WHERE classes.proffy_id = 1;
    `)
    // console.log(selectClassesAnsProffys)

    // imagina que o professor trabalha das 8h as 18h
    // 8h é o time_from e 18h é o time_to
    //entao o horario do time_from precisa ser menor ou igual ao horario solicitado

    const selectClassesSchedules = await db.all(`
    SELECT class_schedule.*
    FROM class_schedule
    WHERE class_schedule.class_id = "1"
    AND class_schedule.weekday = "0"
    AND class_schedule.time_from <= "520"
    AND class_schedule.time_to > "520"


    `)

    console.log(selectClassesSchedules)
})