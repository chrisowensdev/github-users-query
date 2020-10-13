import React from 'react';
import UserCard from './UserCard';

const UserCardList = (props) => {
    const { users } = props;
    return (
        <>
            <h1>User Card List</h1>

            {users.map((user, index) => {
                return <UserCard user={user} key={index}/>
            })}
            
        </>
    )
}

export default UserCardList
