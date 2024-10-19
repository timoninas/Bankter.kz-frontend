import React, {useState, useEffect} from 'react';
import MfosSection from "../../Components/MfosSection/MfosSection";
import Header from "../../Components/Header/Header";
import classes from "./MfosScreen.module.css";
import {useTranslation, Trans} from 'react-i18next'

const lngs = {
    ru: {nativeName: "Рус"},
    kz: {nativeName: "Қаз"}
}

const UserScreen = () => {
    const [mfos, setUser] = useState(null);
    const {t, i18n} = useTranslation();

    useEffect(() => {
        const fetchData = async () => {
            const data = {
                mfoItems: [
                    {
                        title: t("helloWorld"),
                        subtitle: 'Лучшие потребительские кредиты',
                        imageUrl: "https://my.s3-cdn.com/offers/thumbs/8/103166.png",
                        features: [{
                            title: "Ставка",
                            subtitle: "18.9%"
                        },
                            {
                                title: "Срок",
                                subtitle: "От 6 месяцев"
                            },
                            {
                                title: "Сумма",
                                subtitle: "800.000 тенге — 5 млн тенге"
                            }],
                        button: {
                            title: "Перейти",
                            link: "/mfo/1"
                        }
                    },
                    {
                        title: 'Kaspi bank',
                        subtitle: 'Лучшие потребительские кредиты',
                        imageUrl: "https://my.s3-cdn.com/offers/thumbs/8/103166.png",
                        features: [{
                            title: "Ставка",
                            subtitle: "18.9%"
                        },
                            {
                                title: "Срок",
                                subtitle: "От 6 месяцев"
                            },
                            {
                                title: "Сумма",
                                subtitle: "800.000 тенге — 5 млн тенге"
                            }],
                        button: {
                            title: "Перейти",
                            link: "/mfo/1"
                        }
                    },
                    {
                        title: 'Kaspi bank',
                        subtitle: 'Лучшие потребительские кредиты',
                        imageUrl: "https://my.s3-cdn.com/offers/thumbs/8/103166.png",
                        features: [{
                            title: "Ставка",
                            subtitle: "18.9%"
                        },
                            {
                                title: "Срок",
                                subtitle: "От 6 месяцев"
                            },
                            {
                                title: "Сумма",
                                subtitle: "800.000 тенге — 5 млн тенге"
                            }],
                        button: {
                            title: "Перейти",
                            link: "/mfo/1"
                        }
                    },
                    {
                        title: 'Kaspi bank',
                        subtitle: 'Лучшие потребительские кредиты',
                        imageUrl: "https://my.s3-cdn.com/offers/thumbs/8/103166.png",
                        features: [{
                            title: "Ставка",
                            subtitle: "18.9%"
                        },
                            {
                                title: "Срок",
                                subtitle: "От 6 месяцев"
                            },
                            {
                                title: "Сумма",
                                subtitle: "800.000 тенге — 5 млн тенге"
                            }],
                        button: {
                            title: "Перейти",
                            link: "/mfo/1"
                        }
                    },
                    {
                        title: 'Kaspi bank',
                        subtitle: 'Лучшие потребительские кредиты',
                        imageUrl: "https://my.s3-cdn.com/offers/thumbs/8/103166.png",
                        features: [{
                            title: "Ставка",
                            subtitle: "18.9%"
                        },
                            {
                                title: "Срок",
                                subtitle: "От 6 месяцев"
                            },
                            {
                                title: "Сумма",
                                subtitle: "800.000 тенге — 5 млн тенге"
                            }],
                        button: {
                            title: "Перейти",
                            link: "/mfo/1"
                        }
                    },
                ]
            };
            setUser(data);
        };

        fetchData();
    }, []);

    if (!mfos) {
        return <div>Загрузка...</div>;
    }

    const buttons = Object.keys(lngs).map((lng) => ({
        title: lngs[lng].nativeName,
        isActive: i18n.resolvedLanguage === lng,
        onActive: () => i18n.changeLanguage(lng)
    }));

    const header = {
        texts: [
            {
                title: t("credits"),
                link: "/mfo/1"
            }
        ],
        buttons: buttons
    }


    console.log(Object.keys(lngs))
    return (
        <div className={classes.userScreen}>
            <Header props={header}/>
            <MfosSection props={mfos}/>
        </div>
    );
};

export default UserScreen;