import React, { useState,useEffect} from 'react';
import fetchAxios from '../actions/fetchExtremo';

const PokemonAxios = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const getPokemon = async () => {
            try {
                const arr = await fetchAxios();
                setItems(arr);
            } catch (err) {
                alert(err);
            }
        };
        getPokemon();
    }, []);

    const listItems = items.map((name, key) => <li key={key}>{name}</li>);

    return (
        <section className="pokemon-section">
            <h1>Pokemon API con Axios</h1>
            <button>Pokemon </button>
            <ul>{listItems}</ul>
        </section>
    );
};

export default PokemonAxios;
