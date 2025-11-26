import React from 'react'

//IMPORT DOS ESTILOS
import '../../global.scss';
import * as S from '../../components/Main/main.module.scss';

function Main() {
  return (
    <main>
      <section className={S.imgBg}>
        <div className={S.orangeBg}>
          <div className={S.homeText}>
            <h1 className={S.titleH1}>
              Energia solar com experiência de verdade.
            </h1>
            <h2 className={S.titleH2}>
              Somos uma empresa 100% mineira, com especialistas que somam mais de 12 anos no mercado.
              De Belo Horizonte e Betim a qualquer ponto de Minas Gerais, entregamos soluções completas em energia solar.
            </h2>
          </div>
          <div className={S.homeBtn}>
            <a href="#budget">Quero economizar!</a>
          </div>
        </div>
      </section>
      <section className={S.forms}>

      </section>
    </main>
  )
}

export default Main