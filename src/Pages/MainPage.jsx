import { useState, useEffect } from 'react'

import pokemons from '../data/pokedex.json'
import design from '../data/Design.json'
import PokemonContainer from '../components/PokemonContainer'

import { useParams } from 'react-router-dom'
function MainPage() {
    let { pokemon_name } = useParams()
    const [currentPokemonName, setCurrentPokemonName] = useState(pokemon_name ? pokemon_name : 'Bulbasaur')
    const [pokemonData, setPokemonData] = useState(getPokemonInfo())
    const [searchQuery, setSearchQuery] = useState("");
    useEffect(() => {
        setPokemonData(getPokemonInfo)
    }, [currentPokemonName]);


    function getPokemonInfo() {
        const pokemonInfo = pokemons.find(e => e.name.english.toLowerCase() === currentPokemonName.toLowerCase())
        const image_path = `./pokemon/images/${('00' + pokemonInfo.id).slice(-3)}.png`
        const pokemon_type = pokemonInfo.type[0]
        const pokemon_design = design.find(e => e.type === pokemon_type)
        const pokemon_icons = []
        pokemonInfo.type.forEach(element => {
            const icons = design.find(e => e.type === element)
            pokemon_icons.push(icons)
        });
        return {
            "image_path": image_path,
            "pokemon_info": pokemonInfo,
            "pokemon_design": pokemon_design,
            "pokemon_type": pokemon_icons
        }
    }

    function handleChange(event) {
        setSearchQuery(event.target.value)
    }

    const left_gradient = pokemonData.pokemon_design.left_gradient;
    const right_gradient = pokemonData.pokemon_design.right_gradient;
    const text_color = pokemonData.pokemon_design.text_color;

    return (
        <div style={{ background: `linear-gradient(to right,  ${left_gradient} ,${right_gradient})`, color: `${text_color}` }} className="main">
            <PokemonContainer pokemonData={pokemonData} searchQuery={searchQuery} handleChange={handleChange} />
        </div>
    )
}

export default MainPage