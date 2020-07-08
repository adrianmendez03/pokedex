import React from 'react';
import Navbar from './Navbar';
import DisplayList from './DisplayList';
import './App.css'

class App extends React.Component {
    state = {
        term: ''
    }

    updateTerm = (newTerm) => {
        this.setState({term: newTerm})
    }

    render() { 
        return (
            <div>
                <Navbar updateTerm={this.updateTerm.bind(this)} />
                <div className="container-fluid" id="#">
                    <div className="list">
                        <DisplayList term={this.state.term} />
                    </div>
                </div>
            </div>
        )
    }
}

export default App; 