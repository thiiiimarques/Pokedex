
let pokeApi = {}

pokeApi.getPokemons = () => {
  let offset = 0;
  let limit = 10;
  let url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;
  
  return fetch(url)
    .then( (response) => response.json())
    .then((jsonBody) => jsonBody.results) 
    .catch((error) => console.error(error))
}
