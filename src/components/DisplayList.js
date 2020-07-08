import React from 'react';
import axios from 'axios';
import DisplayCard from './DisplayCard';

class DisplayList extends React.Component {
    state = {
        url: 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=151',
        pokemon: null
    };

    async componentDidMount() {
        const res = await axios.get(this.state.url);
        this.setState({ pokemon: res.data['results']});
    }

    createCards(list) {
        return (
            <div className="row">
                {list.map(pokemon => {
                    return (
                        <div key={pokemon.name} className="col-xl-2 col-lg-3 col-md-4 d-flex justify-content-center display-card">
                            <DisplayCard
                                key={pokemon.name}
                                name={pokemon.name}
                            />
                        </div>
                    )
                })}
            </div>
        )
    }

    render() {
        if(!this.state.pokemon) {
            return <h1>Catching Pokémon . . .</h1>
        } else {
            return this.createCards(this.state.pokemon);
        }
    }
}

export default DisplayList;