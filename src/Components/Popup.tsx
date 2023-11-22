// PopUp.js


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
