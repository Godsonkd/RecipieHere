import axios from 'axios';




export const fetchDishes = async () => {



  try {
    
    const apiUrl="https://www.themealdb.com/api/json/v1/1/search.php?f=b";
    const response = await axios.get(apiUrl);
    const dishes=response.data;
    return dishes;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};
