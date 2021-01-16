import React, { useContext } from 'react';
import LanguageContext from '../contexts/LanguageContext';

const Field = () => {

  const language = useContext(LanguageContext);

  return (
    <div className="ui field">
      <label>{language === 'english' ? 'Name: ' : 'Naam: '}</label>
      <input />
    </div>
  )
}

export default Field;