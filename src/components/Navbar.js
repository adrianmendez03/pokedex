import React from 'react';
import SearchBar from './SearchBar'

class Navbar extends React.Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-md navbar-dark fixed-top corners justify-content-between">
                    <a href="#" id="nav-logo">Pokédex</a>
                    <SearchBar updateTerm={this.props.updateTerm}/>
                </nav>
            </div>
        )
    }
}

export default Navbar;