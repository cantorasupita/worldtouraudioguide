import i18n from "i18next";
import { initReactI18next } from "react-i18next";//pentru conect i18n cu react
import LanguageDetector from 'i18next-browser-languagedetector'; //skimba limba  dupa limba OS
import { LOCALS } from './const.js';

import en from './lang/en-US.json';
import ro from './lang/ro-RO.json';
import rs from './lang/rs-RS.json';



const resources = {
  [LOCALS.EN]: {
    translation: en
  },
  [LOCALS.RO]: {
    translation: ro
  },
  [LOCALS.RS]: {
    translation: rs
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector) //skimba limba  dupa limba OS
  .init({
    resources,
    fallbackLng: 'rs-RS', //defalt langue daca nui limba daales in OS
    //lng: "uk", //defalt langue--------------------------------------------------------

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;