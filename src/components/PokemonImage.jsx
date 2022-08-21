import React from 'react'

function PokemonImage(props) {

    return (
        <div className='container--right'>
            <img src={props.data} alt="" />
            <h2 className='id-name'>{('00' + props.pokemon_id).slice(-3)}</h2>
        </div>
    )
}

export default PokemonImage