
import { useTranslation } from 'react-i18next';

type Page={
  currentPage:number,
  dishesPerPage:number,
  NumberOfPages:number,
  buttonClick: (item: number) => void,
 
 setCurrentPage:React.Dispatch<React.SetStateAction<number>>
}




export const Pagination = ({currentPage,dishesPerPage,NumberOfPages,buttonClick,setCurrentPage}:Page) => {
 
  const { t } = useTranslation();
  
  const ButtonStyles={
    border:"1px solid green",
    padding: '10px',
    
    color: 'black',
  }



const pageNumbers=[];
for (let i = 1; i <=Math.ceil(NumberOfPages); i++) {
  pageNumbers.push(i);
}




  return (
    <div>
       <button 
        style={ButtonStyles}

        onClick={()=>{
          if(currentPage>1){
            setCurrentPage(currentPage-1)
          }
        }}
        >
          {t('Previous')}
          </button>
        <span
        style={{margin:"0 8px"}}
          >

         {currentPage} of {Math.ceil(NumberOfPages)}
        </span>
        <button 
         style={ButtonStyles}
         onClick={()=>{
          if(currentPage<Math.ceil(NumberOfPages)){
            setCurrentPage(currentPage+1)
          }
         }}
         >
          {t('Next')}
          </button>
    </div>
  )
}

export default Pagination
