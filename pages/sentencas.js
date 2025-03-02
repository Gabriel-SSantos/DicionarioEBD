let sentecas = document.getElementsByTagName('section')[0]
let significados = document.getElementById('significado')
let palavraSignificado = document.getElementById('tituloPalavra')
let textoSignificado = document.getElementsByClassName('texto')[0]

let textoVerso = document.getElementsByClassName('texto')[1]

var listaSentencas = [
    {
        sentenca:"Allos",id:"0",
        significados: ["Palavra grega que significa que duas ou mais coisas ou espécies são da mesma natureza, da mesma qualidade.", "Não confundir com 'heteros' (diferente)"],
        biblia: ["E eu rogarei ao Pai, e ele vos dará outro Consolador, para que fique convosco para sempre; (João 14.16) [allos parákletos]"]
    },

    {
        sentenca:"Consolador",id:"1",
        significados: ["O que consola.","do grego Parakletos", "pode significar 'alguém chamado para defender outra pessoa'", "advocatus (Latim)"],
        biblia: ["E eu rogarei ao Pai, e ele vos dará outro Consolador, para que fique convosco para sempre; (João 14.16) [parákletos]"]},

    {
        sentenca:"homoousios",id:"2",
        significados: ["mesma substancia", "homo (mesmo) + Ousious(substância ou ser)", "termo introduzido no concílio de Niceia de 325 para dizer que o Filho é consubstancial (homoousios) ao Pai"],
        biblia: ["O termo não aparece na bíblia, mas foi usado para explicar a unidade do Pai com Filho manifestada na bíblia"]},
    {
        sentenca:"Parácleto",id:"3",
        significados: ["Nome dado ao Espírito Santo nos evangelhos","Aquele que defende e protege outra pessoa; mentor, defensor, consolador, intercessor, ajudador.", "Do grego parákletos; pará(ao lado de) + kletos(chamar)"],
        biblia: ["E eu rogarei ao Pai, e ele vos dará outro Consolador, para que fique convosco para sempre; (João 14.16) [parákletos]","Mas aquele Consolador, o Espírito Santo, que o Pai enviará em meu nome, esse vos ensinará todas as coisas, e vos fará lembrar de tudo quanto vos tenho dito. (Jo 14.26)","Mas, quando vier o Consolador, que eu da parte do Pai vos hei de enviar, aquele Espírito de verdade, que procede do Pai, ele testificará de mim.(Jo 15.26)","Todavia digo-vos a verdade, que vos convém que eu vá; porque, se eu não for, o Consolador não virá a vós; mas, quando eu for, vo-lo enviarei.(Jo 16.7)","Meus filhinhos, estas coisas vos escrevo, para que não pequeis; e, se alguém pecar, temos um Advogado para com o Pai, Jesus Cristo, o justo.(1 Jo 2.1)"]},
    {
        sentenca:"Pneuma",id:"4",
        significados: ["entre os antigos pensadores gregos, sobretudo os estoicos, designativo do espírito, sopro animador ou força criadora, pela razão divina para vivificar e dirigir todas as coisas.","ETIM(1635) rad. do nom. do grego pneûma,atos 'vento; sopro divino, espírito'","pode se referir ao Espírito Santo"],
        biblia: ["Ora , o nascimento de Jesus Cristo foi assim : estando Maria , sua mãe , desposada com José , sem que tivessem antes coabitado , achou-se grávida pelo Espírito Santo (Mateus 1.18)","Bem-aventurados os humildes de espírito , porque deles é o reino dos céus. (Mateus 5.3)","Não obstante , alegrai-vos , não porque os espíritos se vos submetem , e sim porque o vosso nome está arrolado nos céus.(Lucas 10.20)"]},
    
        {sentenca:"rûah",id:"4",
        significados: ["do Hebraico","Vento,sopro, espírito, espírito de uma pessoa, espírito de um deus, mente","rûah foi traduzido para o Grego como pneuma e anemos 'vento'"],
        biblia: ["A palavra aparece no antigo testamento nas expressões 'Espírito de Deus'(rûah elohîm), Espírito do SENHOR e Espírito Santo(Sl 5 1.11 [13]; Is 63.10,11)"]},
    
]
function gerarSentencas(){
    let b = document.createElement('button')
    for(i=0;i<listaSentencas.length;i++){
        sentecas.innerHTML += `<button onclick="next(${i})"> ${listaSentencas[i].sentenca}</button>`
        // sentecas.insertBefore(b,sentecas.children[i])
    }
}

function next(i){
    textoSignificado.innerHTML = ""
    textoVerso.innerHTML = ""
    sentecas.style.display = "none"
    significados.style.display = "block"
    palavraSignificado.innerText = `${listaSentencas[i].sentenca}`

    for(j=0;j<listaSentencas[i].significados.length;j++){
        textoSignificado.innerHTML += `<p>${listaSentencas[i].significados[j]}</p>`
    }
    for(j=0;j<listaSentencas[i].biblia.length;j++){
        textoVerso.innerHTML += `<p>${listaSentencas[i].biblia[j]}</p>`
    }

}

function voltar(){

    sentecas.style.display = "flex"
    significados.style.display = "none"
}
function inicio(){
    window.location.href= '../index.html'
}