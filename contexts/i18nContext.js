import React from "react";

export const I18nContext = React.createContext();

export const useI18n = () => {
  return React.useContext(I18nContext);
};

export default function I18nProvider({ children, i18n }) {
  return (
    <>
      <I18nContext.Provider value={i18n}>{children}</I18nContext.Provider>
    </>
  );
}
