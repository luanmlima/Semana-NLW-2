//Servidor
const express = require('express')
const server = express()
const {
    pageLanding,
    pageStudy,
    pageGiveClasses,
    saveClasses
} = require('./pages')

// Configurar nunjucks template engine
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})

//Inicio e configuração do servidor
server
    //receber os dados do req.body
    .use(express.urlencoded({extended: true}))

    // Configurar arquivos estaticos (css, arquivos, imagens)
    .use(express.static("public"))
    // configurar rotas da aplicação
    .get("/", pageLanding)
    .get("/study", pageStudy)
    .get("/give-classes", pageGiveClasses)
    .post("/save-classes", saveClasses)
    .listen(5500)