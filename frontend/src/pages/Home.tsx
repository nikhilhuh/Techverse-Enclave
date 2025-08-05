import React from 'react'
import Hero from '../components/Home/Hero'
import Founders from '../components/Home/Founders'
import Benefits from '../components/Home/Benefits'
import Testimonials from '../components/Home/Testimonials'
import { useTheme } from '../context/ThemeProvider'

const Home: React.FC = () => {
  const { lightMode } = useTheme();

  React.useEffect(()=> {
    window.scrollTo(0, 0);
  } ,[]);
  
  return (
    <div className={`min-h-screen w-full ${lightMode? "bg-[var(--tech-light)" : "bg-[var(--tech-dark)]"}`}>
      <Hero />
      <Founders />
      <Benefits />
      <Testimonials />
    </div>
  )
}

export default Home