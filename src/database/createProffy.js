//Esse arquivo é reponsável por criar a lógica de inserir dados no banco de dados

//Criando e exportando uma função que recebe o banco de dados e os parametros
module.exports = async function (db, { proffyValue, classValue, classScheduleValues }) {
    // .run Vai esperar a function terminar seu trabalho e depois partir para a proxima linha
    // Inserir dados na tabela de teachears
    const insertedProffy = await db.run(`
            INSERT INTO proffys (
                name,
                avatar,
                whattsapp,
                bio

            ) VALUES (
                "${proffyValue.name}",
                "${proffyValue.avatar}",
                "${proffyValue.whattsapp}",
                "${proffyValue.bio}"
            );

  `)

    const proffy_id = insertedProffy.lastID

    //  Inserir dados na tabela Classes
    const insertedClass = await db.run(`
        INSERT INTO classes(
                subject,
                cost,
                proffy_id
        ) VALUES(
            "${classValue.subject}",
            "${classValue.cost}",
            "${proffy_id}"

        );

    
    `)

    const class_id = insertedClass.lastID

    // Inserir dados na tabela classScheduleValue
    const insertedAllClassScheduleValues = classScheduleValues.map((classScheduleValue) => {
        return db.run(`
            INSERT INTO class_schedule(
            class_id,
            weekday,
            time_from,
            time_to
        
            ) VALUES(
            "${class_id}",
            "${classScheduleValue.weekday}",
            "${classScheduleValue.time_from}",
            "${classScheduleValue.time_to}"
            )
          
        `)

    })

    //O promisse é um promessa de que ele vai tentar executar a funcionalidade de inserção no banco de dados 
    // await Promise.all(insertedAllClassScheduleValues)



}