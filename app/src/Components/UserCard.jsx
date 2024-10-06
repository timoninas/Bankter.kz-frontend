import React from 'react';

// interface UserProps {
//     name: string;
//     email: string;
//     avatarUrl: string;
// }

const UserCard = ({ userProps }) => {
    return (
        <div className="user-card">
            <img src={userProps.avatarUrl} alt={userProps.name} className="user-avatar" />
            <div className="user-info">
                <h2>{userProps.name}</h2>
                <p>{userProps.email}</p>
            </div>
        </div>
    );
};

export default UserCard;