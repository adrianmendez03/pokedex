import React from 'react';
import Navbar from './Navbar';
import DisplayList from './DisplayList';
import './App.css'

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = { currentTab: 'one' }

        this.manageTabs =  this.manageTabs.bind(this)
    }

    manageTabs(tab) {
        this.setState({ currentTab: tab })
    }

    render() { 
        return (
            <div>
                <Navbar callBack={this.manageTabs}/>
                <div className="container-fluid">
                    <div className="list">
                        <DisplayList currentTab={this.state.currentTab}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default App; 