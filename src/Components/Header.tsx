import React from 'react'
import { StyledFlex,StyledButton,StyledNav } from '../styles/styles'
import { ChangeButton } from './ChangeButton'
import { useTranslation } from 'react-i18next';

export const Header = () => {

  const { t } = useTranslation();

  return (
    <StyledFlex>
        <StyledButton href="">{t('Recipie')}</StyledButton>
        
            <StyledNav>
                <li><a  href='/'>{t('Home')}</a></li>
                <li><a href="/">{t('Checkout')}</a></li>
               <ChangeButton  />
              
            </StyledNav>
        <StyledButton sx={{
               backgroundColor:"black",
                color:"white",
                fontSize:"1.5rem"
            }}
        >

                 {t('Login')}

        </StyledButton>
        
    </StyledFlex>
  )
}
