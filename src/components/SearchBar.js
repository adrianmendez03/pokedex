import React from 'react';

class SearchBar extends React.Component {
    constructor(props) {
        super(props)

        this.state = { term : 'Search Pokemon' }

        this.handleSubmit = this.handleSubmit.bind(this);
    }
    

    handleSubmit(event) {
        event.preventDefault();

        let val = event.target.value;

        if(val === null) { val = "" }
        
        this.props.updateTerm(val.toLowerCase())
    }

    render() {
        return (
            <form className="form-inline" onSubmit={this.handleSubmit}>
                <input className="form-control mr-sm-2" type="search" placeholder={this.state.term} aria-label="Search"/>
                <button className="btn btn-outline-light my-2 my-sm-0" type="submit">Search</button>
            </form>
        );
    }
}

export default SearchBar;