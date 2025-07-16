//IMPORT PRICIPAIS E EXTENSÕES
import React from 'react';

// IMPORT DOS ESTILOS
import S from './components/SCSS/app.module.scss';
import "../src/global.scss";

// IMPORT DOS COMPONENTES

import Header from './components/Header/Header.jsx';
import Main from './components/Main/Main.jsx';
import Footer from './components/Footer/Footer.jsx';

function App() {
  return (
    <>
    <div className={S.orange}>
    <Header />
    <Main />
    <Footer />
    </div>
    </>
  )
}

export default App