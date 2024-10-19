import React from 'react';
import classes from "./Header.module.css";

const Header = ({props}) => {
    return (
        <div className={classes.header}>
            <div className={classes.logo}>bankter.kz</div>
            { props.texts && (
                <div className={classes.texts}>
                    {props.texts.map((textItem, index) => (
                        <a className={classes.text} href={textItem.link}>{textItem.title}</a>
                    ))}
                </div>
            )}

            <div className={classes.buttons}>
                {props.buttons !== undefined && props.buttons && (
                    (
                        props.buttons.map((button, index) => (
                            <button
                                className={(button.isActive === true ? classes.buttonActive : classes.button)}
                                onClick={() => { button.onActive() }}
                            >
                                {button.title}
                            </button>
                        ))
                    )
                )}
            </div>
        </div>
    );
};


export default Header;