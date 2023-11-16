import React from 'react';
import User from './User';
import Card from '../ui/Card';
import styles from './UserList.module.css';

const UserList = ({ users, removeUser }) => {
    return (
        <Card className={styles.users}>
            <ul>
                {users.map((user) => {
                    return (
                        <User
                            key={user.id}
                            user={user}
                            removeUser={removeUser}
                        />
                    );
                })}
            </ul>
        </Card>
    );
};

export default UserList;
