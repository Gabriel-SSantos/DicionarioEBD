let doutrinas = document.getElementsByTagName('section')[0]
let cardDoutrina = document.getElementById('cardDoutrina')
let tituloDoutrina = document.getElementById('tituloDoutrina')

let assunto = document.getElementsByClassName('texto')[0]
let textoBiblia = document.getElementsByClassName('texto')[1]

let heresia = document.getElementsByClassName('texto')[2]
let base = document.getElementsByClassName('texto')[3]

var listaDoutrina = [
    {
        sentenca:"Espírito Santo - Verdade Bíblica",
        Assunto: ["O Espírito Santo é a terceira Pessoa da Trindade (Mt 28.19). Aparececomo Deus, no Antigo Testamento, atuando na criação do céu e da terra (Gn1.2; SI 104.30) e do ser humano  (Jó 33.4); inspirando os profetas (2 Pe 1.19-21) e capacitando líderes", "O Novo Testamento registra o início da dispensação da plenitude do Espírito e essa nova era começou com a descida do Espírito Santo, no dia de Pentecostes (At 2.1-11,33). Essa descida do Espírito Santo foi para que Ele ficasse conosco “para sempre”, foi promessa de Jesus para a Dispensação da Igreja (Jo 14.16). A sua manifestação pode ser classificada em duas etapas:antes do Pentecostes, na vida de Jesus; e depois, na vida da Igreja. Ele atuou na concepção virginal de Jesus, no ventre de Maria (Mt 1.18; Lc 1.35) e em todo o ministério terreno de Jesus (At 10.38).","O Espírito Santo é Deus e é pessoal. Como foi dito acerca do Filho, 0 mesmo se diz do Espírito Santo: a Bíblia afirm a de maneira direta que o Espírito Santo é Deus; além disso, revela nEle os atributos exclusivos da divindade bem como as obras de Deus."],
        Biblia:["Êxodo 17.7 comparado com Hebreus 3.7-9. “Porque tentaram o Se­nhor, dizendo: — Está o Senhor no meio de nós ou não?” => “Por isso, como diz o Espírito Santo: “Hoje, se ouvirem a sua voz, não en­ dureçam o coração como foi na rebelião, no dia da tentação no deserto, onde os pais de vocês me tentaram, pondo-me à prova, e viram as minhas obras durante quarenta anos”", "Juizes 15.14 comparado com Juizes 16.20. “Mas 0 Espírito do Senhor de tal maneira se apossou de Sansão, que as cordas que ele tinha nos braços se tornaram como fios de linho queimados, e as amarras que ele tinha nas mãos se soltaram”. => “Então ela gritou: — Sansão, os filisteus vêm vindo aí! Ele despertou do sono e disse consigo mesmo: — Vou sair como nas outras vezes e me livrarei. Mas ele não sabia ainda que o Senhor já se havia retirado dele”.","Atos S-3 A- “Então Pedro disse: — Ananias, por que você permitiu que Sa­tanás enchesse o seu coração, para que você mentisse ao Espírito Santo, retendo parte do valor do campo? Não é verdade que, conservando a pro­priedade, seria sua? E, depois de vendida, o dinheiro não estaria em seu poder? Por que você decidiu fazer uma coisa dessas? Você não mentiu para os homens, mas para Deus”","2Coríntios 3.17,18: “Ora, este Senhor é o Espírito; e onde está o Espírito do Senhor, aí há liberdade. E todos nós, com 0 rosto descoberto, contemplando a glória do Senhor, somos transformados, de glória em glória, na sua própria imagem, como pelo Senhor, que é o Espírito”.",],
        heresias: [
            "O movimento das testemunhas de Jeová nega não somente a divinda­ de do Espírito Santo bem como a sua personalidade e grafa na Tradução do Novo Mundo e nas suas demais publicações o nome “Espírito Santo” com letras minúsculas, assim: “espírito santo”.", 
        ],
        base:[
            "a) O Espírito Santo é onipotente (Zc 4.6; Rm 15.19);",
            "b ) O Espírito Santo é onipresente (SI 139.7-10);",
            "c) O Espírito Santo é onisciente (1 Co 2.10,11);",
            "d) O Espírito Santo é eterno (Hb 9.14);",
            "e) O Espírito Santo é criador (Jó 26.13; 33-4! Sl 104.30);",
            "f) O Espírito Santo gerou Jesus Cristo (Lc 1.35);",
            "g) O Espírito Santo é a verdade (1 Jo 5.6);","h) O Espírito Santo é o Senhor da igreja (At 20.28);",
            "i) O Espírito Santo é chamado de Javé (Jz 15.14 comp. 16.20; Êx 17.7 comp.Hb 3.7-9; Nm 12.6 comp. 2 Pe 1.21; Is 6.9 comp. At 28.25, 26; Ez 8.1,3);",
            "j) O Espírito Santo é aquele que dá a vida eterna (G1 6.8);",
            "k) o Espírito Santo é o guia do seu povo (SI 143.10; Is 63.14; Rm 8.14; G15.18);",
            "l) O Espírito Santo é o santificador dos fiéis (Rm 15.16; 1 Pe 1.2);",
            "m) O Espírito Santo é aquele que habita nos fiéis (Jo 14.17; Rm 8.11; 1 Co 3.16;6.19; 2 Tm 1.14; Tg 4.5);",
            "n) O Espírito Santo é santo (Rm 15.16; 1 Jo 2.20);",
            "o) O Espírito Santo é fonte de poder e de milagres (Mt 12.28; At 2.4; 1 Co12.9-11);",
            "p) O Espírito Santo é o autor do novo nascimento (Jo 3.5,6; Tt 3.5);",
            "q) O Espírito Santo é o autor da vida (Ez 37.14; Rm 8.11-13);",
            "r) O Espírito Santo é o distribuidor dos dons espirituais (1 Co 12.7-11);",
            "s) O Espírito Santo é o conhecedor do coração de todos os seres humanos(Ez 11.5; Rm 8.26,27; 1 Co 12.10; At 5.3-9);",
            "t) O Espírito Santo é conhecedor do futuro (Lc 2.26; Jo 16.13; At 20.23; 1 Tm4.1; 1 Pe 1.11);","u) O Espírito Santo é salvador (Ef 1.13; 4.30; Tt 3.4,5);",
            "v) O Espírito Santo é sábio (Is 11.2; Jo 14.26; E f 1.17)."],
    },
    {
        sentenca:"Arianistas - Hereges",
        Assunto: ["Os arianistas negavam a divindade de Cristo, mas também a do Espírito Santo","Os arianistas consideravam o Espírito uma criatura do Filho"],
        Biblia:["Os arianistas interpretam errôneamente passagens como (Cl 1.15) na qual Jesus é referido como 'primogênito'"],
        heresias: [
            "Para os arianistas 'havia um tempo na qual o Verbo não existia'", 
        ],
        base:[
            "Os arianistas foram considerados hereges, pois negam a divindidade de Jesus e a do Espírito Santo, estes cuja deidade é manifesta nas Escrituras"],
    },{
        sentenca:"Tropicianos - Hereges",
        Assunto: ["Os tropicianos ensinavam ser o Espírito Santo um anjo"],
        Biblia:["Não há base"],
        heresias: [
            "Atanásio(295-373) bispo de Alexandria refutou essa heresia", 
        ],
        base:[
            "Considerando a revelação do Espírito nas Escrituras, seria uma afronta considera-lo uma anjo somente e não consubstancial com Deus Pai e Deus Filho"],
    },
    ,{
        sentenca:"Pneumatomacianos - Hereges",
        Assunto: ["Eram opositores do Espírito", "Esutáqui de Sebaste (300-380) foi o principal defensor dessa heresia","O movimento negava a divindade do Espírito"],
        Biblia:["não há referências"],
        heresias: [
            "Essa heresia foi combatida por Gregório de Nazianzo, ele considerava o termo 'santo', aplicado ao Espírito, como consequência direta de sua natureza e não um resultado de fonte externa.", 
        ],
        base:[
            "O Concilio de Constantinopla, 381, descreveu o Espírito como Deus e como “o Senhor e provedor da vida, que procede do Pai e é adorado e glorificado com o Pai e com o Filho”."],
    },
        
]
function gerarSentencas(){
    for(i=0;i<listaDoutrina.length;i++){
        doutrinas.innerHTML += `<button onclick="next(${i})"> ${listaDoutrina[i].sentenca}</button>`
        // sentecas.insertBefore(b,sentecas.children[i])
    }
}

function next(i){
    assunto.innerHTML = ""
    heresia.innerHTML = ""
    textoBiblia.innerHTML = ""
    base.innerHTML = ""
    doutrinas.style.display = "none"
    cardDoutrina.style.display = "block"
    tituloDoutrina.innerText = `${listaDoutrina[i].sentenca}`

    for(j=0;j<listaDoutrina[i].Assunto.length;j++){
        assunto.innerHTML += `<p>${listaDoutrina[i].Assunto[j]}</p>`
    }
    for(j=0;j<listaDoutrina[i].Biblia.length;j++){
        textoBiblia.innerHTML += `<p>${listaDoutrina[i].Biblia[j]}</p>`
    }
    for(j=0;j<listaDoutrina[i].heresias.length;j++){
        heresia.innerHTML += `<p>${listaDoutrina[i].heresias[j]}</p>`
    }
    for(j=0;j<listaDoutrina[i].base.length;j++){
        base.innerHTML += `<p>${listaDoutrina[i].base[j]}</p>`
    }

}

function voltar(){

    doutrinas.style.display = "flex"
    cardDoutrina.style.display = "none"
}
function inicio(){
    window.location.href= '../index.html'
}