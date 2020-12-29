import polyglotI18nProvider from 'ra-i18n-polyglot';

import language_es from "ra-language-spanish";

import local_es from "./es.json";

const es = Object.assign(language_es, local_es);

localStorage.setItem('local', 'es');

export const i18nProvider = polyglotI18nProvider(() => es, 'es');