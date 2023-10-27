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

    console.log(descricaoEstado)


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

    console.log(descricaoCapital)


}


const getEstadosRegiao = function (regiao) {

    const regiao = regiao.toUpperCase()
    const estados = jsonEstados.estadosCidades.estados

    const descricaoRegiao = {}
    descricaoRegiao.regiao = regiao

    const estadosRegioes = []

    estados.forEach( function (estado){

        if((estado.regiao.toUpperCase()).includes(regiao)){

            let estadosRegiao = {     
                uf: estado.sigla,
                descricao: estado.nome,
            }

            estadosRegioes.push(estadosRegiao)

        }
    })

    descricaoRegiao.estados = resultadoRegiao

    console.log(descricaoRegiao)

}

getCapitalEstado('SP')
getListaDeEstados()
getDadosEstado('RJ')
getEstadosRegiao('Sul')
// console.log(getDadosEstado('BA'))