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

const getDadosEstado = function(){
    const siglaEstado = []
    const descricaoEstado = []
    const capitalEstado = []
    const regiaoEstado = []

    arrayEstado.forEach(function(infoEstado){
        siglaEstado.push(infoEstado.sigla)
        descricaoEstado.push(infoEstado.nome)
        capitalEstado.push(infoEstado.capital)
        regiaoEstado.push(infoEstado.regiao)
    })

    const testando = {uf: siglaEstado, descricao: descricaoEstado, capital: capitalEstado, regiao: regiaoEstado }

    console.log(testando)



}



getListaDeEstados();
getDadosEstado();