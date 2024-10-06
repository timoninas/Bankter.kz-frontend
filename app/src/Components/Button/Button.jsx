import React from 'react';
import classes from "./Button.module.css";

const Button = ({props}) => {
    return (
        <button className={classes.buttonBackground}>
            <div className={classes.buttonTitle}>
                { props.title }
            </div>
        </button>
    );
};

export default Button;