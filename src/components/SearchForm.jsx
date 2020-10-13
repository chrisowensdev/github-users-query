import React, { Component } from 'react';
import UserCardList from './UserCardList';

class SearchForm extends Component {
    state = {
        userName: "",
        users: []
    }

    _handleChange = newUserName => {
        this.setState({
            userName: newUserName
        })
    };

    _handleSubmit = async (event) => {
        event.preventDefault();
        const { userName } = this.state;
        const response = await fetch(`https://api.github.com/users/${userName}`);
        const user = await response.json();
        this.setState({
            users: [...this.state.users, user]
        });
        console.log(this.state.users);
    }
    
    render () {
        return (
            <>
            <h1>Search Form</h1>
            <form onSubmit={this._handleSubmit}>
                <input 
                    type="text" 
                    onChange={event => this._handleChange(event.target.value)}
                />
                <button type="submit">Find User</button>
            </form>
            <UserCardList users={this.state.users}/>
            </>
        )
    }
} 

export default SearchForm;