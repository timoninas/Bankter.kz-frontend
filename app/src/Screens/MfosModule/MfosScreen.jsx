import React, {useState, useEffect} from 'react';
import MfosSection from "../../Components/MfosSection/MfosSection";
import Header from "../../Components/Header/Header";
import classes from "./MfosScreen.module.css";
import {useTranslation, Trans} from 'react-i18next'
import FilterButton from "../../Components/FilterButton/FilterButton";
import axios from "axios";
import Button from "../../Components/Button/Button";

const lngs = {
    ru: {nativeName: "Рус"},
    kz: {nativeName: "Қаз"}
}

const UserScreen = () => {
    const [banks, setBanks] = useState([]);
    const {t, i18n} = useTranslation();

    useEffect(() => {
        const fetchBanks = async () => {
            try {
                const response = await axios.post('/v1/banks/get', {
                    language: i18n.resolvedLanguage
                }, {
                    headers: {
                        "Content-type": "application/json; charset=UTF-8",
                        'Access-Control-Allow-Origin' : '*',
                        'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
                    }
                });
                setBanks(response.data.banks);
                console.log('new request', i18n.resolvedLanguage, response.data.banks)
            } catch (error) {
                console.error('Ошибка при получении данных:', error);
            }
        };

        fetchBanks();
    }, [i18n.resolvedLanguage]);

    if (!banks) {
        return <div>Загрузка...</div>;
    }

    console.log('lang', i18n.resolvedLanguage)
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

    const kekmfos = banks.map((item) => {
        return {
            title: item.name,
            subtitle: item.description || 'Лучшие потребительские кредиты', // Optional description, default if not present
            imageUrl: item.logo,
            features: [
                {
                    title: "Ставка",
                    subtitle: item.rate_from ? `от ${item.rate_from}%` : 'N/A'
                },
                {
                    title: "Срок",
                    subtitle: item.term ? `от ${item.term} месяцев` : 'N/A'
                },
                {
                    title: item.registration[0],
                    subtitle: item.amount ? `${item.amount} тенге` : 'N/A'
                }
            ],
            button: {
                title: "Перейти",
                link: item.url
            }
        };
    });

    console.log('kekmfos', kekmfos);
    return (
        <div className={classes.userScreen}>
            <Header props={header}/>
            <FilterButton />

            {kekmfos && kekmfos.length > 0 && (
                <MfosSection props={{mfoItems: kekmfos}}/>
            )}

        </div>
    );
};

export default UserScreen;