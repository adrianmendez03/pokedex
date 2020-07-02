import React from 'react';
import axios from 'axios';
import DisplayCard from './DisplayCard';

class DisplayList extends React.Component {
    state = {
        url: 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=150',
        pokemon: null
    };

    async componentDidMount() {
        const res = await axios.get(this.state.url);
        this.setState({ pokemon: res.data['results']});
    }

    render() {
        if(!this.state.pokemon) {
            return <h1>Catching Pokémon . . .</h1>
        } else {
            return (
                <div className="row">
                    {this.state.pokemon.map(pokemon => {
                        return (
                            <div className="col-xl-2 col-lg-3 col-md-4 d-flex justify-content-center display-card">
                                <DisplayCard
                                    key={pokemon.name}
                                    name={pokemon.name}
                                    url={pokemon.url}
                                />
                            </div>
                        )
                    })}
                </div>
            )
        }
    }
}

export default DisplayList;