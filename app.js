const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

//criando um objeto para manipular as requisições da API
const app = express()

//Função para manipular as retrições da API
app.use((request, response, next) =>{
    //Permite especificar quem poderá acessar a API ('*' = liberar acesso público, 'IP' = liberar acesso apenas ao IP digitado)
    response.header('Access-Control-Allow-Origin', '*')
    //Permite especificar como a API será requisitada ('GET', 'POST', 'PUT', 'DELETE')
    response.header('Access-Control-Allow-Methods', 'GET')

    app.use(cors())

    //Continuar processando outras coisas de dentro da API.
    next()
})

app.get('/estados/sigla', cors(), async function (request, response, next){
    let controleListaEstados = require('./model/function.js')
    let estados = controleListaEstados.getListaDeEstados()
    response.json(estados)
    response.status(200)
})


app.listen('8080', function(){
    console.log('API FUNCIONANDOOOO')
})

//EndPoint: Retorna os dados do estado filtrando pela sigla
app.get('/estado/sigla/:uf', cors(), async function(request, response, next){
//receba uma variavel encaminhada por um parametro na URL da requisição
let siglaEstado = request.params.uf


//impot do arquivo de funcoes
let controleDadosEstado = require('./model/function.js')
let dadosEstado = controleDadosEstado.getDadosEstado(siglaEstado);

if(dadosEstado){
    response.json(dadosEstado)
    response.status(200)
}else {
    response.status(404)
    response.json('{erro: Não foi possivel encontrar.}')
}
})

//endpoint:Retorna os dados da capital filtrando pela sigla

app.get('/capital/estado', cors(), async function(request, response, next){
//ecebe parametros via query, que são variaveis encaminhadas na URL da requisição(?uf=SP)
    let siglaEstado = request.query.uf
    // let cidade = request.query.cidade
    // let pais = request.query.pais
    // console.log(siglaEstado)
    // console.log(cidade)
    // console.log(pais)
    let controleDadosCapital = require('./model/function.js')
    let dadosCapital = controleDadosCapital.getCapitalEstado(siglaEstado)

    if(dadosCapital){
        response.status(404)
        response.json({erro: "Nao foi possivel encontrar um item"})
    }
})