import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import './App.css';

class App extends Component {
    constructor() {   //constructor and render are pre-built values of React
        super()
        this.state = {
            robots: [],  //robots will be an empty array when we start off
            searchfield: ''
        }
        //console.log('constructor');
    }

    componentDidMount() { //since this is part of React, not using arrow functions here like onSearchChange()
        //console.log('check');  this gets called automatically even having done anything.

        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => { return response.json(); })
            .then(users => { this.setState({ robots: users })  });
            //console.log('componentDidMount');
    }

    onSearchChange = (event) => {  //but anytime when we use our own function in React we've to use this Syntax 
        //console.log(event.target.value);
        this.setState({ searchfield: event.target.value })

    }

    render () {
        const { robots, searchfield } = this.state;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase())
        })
        //console.log('render'); //render gets rerun bcz we run an empty array to a list of robots
        return !robots.length ?
             <h1>Loading</h1> :
             (
                <div className='tc'> 
                    <h1 className="f2">RoboFriends</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <Scroll>
                        <ErrorBoundary>
                            <CardList robots={ filteredRobots }/>
                        </ErrorBoundary>
                        
                    </Scroll>
                     
                </div>
            );
        
    }
}

export default App;