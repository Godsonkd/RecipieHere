/* // PopUp.js


import './Popup.css';



const PopUp = ({strCategory,strMeal,strMealThumb,strInstructions,popup,setPopup}:{
    strCategory:string,
    strMeal:string,
    strMealThumb:string,
    strInstructions?:string,
    popup:boolean,
    setPopup:React.Dispatch<React.SetStateAction<boolean>>
}) => {


  return (
    <div className="popupContainer">
      <div className="popupContent">
        <button className="closeButton" onClick={()=>setPopup(false)}>
          Close
        </button>
        <h2 className="title">{strMeal}</h2>
        <p className="category">Category: {strCategory}</p>
        <img src={strMealThumb} alt={strMeal} className="dishImage" />
        <div>
          <h4>Instructions to prepare</h4>
          <div className='instruction'>
           {strInstructions}
           </div>
        </div>
      </div>
    </div>

  
  );
};

export default PopUp;
 */

import React from 'react';
import './Popup.css';

const PopUp = ({
  strCategory,
  strMeal,
  strMealThumb,
  strInstructions,
  popup,
  setPopup
}: {
  strCategory: string;
  strMeal: string;
  strMealThumb: string;
  strInstructions?: string;
  popup: boolean;
  setPopup: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div className={`popupContainer ${popup ? 'active' : ''}`}>
      <div className="popupContent">
        <div className="cardContainer">
          <div className="cardHeader">
            <div className='descTitle'>
              <h2 className="title">{strMeal}</h2>
              <h3 className="category">Category: {strCategory}</h3>

            </div>
            
            <img src={strMealThumb} alt={strMeal} className="dishImage" />
           
          </div>
          <div className="cardDescription">
            <h4>Instructions to prepare</h4>
            <div className="instruction">{strInstructions}</div>
          </div>
        </div>
        <button className="closeButton" onClick={() => setPopup(false)}>
          Close
        </button>
      </div>
    </div>
  );
};

export default PopUp;
