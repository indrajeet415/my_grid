import axios from 'axios';
import React from 'react';
import UserCard from '../UserCard/UserCard';
import styles from './UserDeck.module.css';

class UserDeck extends React.Component {
    state = {
        users: [],
        search: '',
        filteredData: []
    
    }

    componentDidMount() {
        axios.get("https://dummyjson.com/Users")
        .then(res =>this.setState({users : res.data.user}))
        .catch(err => console.log(err))
    }

    handleChange = (e) => {
        let data = this.state.users.filtered(user => user.firstName.tolowerCase().includes(e.target.value.tolowerCase()))
        this.setState({search : e.target.value, filteredData : data}, () => console.log(this.state))
    }

    render() {

        return  (
            <div>
                <input
                    type = "text"
                    placeholder = "Enter user first name..."
                    onChange={(e) => this.handleChange(e)}              
                />
                
                <div className = {styles.container}>
                    {
                        this.state.filteredData.length === 0 && this.state ===''?
                            this.state.users.map((users, id) =><UserCard userData = {users} key= {'users'+ id}/>):
                            this.state.filteredData.map((user,idx)=><UserCard userData = {user} key= {'user' + idx}/>)

                    }


                </div>
            </div>
        )
        
    }
}

export default UserDeck;