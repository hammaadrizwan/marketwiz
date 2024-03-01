import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'



import Navbar from './Navbar'
import Footer from './Footer'
import Body from './Body'

function App() {
  return (
    <>
      <Navbar /> {/* Include the Nav component */}
      <Body /> {/* Include the Body component */}
      <Footer /> {/* Include the Footer component */}
    </>
  );
}

export default App;
