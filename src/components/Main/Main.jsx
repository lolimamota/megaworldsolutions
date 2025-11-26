import React from 'react'

//IMPORT DOS ESTILOS
import '../../global.scss';
import * as S from '../../components/Main/main.module.scss';

function Main() {
  return (
    <main>
      <section className={S.imgBg}>
        <div className={S.orangeBg}>
          <h1 className={S.titleH1}>
            Especialista em soluções em energia elétrica e solar
          </h1>
          <h2 className={S.titleH2}>
            Produtos, projetos e serviços em um só lugar!
          </h2>
          <h3 className={S.titleH3}>
            Padronista
          </h3>
          <p className={S.text}>
            Deixe a energia elétrica chegar na sua casa, com a qualidade e segurança que você precisa. Instalação de padrão da CEMIG, dentro das normas, tendo material incluso.
          </p>
        </div>
      </section>
      <section className={S.forms}>
        
      </section>
    </main>
  )
}

export default Main