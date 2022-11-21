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
    

async function buscaEndereco(cep){
    try {
        let consulta = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
        let consultaConvertida = await consulta.json()

        if (consultaConvertida.erro) {
            throw Error('Cep nao existente')
        }
        return consultaConvertida
    } catch (error) {
        console.log(error)
    }
    
}

buscaEndereco(27514090).then(r => console.log(r))


//usando vários ceps e Promise.all
// let ceps = ['27514090', '27542060']
// let buscaCeps = ceps.map((busca) =>  buscaEndereco(busca))

// Promise.all(buscaCeps)
//     .then(r => console.log(r))