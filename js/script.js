//1. selector (condicion)
//2. informacion (click)/fetch
// nombre
// imagen
// tipo
// altura 
// peso

const obtenerPokemon = document.getElementById('get-pokemon');
const select =document.getElementById('pokemon-select')
const container =document.getElementsByClassName('.container')
const container1=document.getElementById('contenedorpokemon')
const ENDPOINT = 'https://pokeapi.co/api/v2/pokemon/'



obtenerPokemon.addEventListener('click',()=>{
    const pokemonName= select.value;
    console.log(pokemonName)
 
 InformacionPokemon(pokemonName)
 })

function InformacionPokemon(pokemon){
    fetch(`${ENDPOINT}${pokemon}`)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        container1.innerHTML=''
        let name = data.name;
        let img = data.sprites.front_default;
        let type = data.types[0].type.name;
        let height = data.height;
        let weight = data.weight;

       let infopokemon= `
        <div class="contenedorPokemon">
        <h3> ${name}</h3>
        <img src="${img}" width="50%" />
        <ul>
        <li>Type: ${type}</li>
        <li>Height: ${height}</li>
        <li>Weight: ${weight}</li>
        </ul>
            </div>
            `
            container1.innerHTML += infopokemon
            console.log(container1)
    })}

