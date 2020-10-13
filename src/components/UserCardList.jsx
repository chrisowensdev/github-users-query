import React from 'react';
import UserCard from './UserCard';

const UserCardList = (props) => {
    const { users } = props;
    return (
        <>
            <h1>User Card List</h1>
            
            {users.map(user => {
                return <UserCard user={user}/>
            })}
            
        </>
    )
}

export default UserCardList
