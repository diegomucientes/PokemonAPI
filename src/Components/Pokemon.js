import React ,{useState}from 'react';
import PokemonFetch from '../actions/PokemonFetch';

const Pokemon = () => {
    const [items, setitems] = useState([]);
    const onClick=()=>{
        PokemonFetch().then((arr)=>setitems(arr)).catch((err)=>alert(err));
    }
    const ListaDePokemones= items.map((item,key)=><li key={key}>{item.name}</li>)
    console.log(items);
    return (
        <div>
            <h1>Pokemon API</h1>
            <button onClick={onClick}>Pokemon Fetch</button>
            <ul>
                {ListaDePokemones}
            </ul>
        </div>
    );
}

export default Pokemon;
