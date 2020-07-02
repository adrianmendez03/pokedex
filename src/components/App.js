import React from 'react';
import Navbar from './Navbar';
import DisplayList from './DisplayList';
import './App.css'

class App extends React.Component {
    render() {
        return (
            <div>
                <Navbar />
                <div className="container-fluid">
                    <div className="list">
                        <DisplayList />
                    </div>
                </div>
            </div>
        )
    }
}

export default App; 