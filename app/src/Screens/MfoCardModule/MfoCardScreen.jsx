import React, { useState, useEffect } from 'react';
import {useParams} from "react-router-dom";

const MfoCardScreen = () => {

    const {id} = useParams();

    console.log(id)

    if (!id) return (<div>Not found mfo</div>);

    return (
        <div className="user-screen">
            TODO: Card with id {id}
        </div>
    );
};

export default MfoCardScreen;