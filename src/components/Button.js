import React, { useContext } from 'react';
import LanguageContext from '../contexts/LanguageContext';

const Button = () => {

  const language =  useContext(LanguageContext);

  return (
    <>
      <button className="ui button primary">
        {language === 'english' ? 'Submit' : 'Voorleggen'}
      </button>
    </>
  )
}

export default Button;


// Alternative using Consumer (use for multiple contexts):
// import React from 'react';
// import LanguageContext from '../contexts/LanguageContext';
// import ColorContext from '../contexts/ColorContext';

// const Button = () => {

//   return (
//     <>
//       <ColorContext.Consumer>
//         {(color) => 
//           <button className={`ui button ${color}`}>
//             <LanguageContext.Consumer>
//               {(value) => value === 'english' ? 'Submit' : 'Voorleggen'}
//             </LanguageContext.Consumer>
//           </button>
//         }
//       </ColorContext.Consumer>
//     </>
//   )
// }

// export default Button;