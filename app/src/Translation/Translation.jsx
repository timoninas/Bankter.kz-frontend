import i18next from "i18next"
import { initReactI18next } from "react-i18next"

i18next
    .use(initReactI18next)
    .init({
    lng: 'ru',
    resources: {
        ru: {
            translation: {
                credits: "Кредиты",
                helloWorld: "Привет мир"
            }
        },
        kz: {
            translation: {
                credits: "Несиелер",
                helloWorld: "Сәлем Әлем"
            }
        }
    }
});