import React from 'react'
import PokemonImage from './PokemonImage'
import PokemonInformation from './PokemonInformation'
import pokemons from '../data/pokedex.json'
// import { useNavigate } from 'react-router-dom'

function PokemonContainer({ setSearch, handleChange, searchQuery, pokemonData, changePokemonName }) {


    function handleClick(event) {
        changePokemonName(event.target.innerText)
        setSearch('')
    }

    return (
        <div className='inner-main'>
            <div className="search-bar">
                <input type="text" className='searchBar' name="pokemon_id" id="pokemon_id" onChange={handleChange} placeholder="Search Pokemon" value={searchQuery} />
                {
                    searchQuery && (
                        <div className="search_result">
                            {
                                pokemons.
                                    filter(item => {
                                        const searchTerm = searchQuery.toLowerCase();
                                        const pokemonName = item.name.english.toLowerCase();
                                        return searchTerm && pokemonName.startsWith(searchTerm)
                                    })
                                    .slice(0, 10)
                                    .map(pokemon => {
                                        const pokemon_id = ('00' + pokemon.id).slice(-3)
                                        const image_path = `./pokemon/thumbnails/${pokemon_id}.png`
                                        return (
                                            <div key={pokemon_id} className='search_individual' onClick={handleClick}>{pokemon.name.english}<img src={image_path} className="search_img" /></div>
                                        )
                                    })
                            }
                        </div>)
                }
            </div>
            <div className='container'>
                <PokemonInformation data={pokemonData} />
                <PokemonImage data={pokemonData.image_path} pokemon_id={pokemonData.pokemon_info.id} />
            </div>
        </div>
    )
}

export default PokemonContainer