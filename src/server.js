//Dados
const proffys = [
    {
        name: "Luan Martins",
        avatar: "https://avatars1.githubusercontent.com/u/63361367?s=460&u=2f6c4281f6bd4ae8d598bd9f630157dc1983b304&v=4",
        Whattsapp: "869547856",
        bio: 'Professor de história durante 25 anos.<br><br>Apaixonado por entender como a história é importante para a vida da humanidade como um todo.',
        subject: "Historia",
        cost: '50,00',
        weekday: [0],
        time_from: [720],
        time_to: [1220]
    },
    {
        name: "Frantiele",
        avatar: "/imagens/Frantiele.jpg",
        whattsapp: "869547856",
        bio: 'Professa de fonoaudiologia, ama musica, e ama ajudar pessoas, com experiencia de 25 anos no mercado cuidando e formando profissionais pelo mundo.',
        subject: "Fonoaudiologia",
        cost: '50,00',
        weekday: [1],
        time_from: [720],
        time_to: [1220]
    },
    {
        name: "Juliano",
        avatar: "/imagens/juju.jpg",
        whattsapp: "869547856",
        bio: 'Amante de esportes e tudo que se relaciona, com uma formação profunda e uma vasta experiencia, Juliano é um dos melhores professores de educação física da atualidade, formando muitos atletas profissionais e até campeões.',
        subject: "Professor de Educação Física",
        cost: '50,00',
        weekday: [2],
        time_from: [720],
        time_to: [1220]
    }

]

const subjects = [
    "Artes",
    "Biologia",
    "Ciências",
    "Educação Física",
    "Física",
    "Geografia",
    "História",
    "Matemática",
    "Português",
    "Química",
]

const weekdays = [
    
    "Domingo",
    "Segunda-Feira",
    "Terça-Feira",
    "Quarta-Feira",
    "Quinta-Feira",
    "Sexta-Feira",
    "Sábado",
]

//Funcionalidades
function getSubject(subjectNumber){
    const position = +subjectNumber - 1
  return subjects[position]
}


function pageLanding(req, res) {
    return res.render("index.html")
}

function pageStudy(req, res) {
    const filters = req.query
    return res.render("study.html", { proffys, filters, subjects, weekdays })
}

function pageGiveClasses(req, res) {
    const data = req.query

    const isNotEmpty = Object.keys(data).length > 0
    if(isNotEmpty){
        data.subject = getSubject(data.subject)
        proffys.push(data)
        return res.redirect("/study")
    }
    return res.render("give-classes.html", {subjects, weekdays})
}


//Servidor
const express = require('express')
const server = express()


// Configurar nunjucks template engine
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})

//Inicio e configuração do servidor
server
    // Configurar arquivos estaticos (css, arquivos, imagens)
    .use(express.static("public"))
    // configurar rotas da aplicação
    .get("/", pageLanding)
    .get("/study", pageStudy)
    .get("/give-classes", pageGiveClasses)
    .listen(5500)