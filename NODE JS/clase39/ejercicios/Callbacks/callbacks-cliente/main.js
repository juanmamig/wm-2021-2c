// EventListener - Detrás de Cámara
// const addEventListener = (eventName, callback) => {
//   switch(eventName) {
//     case 'click': {
//         callback('Me hicieron click');
//     }
//     case 'keydown': {
//       callback('Escribieron')
//     }
//     default: 
//       return null;
//   }
// }

// addEventListener('click', (e) => {
//   console.log(e);
// });


// PokeAPI

// fetch('https://pokeapi.co/api/v2/pokemon/lugia')
//   .then(res => res.json())
//   .then(json => {
//     drawPokemon(json);
//   });

// function drawPokemon(json) {
//   const notFoundUrl = 'https://onlinezebra.com/wp-content/uploads/2019/01/error-404-not-found.jpg';
//   let svgUrl = json.sprites.other.dream_world.front_default;
//   svgUrl = (svgUrl === null) ? notFoundUrl : svgUrl;
//   console.log(svgUrl);
//   const img = document.querySelector('img');
//   img.setAttribute('src', svgUrl);
// }


// PokeAPI - Pokemones
// const pokemons = ['ditto', 'lugia', 'charmander'];

// pokemons.forEach(poke => {
//   fetch(`https://pokeapi.co/api/v2/pokemon/${poke}`)
//   .then(res => res.json())
//   .then(json => {
//     drawPokemons(json);
//   });
// });

// const body = document.querySelector('body');
// function drawPokemons(json) {
//   const svgUrl = json.sprites.other.dream_world.front_default;
//   const newImg = document.createElement('img');
//   newImg.setAttribute('src', svgUrl);
//   body.appendChild(newImg);
// }


// Acá me agarró curiosidad y quise ver todos los pokemones
const url = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/'
const body = document.querySelector('body');

for (let i = 1; i < 800; i++) {
  showAllPokemons(`${url}/${i}.svg`);
}

function showAllPokemons(url) {
  const newImg = document.createElement('img');
  newImg.setAttribute('src', url);
  body.appendChild(newImg);
}
