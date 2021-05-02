import React, { useState } from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { I18nProvider } from '../i18n'

const LayoutDefault = ({ children }) => {

  const [lang, setLang] = useState("pt");

  const handleLangChange = (newLang) => {
    setLang(newLang);
  };
  
  return(
  <>
    <I18nProvider locale={lang}>
    <Header 
    navPosition="right" 
    className="reveal-from-bottom"
    handleLangChange={handleLangChange}
     />
    <main className="site-content">
      {children}
    </main>
    <Footer />
    </I18nProvider>
  </>
);
}
export default LayoutDefault;  