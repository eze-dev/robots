import React, { Component } from 'react';
import CardList from '../components/CardList';
import { connect } from 'react-redux';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';
import ErrorBoundry from '../components/ErrorBoundry';
import { setSearchField } from '../actions';

const mapStateToProps = state => {
    return {
        searchField: state.searchRobots.searchField
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value))
    }
}

class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
    }
    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })

    }
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({ robots: users }));
    }


    render() {
        const filteredRobots = this.state.robots.filter(robots => {
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        return (
            <div className='tc'>
                <h1 className='f1'>MES ROBOTS</h1>
                <SearchBox searchChange={this.onSearchChange} />
                <ErrorBoundry>
                    <Scroll>
                        <CardList robots={filteredRobots} />
                    </Scroll>
                </ErrorBoundry>
                <div class="card text-center">

                    <div className="card-body ">
                        <p className="card-text f2">Page de depart</p>
                        <a href="#" class="btn btn-primary">Ajouter des robots</a>
                    </div>
                </div>

            </div>
        );

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);