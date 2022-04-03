let num = window.document.querySelector('input#fnum')
let lista = window.document.querySelector('select#flista')
let res = window.document.querySelector('div#res')

let valores = []

function isNumero(n){
    if (Number(n) >= 1 && Number(n) <= 100){
        return true
    } else{
        return false
    }
}
function inLista(n, l){
    if (l.indexOf(Number(n)) != -1){
        return true
    } else{
        return false
    }
}

function adicionar(){
    //Validando se é ou não um número.
    if (isNumero(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value))

        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)
        res.innerHTML = ''
    } else{
        window.alert('Valor Inválido ou Já Encontrado na Lista!')
    }
    num.value = ''
    num.focus() //Reseta o CURSOR DO MOUSE
}

function finalizar(){
    if (valores.length == 0){
        window.alert('Adicione Valores Antes de Finalizar!')
    } else{
        let tot = valores.length //Total de Elementos
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0

        for(let pos in valores){
            soma += valores[pos]
            if (valores[pos] > maior)
                maior = valores[pos]
            if (valores[pos] < menor)
                menor = valores[pos]
        }
        media = soma / tot

        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo temos ${tot} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
        res.innerHTML += `<p>A média dos valores digiatos é ${media}.</p>`

    }
}