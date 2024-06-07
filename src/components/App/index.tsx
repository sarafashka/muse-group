import Footer from "../Footer";
import FormEmail from "../FormEmail";
import Header from "../Header";
import ProductCard from "../ProductCard";

import styles from './App.module.scss';

const { hero, hero__description, hero__image, hero__caption, hero__wrapper } = styles;

const App = () => {
  return (
    <>  
      <Header/>

      <section className={hero__wrapper}>
        <div className="container">
          <div className={hero}>
              <h1>Muse Group Frontend Academy</h1>

              <p className={hero__description}>Our academy offers a transformative learning experience designed to empower
                you with the skills and knowledge needed to succeed in the ever-evolving field
                of frontend development.</p>

              <div className={hero__image}></div>

              <p className={hero__caption}>Are you ready to turn your passion for technology into a thriving career?</p>

              <FormEmail/>
          </div>
        </div>
      </section>

      <ProductCard/>

      <footer><Footer/></footer>
      
      </>
  )
}

export default App;
