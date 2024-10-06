import React from 'react';
import classes from "./MfoItem.module.css";
import Button from "./../Button/Button";

const MfoItem = ({props}) => {
    return (
        <div className={classes.mfoCard}>
            <div className={classes.mfoHeader}>
                <img src={props.avatarUrl} alt={props.name} className={classes.mfoAvatar}/>
                <div className={classes.mfoTexts}>
                    <div className={classes.mfoTitle}>Kaspi bank</div>
                    <div className={classes.mfoSubtitle}>Лучшие потребительские кредиты</div>
                </div>
            </div>
            <ul>
                <li>
                    <div className={classes.mfoFeatureTitle}>Ставка</div>
                    <div className={classes.mfoFeatureSubtitle}>18.9%</div>
                </li>
                <li>
                    <div className={classes.mfoFeatureTitle}>Срок</div>
                    <div className={classes.mfoFeatureSubtitle}>от 6 месяцев</div>
                </li>
                <li>
                    <div className={classes.mfoFeatureTitle}>Сумма</div>
                    <div className={classes.mfoFeatureSubtitle}>800.000 тенге — 5 млн тенге</div>
                </li>
            </ul>
            <Button props={ {title:"Перейти" } } />
        </div>
    );
};

export default MfoItem;