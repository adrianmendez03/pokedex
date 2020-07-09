import React from 'react';
import axios from 'axios';
import DisplayCard from './DisplayCard';

class DisplayList extends React.Component {
    state = {
        url: 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=493',
        pokemon: null,
        genOne: null,
        genTwo: null,
        genThree: null, 
        genFour: null
    };

    async componentDidMount() {
        const res = await axios.get(this.state.url);

        this.setState({ pokemon: res.data['results']});

        this.fillGen(this.state.pokemon)
    }

    fillGen(list) {
        let genOne = [];
        let genTwo = [];
        let genThree = [];
        let genFour = [];

        for (let i = 0; i < list.length; i++) {
            if (i <= 150) {
                genOne.push(list[i].name)
            } else if (151 <= i && i <= 250) {
                genTwo.push(list[i].name)
            } else if (251 <= i && i <= 385) {
                genThree.push(list[i].name)
            } else {
                genFour.push(list[i].name)
            }
        }

        this.setState({
            genOne,
            genTwo,
            genThree,
            genFour
        })
    }

    createCards(list) {
        return (
            <div className="row">
                {list.map(pokemon => {
                    return (
                        <div key={pokemon} className="col-xl-2 col-lg-3 col-md-4 col-6 d-flex justify-content-center display-card">
                            <DisplayCard
                                key={pokemon}
                                name={pokemon}
                            />
                        </div>
                    )
                })}
            </div>
        )
    }

    renderGeneration() {
        const { genOne, genTwo, genThree, genFour } = this.state;
        const { currentTab } = this.props;

        if (!this.state.genOne) {
            return <h1>Catching Pokemon . . .</h1>
        } else {
            if (currentTab === 'one') {
                return this.createCards(genOne)
            } else if (currentTab === 'two') {
                return this.createCards(genTwo)
            } else if (currentTab === 'three') {
                return this.createCards(genThree)
            } else {
                return this.createCards(genFour)
            }
        }
    }

    render() {
        return this.renderGeneration();
    }
}

export default DisplayList;