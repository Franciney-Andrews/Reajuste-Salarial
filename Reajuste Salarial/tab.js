function calcular() {
    var salario = Number(document.getElementById('salario').value)

    if (salario <= 280) {
        var percentual = 20
        var aumento = salario * 0.2
    } else if (salario <= 700) {
        var percentual = 15
        var aumento = salario * 0.15
    } else if (salario <= 1500) {
        var percentual = 10
        var aumento = salario * 0.1
    } else {
        var percentual = 5
        var aumento = salario * 0.05
    }

    var novoSalario = salario + aumento

    document.getElementById('salarioAntes').innerHTML = `<strong>R$ ${salario.toFixed(2)}</strong>`
    document.getElementById('percentual').innerHTML = `<strong>${percentual}%</strong>`
    document.getElementById('valorAumento').innerHTML = `<strong>R$ ${aumento.toFixed(2)}</strong>`
    document.getElementById('novoSalario').innerHTML = `<strong>R$ ${novoSalario.toFixed(2)}</strong>`
}