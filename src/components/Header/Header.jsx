//IMPORTS LIBRARY

//IMPORTS SCSS
import '../../global.scss';
import S from '../scss/styleHeader/header.scss';

//IMPORTS IMG
import Logo from "../../assets/LOGO.png";

function Header() {
  return (
    <header className={S.headerStyle}>
      <section className={S.menuSec}>
        <a href="/">Home</a>
        <a href="#budget">Orçamento</a>
      </section>
      <figure className={S.logoFig}>
        <img src={Logo} alt='Logo da Mega World Solutions, onde as letras estão em branco e escla decrescente de tamanho, dentro da representação de um sol nas cores azul e amarelo' />
      </figure>
    </ header>
  )
}

export default Header