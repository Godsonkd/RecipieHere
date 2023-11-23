
import React from 'react'
import './Contact.css';
import { Grid } from '@mui/material';
import { useTranslation } from 'react-i18next';

export const Contact = () => {

const { t }=useTranslation();
  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
  };


  return (
   
  
<Grid container spacing={2}>
    <Grid item xs={12} md={12}className="contact-form-container">
      <form onSubmit={handleSubmit} className="contact-form">
        <label htmlFor="firstName">{t('firstName')}:</label>
        <input type="text" id="firstName" name="firstName" required />

        <label htmlFor="lastName">{t('lastName')}:</label>
        <input type="text" id="lastName" name="lastName" required />

        <label htmlFor="email">{t('email')}:</label>
        <input type="email" id="email" name="email" required />

        <button className='submit' type="submit" >{t('contactUs')}</button>
      </form>
    </Grid>
  </Grid>
  )
}

