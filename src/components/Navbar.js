import React from 'react';

class Navbar extends React.Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-md navbar-dark fixed-top corners">
                    <a href="#" id="nav-logo">Pokédex</a>
                </nav>
            </div>
        )
    }
}

export default Navbar;