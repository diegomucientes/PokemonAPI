import React from 'react';

const PokemonFetch = () =>fetch('https://pokeapi.co/api/v2/pokemon')
        .then((res)=>res.json())
        .then((data)=>(data.results)) 
        .catch((err)=>(err))


export default PokemonFetch;
