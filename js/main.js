async function buscaEndereco(cep){
    const elError = document.getElementById('error')
    elError.innerHTML = ''

    try {
        let response = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
        let responseJson = await response.json()
        
        if (responseJson.erro) {
            throw Error('Cep nao existente.')
        }
                 
        return responseJson

    } catch (error) {
        console.log(error)
        elError.innerHTML = `<p>Cep inválido, tente novamente.</p>`
    }

}

cep.addEventListener('focusout', async function (e) {
    const elEndereco = document.getElementById('endereco')
    const elBairro = document.getElementById('bairro')
    const elCidade = document.getElementById('cidade')
    const elComplemento = document.getElementById('complemento')
    const elNumero = document.getElementById('numero')
    const elEstado = document.getElementById('estado')
    
    const objEndereco = await buscaEndereco(this.value)
    
    elEndereco.value = objEndereco?.logradouro ?? ''
    elBairro.value = objEndereco?.bairro ?? ''
    elCidade.value = objEndereco?.localidade ?? ''
    elComplemento.value = objEndereco?.complemento ?? ''
    elNumero.value = objEndereco?.numero ?? ''
    elEstado.value = objEndereco?.uf ?? ''
    
})


// const urlAPI = (cep) => {return `https://viacep.com.br/ws/${cep}/json/`}

// const result = fetch(urlAPI(27542090))
//     .then(res => res.json())
//     .then(r => {
//         if (r.erro) {
//             throw Error('Esse cep não existe!')
//         } else {
//             console.log(r)
//         }
//     })
//     .catch(err => {console.log(err)})
//     .finally(msg => console.log('Processamento concluido'))


//usando vários ceps e Promise.all
// let ceps = ['27514090', '27542060']
// let buscaCeps = ceps.map((busca) =>  buscaEndereco(busca))

// Promise.all(buscaCeps)
//     .then(r => console.log(r))
