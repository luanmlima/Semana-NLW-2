//Procurar o botao
document.querySelector('#add-time').addEventListener('click', cloneField);


//Executar uma acao
function cloneField() {

    //duplicar os campos
    const newFieldContainer = document.querySelector('.schedule-items').cloneNode(true);

    //limpar os campos
    const fields = newFieldContainer.querySelectorAll('input');

   fields.forEach((field) => {
       //pega o field e deixa ele vazio
       field.value="";
   })

    //Colocar na página 
    document.querySelector('#schedule-items').appendChild(newFieldContainer)

}