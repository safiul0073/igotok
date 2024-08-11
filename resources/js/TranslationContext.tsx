import React, { createContext, useContext } from "react";

const TranslationsContext = createContext({});

export const TranslationsProvider = ({ translations, locale, children }: any) => {
    return (
        <TranslationsContext.Provider value={{ translations, locale }}>
            {children}
        </TranslationsContext.Provider>
    );
};

export const useTranslations = (): unknown => {
    return useContext(TranslationsContext);
};

export const trans = (key: string) => {
    const { translations } = useTranslations() as { translations: any };
    const keys = key.split(".");
    let value = translations;

    keys.forEach((k) => {
        value = value[k];
    });

    return value || key;
};
