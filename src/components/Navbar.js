import React from 'react';

class Navbar extends React.Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-md navbar-dark fixed-top corners justify-content-between">
                    <a href="#" id="nav-logo">Pokédex</a>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <a className="nav-link" id="one" href="#" onClick={(e) => this.props.callBack(e.target.id)}>Gen I<span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" id="two" href="#" onClick={(e) => this.props.callBack(e.target.id)}>Gen II</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" id="three" href="#" onClick={(e) => this.props.callBack(e.target.id)}>Gen III</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" id="four" href="#" onClick={(e) => this.props.callBack(e.target.id)}>Gen IV</a>
                            </li>
                        </ul>
                        <span className="navbar-text">
                            Powered by PokeAPI
                        </span>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Navbar;