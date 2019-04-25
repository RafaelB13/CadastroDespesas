
var data = new Date();

class Despesa {
    
    constructor(ano, mes, dia, tipo, descricao, valor, horario) {
        this.ano        = ano
        this.mes        = mes
        this.dia        = dia
        this.tipo       = tipo
        this.descricao  = descricao
        this.valor      = valor 
        this.horario    = horario
    }
}

class Models {
    exibirMinutos() {
        let horario = data.getHours()+":"+data.getMinutes()+":"+data.getSeconds()

        return horario
    }
    refresh(){document.location.reload()}

    localStorage(d){
        //recebe como parametro o objeto e um tipo JSON
        localStorage.setItem('obj', JSON.stringify(d))
    }

}

function gerarJson() {
    //recuperando os dados do formulário
    var ano         = document.getElementById('ano').value
    var mes         = document.getElementById('mes').value
    var dia         = document.getElementById('dia').value
    var tipo        = document.getElementById('tipo').value
    var descricao   = document.getElementById('descricao').value
    var valor       = document.getElementById('valor').value

    //Models
    var modelos = new Models()
    var horario = modelos.exibirMinutos()
    //modelos.refresh()

    //Objeto despesa
    const obj = new Despesa(ano, mes, dia, tipo, descricao, valor, horario)
    
    //Converte o objeto em JSON
    const newJson = JSON.stringify(obj)

    //Gravar o objeto em local storage
    modelos.localStorage(obj)
    
    return newJson
}

function cadastrarDespesa() {
    //exibir JSON
    console.log(gerarJson())
}











