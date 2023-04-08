import React, { useState } from 'react';
import AddUser from './components/users/AddUser';
import UserList from './components/users/UserList';

function App() {
    const initialUsers = [];
    const [users, setUsers] = useState(initialUsers);

    const addUser = (user) => {
        setUsers((prev) => {
            return [user, ...prev];
        });

        console.log('users: ', users);
    };

    const removeUser = (userId) => {
      setUsers(users.filter(user => user.id !== userId));
    }

    return (
        <>
            <AddUser addUser={addUser} />
            <UserList users={users} removeUser={removeUser} />
        </>
    );
}

export default App;
