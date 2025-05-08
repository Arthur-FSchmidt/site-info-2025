let noturno = {
    etapa1: [
    {disciplina:"Programação I", periodos_semanais:"5p", periodos_totais:"100p", semestral:"80 horas"}, 
    {disciplina:"Projetos I", periodos_semanais:"5p", periodos_totais:"100p", semestral:"80 horas"}, 
    {disciplina:"Design Gráfico", periodos_semanais:"5p", periodos_totais:"100p", semestral:"80 horas"}, 
    {disciplina:"Sistemas Operacionais I", periodos_semanais:"2p", periodos_totais:"40p", semestral:"32 horas"}, 
    {disciplina:"Ética", periodos_semanais:"3p", periodos_totais:"60p", semestral:"48 horas"}, 
    {disciplina:"Criação de sites I", periodos_semanais:"3p", periodos_totais:"60p", semestral:"48 horas"}, 
    {disciplina:"Segurança da informação", periodos_semanais:"2p", periodos_totais:"40p", semestral:"32 horas"}
    ],
    etapa2: [
    {disciplina:"Programação II", periodos_semanais:"5p", periodos_totais:"100p", semestral:"80 horas"}, 
    {disciplina:"Projetos II", periodos_semanais:"3p", periodos_totais:"60p", semestral:"48 horas"}, 
    {disciplina:"Sistemas Operacionais II", periodos_semanais:"2p", periodos_totais:"40p", semestral:"32 horas"}, 
    {disciplina:"Criação de sites II", periodos_semanais:"5p", periodos_totais:"100p", semestral:"80 horas"}, 
    {disciplina:"Redes de computadores I", periodos_semanais:"2p", periodos_totais:"40p", semestral:"32 horas"}, 
    {disciplina:"Manutenção de computadores", periodos_semanais:"3p", periodos_totais:"60p", semestral:"48 horas"}, 
    {disciplina:"Banco de dados", periodos_semanais:"2p", periodos_totais:"40p", semestral:"32 horas"}, 
    {disciplina:"Modelagem de dados", periodos_semanais:"3p", periodos_totais:"60p", semestral:"48 horas"}
    ],
    etapa3: [
    {disciplina:"Programação III", periodos_semanais:"5p", periodos_totais:"100p", semestral:"80 horas"}, 
    {disciplina:"Projetos III", periodos_semanais:"5p", periodos_totais:"100p", semestral:"80 horas"}, 
    {disciplina:"Design Gráfico II", periodos_semanais:"5p", periodos_totais:"100p", semestral:"80 horas"}, 
    {disciplina:"Redes de computadores II", periodos_semanais:"2p", periodos_totais:"40p", semestral:"32 horas"}, 
    {disciplina:"Empreendedorismo", periodos_semanais:"3p", periodos_totais:"60p", semestral:"48 horas"}, 
    {disciplina:"Criação de sites III", periodos_semanais:"5p", periodos_totais:"100p", semestral:"80 horas"}
    ]
};

let diurno = {
    formacao_geral: {
        ciencia_humana: [
            {disciplina:"Filosofia", ano1:"1", ano2:"1", ano3:"1", ha:"120", hr:"100h"}, 
            {disciplina:"Geografia", ano1:"2", ano2:"1", ano3:"-", ha:"120", hr:"100h"}, 
            {disciplina:"História", ano1:"2", ano2:"-", ano3:"2", ha:"160", hr:"134h"}, 
            {disciplina:"Sociologia", ano1:"1", ano2:"1", ano3:"1", ha:"120", hr:"100h"}
        ],
        ciencia_natureza: [
            {disciplina:"Biologia", ano1:"2", ano2:"2", ano3:"2", ha:"240", hr:"200h"}, 
            {disciplina:"Física", ano1:"2", ano2:"2", ano3:"2", ha:"240", hr:"200h"}, 
            {disciplina:"Química", ano1:"2", ano2:"2", ano3:"2", ha:"240", hr:"200h"}
        ],
        linguagens: [
            {disciplina:"Arte", ano1:"2", ano2:"-", ano3:"-", ha:"80", hr:"67h"}, 
            {disciplina:"Educação física", ano1:"1", ano2:"1", ano3:"1", ha:"120", hr:"100h"}, 
            {disciplina:"Literatura", ano1:"1", ano2:"2", ano3:"2", ha:"200", hr:"166h"}, 
            {disciplina:"Língua portuguesa", ano1:"4", ano2:"4", ano3:"3", ha:"440", hr:"366h"}
        ],
        matematica: [
            {disciplina:"Matemática", ano1:"4", ano2:"4", ano3:"3", ha:"440", hr:"366h"}
        ]
    },
    parte_diversificada: [
        {disciplina:"Língua Espanhola", ano1:"1", ano2:"1", ano3:"-", ha:"80", hr:"67h"}, 
        {disciplina:"Língua Inglesa", ano1:"2", ano2:"2", ano3:"2", ha:"240", hr:"200h"}, 
        {disciplina:"Ensino Religioso", ano1:"1", ano2:"-", ano3:"-", ha:"40", hr:"34h"}
    ],
    formacao_profissional: [
        {disciplina: "Modelagem e Projeto de Banco de Dados", ano1: "-", ano2: "-", ano3: "4", ha: "160", hr: "134h"},
        {disciplina: "Criação de Sites", ano1: "-", ano2: "3", ano3: "3", ha: "240", hr: "200h"},
        {disciplina: "Design Grafico", ano1: "-", ano2: "2", ano3: "3", ha: "200", hr: "166h"}, 
        {disciplina: "Manutenção de Microcomputadores", ano1: "-", ano2: "2", ano3: "-", ha: "80", hr: "67h"}, 
        {disciplina: "Programação", ano1: "-", ano2: "4", ano3: "4", ha: "230", hr: "266h"}, 
        {disciplina: "Redes de Computadores", ano1: "-", ano2: "-", ano3: "2", ha: "80", hr: "67h"}, 
        {disciplina: "Sistemas Operacionais", ano1: "-", ano2: "3", ano3: "-", ha: "120", hr: "100h"}, 
        {disciplina: "Ética", ano1: "-", ano2: "1", ano3: "-", ha: "40", hr: "33h"}, 
        {disciplina: "Empreendedorismo", ano1: "-", ano2: "-", ano3: "1", ha: "40", hr: "33h"}, 
        {disciplina: "Projeto de Pesquisa", ano1: "2", ano2: "2", ano3: "2", ha: "240", hr: "200h"}
    ]
};

function getCurriculoDiurno() {
    return diurno;
}

function getCurriculoNoturno() {
    return noturno;
}

module.exports = { getCurriculoDiurno, getCurriculoNoturno };