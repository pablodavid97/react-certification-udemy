import React from 'react';

const User = ({ user, removeUser }) => {
    const handleUserClick = () => {
        removeUser(user.id);
    };
    return (
        <li onClick={handleUserClick}>
            {user.username} ({user.age} years old)
        </li>
    );
};

export default User;
