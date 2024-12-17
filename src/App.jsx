import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Header } from './Components/Containers/Header/Header';
import { Footer } from './Components/Containers/Footer/Footer';

function App(){

  return(
    <div>
      <Header />
      <Footer />
    </div>
  );
}

export default App;
