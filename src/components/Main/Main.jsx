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
          <h3 className={S.titleH3}>
              Reduza sua conta de luz, valorize seu imóvel e invista em um futuro sustentável.
              Fale agora com um dos nossos especialistas e descubra o projeto ideal para você.
            </h3>
          <div className={S.homeBtn}>
            <a href="#budget">Quero economizar!</a>
          </div>
        </div>
      </section>
      <section className={S.forms}>
      <h2>
        Preencha o cadastro e entraremos em contato com você o mais breve possível!
      </h2>
      <form action="">
        <label htmlFor="nome-sobrenome">Nome e sobrenome?</label>
        <input type="text" id='nome-sobrenome' name='nome-sobrenome' required/>

        <label htmlFor="telefone">Telefone de contato?</label>
        <input type="tel" id='telefone' name='telefone' pattern='\([0-9]{2}\) 9 [0-9]{4}-[0-9]{4}' required/>

        <label htmlFor="email">Email?</label>
        <input type="email" id='email' name='email' required/>

        <label htmlFor="estado">Estado?</label>
        <input type="text" id='estado' name='estado' required />

        <label htmlFor="cidade">Cidade?</label>
        <input type="text" id='cidade' name='cidade' required />

        <label htmlFor="conta">Valor da última conta de luz?
        <select name="conta" id="cidade" required>
          <option value="null">
            - Selecione um valor -
          </option>
          <option value="valor1">
            R$ 250,00 até R$ 349,00
          </option>
          <option value="valor2">
            De R$ 350,00 a R$499,00
          </option>
          <option value="valor3">
            De R$500,00 a R$ 749,00
          </option>
          <option value="valor4">
            De R$750,00 a R$999,00
          </option>
          <option value="valor5">
            De R$1.000,00 a R$1.999,99
          </option>
          <option value="valor4">
            De R$ 2.000,00 a R$5.000,00
          </option>
          <option value="valor5">
            Acima de R$5.000,00
          </option>
        </select>
        `</label>

        <label htmlFor="telhado">Qual o tipo do seu telhado?
          <select name="telhado" id="telhado">
            <option value="null">
              - Selecione o tipo -
            </option>
            <option value="colonial">Telhado Colonial (Cerâmico)</option>
            <option value="metálico">Telhado Metálico</option>
            <option value="concreto">Telhado com telhas de concreto</option>
            <option value="pvc">Telhado de PVC</option>
            <option value="laje">Laje</option>
            <option value="solo">Solo</option>
            <option value="outro">
              <label htmlFor="outro" id='outro'>Outro:
              <input type="text-area" id='outro' required />
              </label>
            </option>
          </select>
        `</label>
      </form>
      </section>
    </main>
  )
}

export default Main