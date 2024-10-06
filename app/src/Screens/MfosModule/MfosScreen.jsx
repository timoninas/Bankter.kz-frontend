import React, { useState, useEffect } from 'react';
import UserCard from '../../Components/UserCard';

const UserScreen = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const data = {
                name: 'Anton',
                email: 'email@email.com',
                avatarUrl: "https://my.s3-cdn.com/offers/thumbs/8/103166.png"
            }
            setUser({
                name: data.name,
                email: data.email,
                avatarUrl: data.avatarUrl,
            });
        };

        fetchData();
    }, []);

    if (!user) {
        return <div>Загрузка...</div>;
    }

    return (
        <div className="user-screen">
            <h1>Профиль пользователя</h1>
            <UserCard userProps = {user} />
        </div>
    );
};

export default UserScreen;