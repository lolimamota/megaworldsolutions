import React from 'react'

//IMPORT DOS ESTILOS
import '../../global.scss';
import * as S from '../../components/Main/main.module.scss';

function Main() {
  return (
    <main>
      <section className={S.bgSection1}>
        <div className={S.orangeSection1}>
          <p className={S.contentPrinciple}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat sequi optio sed sit nisi tempore a qui repudiandae officia porro iusto cumque, aperiam tempora inventore voluptatum vel vitae, iure illum! Itaque delectus minus earum consequatur perspiciatis quos cumque labore saepe.</p>
        </div>
      </section>
      
      <section className="forms">
        
      </section>
    </main>
  )
}

export default Main