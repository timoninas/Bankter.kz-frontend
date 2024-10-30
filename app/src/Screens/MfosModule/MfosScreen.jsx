import React, {useState, useEffect} from 'react';
import MfosSection from "../../Components/MfosSection/MfosSection";
import Header from "../../Components/Header/Header";
import Modal from "../../Components/Modal/Modal";
import classes from "./MfosScreen.module.css";
import {useTranslation, Trans} from 'react-i18next'
import FilterButton from "../../Components/FilterButton/FilterButton";
import axios from "axios";
import Button from "../../Components/Button/Button";

const lngs = {
    ru: {nativeName: "Рус"},
    kz: {nativeName: "Қаз"}
}

const tengeLine = (from, to, lang) => {
    if (from && to) {
        if (lang === "ru") {
            return `от ${from} до ${to} тенге`;
        } else {
            return `${from} ден ${to} теңгеге дейін`;
        }
    } else {
        return 'N/A'
    }
};

const percentLine = (to, lang) => {
    if (to) {
        if (lang === "ru") {
            return `до ${to}%`;
        } else {
            return `${to} дейін%`;
        }
    } else {
        return 'N/A'
    }
};

const periodLine = (period_to, lang) => {
    if (period_to) {
        if (lang === "ru") {
            return `от ${period_to} месяцев`;
        } else {
            return `${period_to} айдан бастап`;
        }
    } else {
        return 'N/A'
    }
};

const UserScreen = () => {
    const [banks, setBanks] = useState([]);
    const [modal, setModal] = useState(false);
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
            } catch (error) {
                console.error('Ошибка при получении данных:', error);
            }
        };

        fetchBanks();
    }, [i18n.resolvedLanguage]);

    if (!banks) {
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
                link: "/"
            }
        ],
        buttons: buttons
    }

    const mfos = banks.map((item) => {
        return {
            title: item.name,
            subtitle: item.registration[0],
            imageUrl: item.logo,
            features: [
                {
                    title: t("stavka"),
                    subtitle: percentLine(item.rate_to, i18n.resolvedLanguage)
                },
                {
                    title: t("srok"),
                    subtitle: periodLine(item.period_to, i18n.resolvedLanguage)
                },
                {
                    title: t("sum"),
                    subtitle: tengeLine(item.amount_from, item.amount_to, i18n.resolvedLanguage)
                }
            ],
            button: {
                title: t("pereiti"),
                link: item.url
            }
        };
    });

    const filterButton = {
        title: t("filters"),
        onClick: () => setModal(true),
    }

    const overlay = {
        sumTengeTitle: t("sumTenge"),
        sumTitle: t("sum"),
        tengeTitle:  t("tenge"),
        filtersTitle: t("filters"),
        inputValue: t("inputValue"),
        srokTitle: t("srok"),
        monthTitle: t("months"),
        yearsTitle: t("years14"),
        applyTitle: t("apply"),
        onClose: () => setModal(false),
    }

    return (
        <div className={classes.userScreen}>
            <Header props={header}/>
            <FilterButton props={filterButton} />

            {mfos && mfos.length > 0 && (
                <MfosSection props={{mfoItems: mfos}}/>
            )}

            {modal && (
                <Modal props={overlay}/>
            )}

        </div>
    );
};

export default UserScreen;