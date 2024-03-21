/*
Criando a base de dados de filmes  
*/

const filmes = [
    {
    id: 0,
    nome: 'Harry Potter',
    genero: 'fantasia',
    lancamento: 2001
    },
    {
    id: 1,
    nome: 'Avatar',
    genero: 'fantasia',
    lancamento: 2010
    },
    {
     id:2,
     nome:'O senhor dos Anéis',
     genero: 'fantasia',
     lancamento: 2000,
    },
    {
     id:3,
     nome: 'Branquelas',
     genero: 'comédia',
     lancamento: 2007
    },
    {
     id:4,
     nome: 'A Lagoa Azul',
     genero: 'romance',
     lancamento: 1983
}]

/*
Criando um array de filmes favoritos
*/
let filmesFavoritos = []

/*
Pegando Elementos HTML
*/

//pega o elemento button
const btn1 = document.querySelector('button')
//pega a lista de filmes
const listaFilmes = document.querySelector('#listaFilmes')

/*
Ao carregar a página, executa a função que renderiza os elementos na tela
*/

window.onload = () => {
   renderizarLista()
}

/*
Função para renderizar filmes na tela
*/


const renderizarLista = () =>{
    //limpa a tela antes de renderizar
    listaFilmes.innerHTML = ""
    //percorre o array de filmes, inserindo um li com o nome do filme a cada volta do loop
    filmes.forEach((filme)=>{
        const itemLista = document.createElement('li')
        //adiciona o li à lista de filmes
        listaFilmes.append(itemLista)
        //adiciona o filme que o usuário digitou à lista
        itemLista.innerHTML = `Meu filme ${filme.nome}`

        
        //cria uma nova imagem
        const favorito = document.createElement('img')
        //adiciona imagem ao item img
        favorito.src = 'img/heart.svg'
        //muda o cursor da imagem para mãozinha de clique
        favorito.style.cursor = 'pointer'
        //adiciona evento de clique à imagem
        favorito.addEventListener('click',(e)=>{
            favoritoClicado(e,filme)
        })
        //adiciona a imagem ao item da lista
        itemLista.append(favorito)
    })
}
/*
Adiciona o evento de clique ao botão 
*/

btn1.addEventListener('click',()=>{
    //pega o input onde o usuário digita o filme
    const inputUsuario = document.querySelector('#filmeInput')
    /*adiciona um id ao filme considerando que o tamanho do array
    será sempre um a mais que seu index, já que o index começa em 0 */
    let id = filmes.length
    //adiciona o valor à propriedade nome do objeto dentro do array filmes
    filmes.push({id:id,nome: inputUsuario.value, genero: '', lancamento: ''})
    console.log(filmes)
    //renderiza a lista novamente
    renderizarLista()
    //apaga o campo de digitação
    inputUsuario.value = ''
})
/*
Função 4022
*/

const favoritoClicado = (eventoDeClique) => {
    /*adiciona um objeto com a propriedade favorito e não favorito,
    e seus valores são os caminhos da imagem*/
    const favoriteState = {
        favorited: 'img/heart-fill.svg',
        notFavorited: 'img/heart.svg'
      }
      //valida se o src da imagem que foi clicada inclui o caminho da imagem de não favoritado
      if(eventoDeClique.target.src.includes(favoriteState.notFavorited)) {
        // se não incluir, mudar a imagem para favoritado e executar a função de salvar no localStorage
        eventoDeClique.target.src = favoriteState.favorited
      } else {
        /* senão, manter a imagem de não favoritado e executar a função de remover
        do localStorage, passando como parâmetro o id do filme*/
        eventoDeClique.target.src = favoriteState.notFavorited
      }

}
