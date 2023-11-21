
import { HeroSection } from "../styles/styles"
import { useTranslation } from 'react-i18next';

export const Hero = () => {

  const { t } = useTranslation();

  return (
    <HeroSection>
        <img  src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        <section>
            <h2>{t('heroTitle')}</h2>
            <p> {t('heroPara')}</p>
        </section>
    </HeroSection>
  )
}
