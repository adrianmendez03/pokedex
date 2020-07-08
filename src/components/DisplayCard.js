import React from 'react';
import axios from 'axios';

class DisplayCard extends React.Component {
    state = {
        id: '',
        name : this.props.name,
        imageURL: '',
        types: [],
        color: ''
    }

    async componentDidMount() {
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/` + this.state.name);

        let typeArr = []

        res.data.types.map(list => {
            return typeArr.push(list.type.name + " ")
        })

        this.setState({
            id: res.data.id, 
            imageURL: res.data.sprites.front_default,
            types: typeArr,
            color: res.data.types[0].type.name
        })
    }
    
    renderTypes() {
        const { types } = this.state;

        const labels = types.map(type => {
            return (
                <h3 className="text-capitalize"><span className={`badge` + " " + `badge-pill` + " " + type}>{type}</span></h3>
            )
        })

        return labels;
    }

    render() {
        const { id, name, imageURL } = this.state;

        const colorLight = `${this.state.color}-light`;
        return (
            <div className={`card` + " " + colorLight} id={id}>
                <h5 className="card-header">{id}</h5>
                <img src={imageURL} alt={name} className="card-img-top"></img>
                <div className="card-body text-center text-capitalize">
                    <h1 className="card-title">{name}</h1>
                    <div className="d-flex justify-content-center">{this.renderTypes()}</div>
                </div>
            </div>
        )
    }
}

export default DisplayCard;