function calcularPeso() {
    let inNome = document.getElementById('inNome')
    let rdMasculino = document.getElementById('rdMasculino')
    let rdFeminino = document.getElementById('rdFeminino')
    let inAltura = document.getElementById('inAltura')
    let outSaida = document.getElementById('outSaida')

    let nome = inNome.value
    let masculino = rdMasculino.checked
    let feminino = rdFeminino.checked
    let altura = Number(inAltura.value)

    let peso 

    if (masculino) {
        peso = 22 * Math.pow(altura, 2)
    } else {
        peso = 21 * Math.pow(altura, 2)
    }

    outSaida.innerHTML = `${nome}: Seu peso ideal é ${peso.toFixed(2)} Kg`
}

let btCalcular = document.getElementById('btCalcular')
btCalcular.addEventListener('click', calcularPeso)