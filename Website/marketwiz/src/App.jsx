import React from 'react'
import Footer from './components/Footer'

const App = () => {
  return (

      <div style={{
        display: 'flex',
        padding: '24px 120px',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '10px',
        alignSelf: 'stretch',
        background: '#28292B'
      }}>
        <Footer />

    </div>
  )
}

export default App
/*
import React from 'react'
import styles from './style'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Info from './components/Info'
import Team from './components/Team'
import ContactUs from './components/ContactUs'
import Footer from './components/Footer'


const App = () => {
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
      <Footer />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>
  
    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Footer />
      </div>
    </div>
</div>
};

export default App

*/