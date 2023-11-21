// PopUp.js


import './Popup.css';



const PopUp = ({strCategory,strMeal,strMealThumb,popup,setPopup}:{
    strCategory:string,
    strMeal:string,
    strMealThumb:string
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
      </div>
    </div>
  );
};

export default PopUp;
