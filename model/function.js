var jsonEstados = require('./estados_cidades.js')

const estados =  jsonEstados.estadosCidades
const arrayEstado = estados.estados


const getListaDeEstados = function () {
    const array = []
    const quantidade = arrayEstado.length

    arrayEstado.forEach(function (sigla) {
         array.push(sigla.sigla)

    })

    const infoEstados = {uf : array, quantidade}


    return infoEstados
}

const getDadosEstado = function (sigla) {

    const filtro = sigla.toUpperCase()
    const estados = jsonEstados.estadosCidades.estados

    const descricaoEstado = {}

    estados.forEach( function (estado) {

        if(estado.sigla.includes(filtro)) {
    
            descricaoEstado.uf = estado.sigla
            descricaoEstado.descricao = estado.nome
            descricaoEstado.capital = estado.capital
            descricaoEstado.regiao = estado.regiao
        }

    })

    return descricaoEstado


}

const getCapitalEstado = function (sigla) {

    const regiao = sigla.toUpperCase()
    const estados = jsonEstados.estadosCidades.estados

    const descricaoCapital = {}

    estados.forEach( function (estado) {

        if(estado.sigla.includes(regiao)) {

            descricaoCapital.uf = estado.sigla
            descricaoCapital.descricao = estado.nome
            descricaoCapital.capital = estado.capital
        }

    })

    return descricaoCapital


}


const getEstadosRegiao = function (regiao) {

    const regiaos = regiao.toUpperCase()
    const estados = jsonEstados.estadosCidades.estados
    const descricaoRegiao = {}
    const estadosRegioes = []
    descricaoRegiao.regiao = regiaos
    descricaoRegiao.estados = estadosRegioes

    estados.forEach( function (infoEstados){

        if((infoEstados.regiao.toUpperCase()).includes(regiaos)){

            let estadosRegiaoR = {}

           
            estadosRegiaoR.uf =  infoEstados.sigla
            estadosRegiaoR.descricao = infoEstados.nome
            estadosRegioes.push(estadosRegiaoR)

        }
    })

    return descricaoRegiao

}

const getCidades = function (sigla) {
    const estado = jsonEstados.estadosCidades.estados
    let siglas = sigla.toUpperCase
    let estadosCidades = {}
    let cidade = []
    estadosCidades.cidade = cidade


    estado.forEach(function (infoEstados){
        if (infoEstados.sigla.includes(siglas)) {
            estadosCidades.uf = infoEstados.sigla
            estadosCidades.descricao = infoEstados.nome
            estadosCidades.quantidade_cidades = infoEstados.cidades.length

            infoEstados.cidades.forEach (function (nomeCidade){
                cidade.push(nomeCidade.nome)
            })
        }
    })

    return estadosCidades

}

module.exports = {
    getCapitalEstado,
    getListaDeEstados,
    getDadosEstado,
    getEstadosRegiao,
    getCidades
}
