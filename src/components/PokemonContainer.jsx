import React from 'react'
import PokemonImage from './PokemonImage'
import PokemonInformation from './PokemonInformation'
import pokemons from '../data/pokedex.json'
// import { useNavigate } from 'react-router-dom'

function PokemonContainer(props) {
    return (
        <div className='inner-main'>
            <div className="search-bar">
                <input type="text" className='searchBar' name="pokemon_id" id="pokemon_id" onChange={props.handleChange} placeholder="Search Pokemon" />
                {
                    props.searchQuery && (<div className="search_result">
                        {
                            pokemons.
                                filter(item => {
                                    const searchTerm = props.searchQuery.toLowerCase();
                                    const pokemonName = item.name.english.toLowerCase();
                                    return searchTerm && pokemonName.startsWith(searchTerm)
                                })
                                .slice(0, 10)
                                .map(pokemon => {
                                    const pokemon_id = ('00' + pokemon.id).slice(-3)
                                    const image_path = `./pokemon/thumbnails/${pokemon_id}.png`
                                    console.log(image_path)
                                    return (
                                        <a href={`/pokemondex/${pokemon.name.english}`}><div className='search_individual'>{pokemon.name.english}<img src={image_path} className="search_img" /></div></a>
                                    )
                                })
                        }
                    </div>)
                }
            </div>
            <div className='container'>
                <PokemonInformation data={props} />
                <PokemonImage data={props.pokemonData.image_path} pokemon_id={props.pokemonData.pokemon_info.id} />
            </div>
        </div>
    )
}

export default PokemonContainer