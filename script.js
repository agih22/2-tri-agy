const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você está explorando um novo parque e encontra um jardim secreto cheio de plantas exóticas. Qual é a sua reação inicial?",
        alternativas: [
            {
                texto: "Fico maravilhado e quero explorar cada canto desse jardim secreto!",
                afirmacao: "afirmação"
            },
            {
                texto: "Fico cauteloso e penso se é seguro continuar explorando.",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Um grupo de pesquisadores convida você para participar de um estudo sobre as mudanças climáticas globais. Como você decide contribuir?",
        alternativas: [
            {
                texto: "Participo ativamente das discussões e busco aprender mais sobre o impacto das mudanças climáticas.",
                afirmacao: "afirmação"
            },
            {
                texto: "Contribuo com minhas experiências pessoais, mas deixo a maior parte do trabalho para os especialistas.",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Você encontra um livro antigo e misterioso em uma loja de antiguidades. Qual é a sua primeira reação ao folhear suas páginas?",
        alternativas: [
            {
                texto: "Fico fascinado com a história e os segredos que o livro pode conter.",
                afirmacao: "afirmação"
            },
            {
                texto: "Fico desconfiado e me pergunto se o livro pode conter alguma armadilha ou perigo.",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Você é desafiado a criar uma obra de arte que represente suas esperanças para o futuro da humanidade. Como você aborda essa tarefa?",
        alternativas: [
            {
                texto: "Uso minha imaginação e criatividade para criar uma representação otimista e inspiradora.",
                afirmacao: "afirmação"
            },
            {
                texto: "Prefiro refletir sobre os desafios que enfrentamos e criar uma obra que mostre a necessidade de mudanças.",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Você é convidado a participar de um debate sobre o papel da tecnologia na educação do futuro. Qual é a sua perspectiva principal sobre o assunto?",
        alternativas: [
            {
                texto: "Acredito que a tecnologia pode ampliar o acesso à educação e melhorar as experiências de aprendizado.",
                afirmacao: "afirmação"
            },
            {
                texto: "Preocupo-me com os desafios éticos e sociais que a tecnologia pode trazer para o ambiente educacional.",
                afirmacao: "afirmação"
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
