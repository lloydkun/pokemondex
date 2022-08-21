import { useState, useEffect } from 'react'

import pokemons from '../data/pokedex.json'
import design from '../data/Design.json'
import PokemonContainer from '../components/PokemonContainer'
import { useParams, Route, Routes, Navigate } from 'react-router-dom'


function MainPage() {
    // let { pokemon_name } = useParams()
    const [currentPokemonName, setCurrentPokemonName] = useState('Bulbasaur')
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
    function handleClick(event) {
        // setCurrentPokemonName(event.target.value)
        console.log(event.target.name)
    }


    return (
        <div style={{ background: `linear-gradient(to right,  ${pokemonData.pokemon_design.left_gradient} ,${pokemonData.pokemon_design.right_gradient})`, color: `${pokemonData.pokemon_design.text_color}` }} className="main">
            <PokemonContainer pokemonData={pokemonData} searchQuery={searchQuery} setSearch={setSearchQuery} handleChange={handleChange} currentPokemonName={currentPokemonName} changePokemonName={setCurrentPokemonName} />
        </div>
    )
}

export default MainPage