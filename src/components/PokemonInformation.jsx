import React from 'react'
import ProgressBar from './ProgressBar'

function PokemonInformation({ data }) {
    const ICON_BASE_URL = `./pokemon/pokemon_icons/`
    return (
        <div className="container--left">
            <div className="container--left-topInfo">
                <h1 className='pokemon--name'>{data.pokemon_info.name.english.toUpperCase()}</h1>
                <h1 className='pokemon--name'>{data.pokemon_info.name.japanese.toUpperCase()}</h1>
                <div className='container--left-topInfo-icons'>
                    {
                        data.pokemon_type.map(type => {
                            return (
                                <img src={`${ICON_BASE_URL}${type.icon}`} alt={`${type.type} icon`} />
                            )
                        })
                    }
                </div>
            </div>
            <div className="container--left-bottomInfo">
                <h4>STATS</h4>
                <hr style={{ backgroundColor: `${data.pokemon_design.text_color}` }} />
                <div className="container--left-bottomInfo-stats">
                    <ProgressBar stat_name="hp" stat={data.pokemon_info.base.HP} />
                    <ProgressBar stat_name="attack" stat={data.pokemon_info.base.Attack} />
                    <ProgressBar stat_name="defense" stat={data.pokemon_info.base.Defense} />
                    <ProgressBar stat_name="sp.attack" stat={data.pokemon_info.base['Sp. Attack']} />
                    <ProgressBar stat_name="sp.defense" stat={data.pokemon_info.base['Sp. Defense']} />
                    <ProgressBar stat_name="speed" stat={data.pokemon_info.base.Speed} />

                </div>
            </div>
        </div>
    )
}

export default PokemonInformation