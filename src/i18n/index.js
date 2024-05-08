import i18n from "i18next";
import { initReactI18next } from "react-i18next";//pentru conect i18n cu react
import LanguageDetector from 'i18next-browser-languagedetector'; //skimba limba  dupa limba OS
import { LOCALS } from './const.js';

import en from './lang/en-US.json';
import ro from './lang/ro-RO.json';
import rs from './lang/rs-RS.json';
import de from './lang/de-DE.json';
import nl from './lang/nl-NL.json';
import es from './lang/es-ES.json';
import pt from './lang/pt-PT.json';
import it from './lang/it-IT.json';
import dk from './lang/dk-DK.json';
import fi from './lang/fi-FI.json';
import fr from './lang/fr-FR.json';
import jp from './lang/jp-JP.json';
import cn from './lang/cn-CN.json';


//--------------------------------------
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
  [LOCALS.DE]: {
    translation: de
  },
  [LOCALS.NL]: {
    translation: nl
  },
  [LOCALS.ES]: {
    translation: es
  },
  [LOCALS.PT]: {
    translation: pt
  },
  [LOCALS.IT]: {
    translation: it
  },
  [LOCALS.DK]: {
    translation: dk
  },
  [LOCALS.FI]: {
    translation: fi
  },
  [LOCALS.FR]: {
    translation: fr
  },
  [LOCALS.JP]: {
    translation: jp
  },
  [LOCALS.CN]: {
    translation: cn
  },
};


//-------------------------------------------------
i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector) //skimba limba  dupa limba OS
  .init({
    resources,
    fallbackLng: 'en-US', //defalt langue daca nui limba daales in OS
    //lng: "en-US", //defalt langue--------------------------------------------------------

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;