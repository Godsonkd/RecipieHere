import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';

export const ChangeButton = () => {

    const { i18n } = useTranslation();
    const [lang,setLang]=useState<string>("JA");
    
    const langBtn={
    border:"none",
    outline:"none",
    padding:"8px 8px",
    fontSize:"1.6rem",
    backgroundColor:"goldenrod",
    color:"grey",
    fontWeight:"bolder",
    fontFamily:"monospace",
    cursor:"pointer"
  }

    const ChangeLanguage= () =>{

        setLang((prevLang) => (prevLang === 'JA' ? 'EN' : 'JA'));
          
        i18n.changeLanguage(lang);
    }

  return (
    <div>
        <button style={langBtn} onClick={ChangeLanguage}>{lang}</button>
    </div>
  )
}
