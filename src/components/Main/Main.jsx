// IMPORTS LIBRARY

// IMPORTS STYLES
import '../../global.scss';
import S from './main.module.scss';
import Test from '../../components/SCSS/app.module.scss';

//IMPORT COMPONENTS
import Header from '../Header/Header.jsx';



function Main() {
  return (
    <main className={S.styleMain}>
        {/* <div id='orange' className={S.orange}></div> */}
        <section className={Test.orange}>
          <Header />
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque nisl velit, ultricies in semper non, pulvinar euismod nibh. Vivamus tincidunt dignissim urna, ac posuere augue porttitor vel. Mauris dapibus, erat a pulvinar pharetra, tellus lacus fringilla erat, non eleifend urna nunc eget metus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aenean a sem et nibh tempor vestibulum a tincidunt ex.
        </p>
        </section>
      <section className='budget'>
        <form action='/budget' method='POST'>
          <label htmlFor="name">
            <input type="text" id='name' name='name'/>
          </label>
          <label htmlFor="email">
            <input type='email' id='email'  name='email'/>
          </label>
          <label htmlFor="contactNbr">
            <input type="text" id='contactNbr' name='contactNbr' />
          </label>
          <label htmlFor="state">
            <input type="select" id='state' name='state' />
          </label>
          <label htmlFor="city">
            <input type="select" id='city' name='city' />
          </label>
          <label htmlFor="payment">
            <input type="text" id='payment' name='payment'/>
          </label>
          <label htmlFor="roofType">
            <input type="select" id='roofType' name='roofType' />
          </label>
          <label htmlFor="appliances">
            <input type="radio" id='appliances' name='App1'/>
            <input type="select" id='appliances' name='App1' />
          </label>
        </form>
      </section>
    </ main>
  )
}

export default Main