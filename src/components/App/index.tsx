import { socialLinks } from "../../content/content";
import Footer from "../Footer";
import FormEmail from "../FormEmail";
import Header from "../Header";
import ProductCard from "../ProductCard";

import styles from './App.module.scss';

const { hero, hero__description, hero__image, hero__caption, hero__wrapper, social, social__description, social__links } = styles;

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

      <section className="container">
          <ProductCard/>
      </section>

      <section className={social}>
        <div className="container">
          <div className = {social__links}>
            {socialLinks.map((item, index)=> (
                  <a key={index} href={item.url} target="_blank" rel="noopener noreferrer">
                     <img src={item.icon} alt={item.caption}/>
              </a>
            ))}
          </div>
          <div className={social__description}>You're not just a student - you're part of a vibrant community of
           like-minded individuals united by a passion for frontend development. Collaborate, innovate, and grow 
           alongside fellow learners and industry professionals as you embark on this exciting journey together.</div>
        </div>
      </section>

      <footer><Footer/></footer>
      
      </>
  )
}

export default App;
