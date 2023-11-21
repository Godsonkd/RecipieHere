import React, { useEffect, useState } from 'react';
import { Grid, Card, CardContent, Typography, CardMedia} from '@mui/material';
import { fetchDishes } from '../Api/Api';
import { StyledGrid } from '../styles/styles';
import Loader from './Loader';
import { useTranslation } from 'react-i18next';
import Pagination from './Pagination';
import PopUp from './Popup'

type AllDishes={
    idMeal?:string,
    strMealThumb:string,
    strMeal:string,
    strCategory:string
   

}

export const Recipies = () => {

  const { t } = useTranslation();
    
    const [dishes,setDishes]=useState<AllDishes[]>([])
    const dishesPerPage=8;
    const [popup,setPopup]=useState(false);
    const [currentPage,setCurrentPage]=useState(1);
    const [loading,setLoading]=useState<boolean>(true);

    const end=currentPage*dishesPerPage;
    const start=end-dishesPerPage;

    const dishesForOnePage=dishes.slice(start,end);

    
    const [dishDetails, setDishDetails] = useState<AllDishes>(
      {
        strCategory: '',
        strMeal: '',
        strMealThumb: '',
      },
    );

    const buttonClick= (item:number)=>{
     
     setCurrentPage(item)
   }

   //handle popup

   const handlePopup = (Category: string, Meal: string, MealThumb: string): void => {
    setPopup(true);
    setDishDetails(
      {
        strCategory: Category,
        strMeal: Meal,
        strMealThumb: MealThumb,
      },
    );
  };

    const fetchDishesApi= async () => {
          try {
            
            const dishesHere = await fetchDishes();
            
            
            setDishes(dishesHere.meals);
            setLoading(false)
          } catch (error) {
            console.log(error);
            
          }
        };
    
        console.log(dishDetails.strMeal);
        


    useEffect(() => {
        fetchDishesApi();
        
      }, []); // eslint-disable-next-line 
        
     const maxDishes=dishesPerPage;

  
   
    
     const RecipiesOfDishes=dishesForOnePage?.map((dish,index)=>{
            if(index < maxDishes){
              return(
                <Grid key={dish.idMeal} item xs={12} sm={6} md={4} lg={3}>
                <Card style={{
                    boxShadow:"0 4px 8px rgba(0, 0, 0, 0.4)",
                    cursor:"pointer"
                }}
                onClick={()=>handlePopup(dish.strCategory,dish.strMeal,dish.strMealThumb)}
                >
                  <CardMedia
                    component="img"
                    alt={dish.strMeal}
                   
                    style={{objectFit:"cover",width:"300px",margin:"20px auto",display: "block"}}
                    image={dish.strMealThumb}
                  />
                  <CardContent>
                    <Typography variant="h6" component="div">
                      {dish.strMeal.length<12 ? dish.strMeal : dish.strMeal.slice(0,12)+"..."}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {dish.strCategory}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              )
            }
            return null;
     })
      
const NumberOfPages= dishes.length/dishesPerPage;



  return (

    <section>

        {!loading? <StyledGrid container spacing={3} >
        <Grid item xs={12} sm={12} md={12} lg={12} textAlign="center">
        <h2>{t('Heading')}</h2>
        </Grid>
    
        {RecipiesOfDishes}

       {popup && <PopUp
          strCategory={dishDetails.strCategory}
          strMeal={dishDetails.strMeal}
          strMealThumb={dishDetails.strMealThumb}
          popup={popup}
          setPopup={setPopup}
        />
        }
        
        
        

      </StyledGrid>:<Loader />}
      <Grid container  spacing={3} sx={{padding:"0 10%",height:"100px"}} justifyContent="center" alignItems="center" >
         <Pagination 
            currentPage={currentPage}
            dishesPerPage={dishesPerPage}
            NumberOfPages={NumberOfPages}
            buttonClick={buttonClick}
            setCurrentPage={setCurrentPage}
          />
        </Grid>
    </section>

  )
}
