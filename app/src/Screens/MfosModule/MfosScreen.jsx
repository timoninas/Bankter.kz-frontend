import React, { useState, useEffect } from 'react';
import MfoItem from "../../Components/MfoItem/MfoItem";
import classes from "./MfosScreen.module.css";

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
        <div className={classes.userScreen}>
            <h1>Профиль пользователя</h1>
            <MfoItem props = {user} />
            <MfoItem props = {user} />
        </div>
    );
};

export default UserScreen;