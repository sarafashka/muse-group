import { socialLinks, heroSection } from "../../content/content";
import Footer from "../Footer";
import FormEmail from "../FormEmail";
import Header from "../Header";
import Products from "../Products";

import styles from './App.module.scss';

const { hero, hero__title,  hero__description, hero__image, hero__caption, hero__wrapper, social, social__description, social__links, social__icon } = styles;

const App = () => {
  return (
    <>  
      <Header/>
      <main>
      <section className={hero__wrapper}>
        <div className="container">
          <div className={hero}>
              <h1 className={hero__title}>{heroSection.title}</h1>
              <p className={hero__description}>{heroSection.description}</p>
              <div className={hero__image}></div>
              <p className={hero__caption}>{heroSection.caption}</p>
              <FormEmail/>
          </div>
        </div>
      </section>
      <Products/>
      <section className="container">
        <div className={social}>
          <div className = {social__links}>
            {socialLinks.map((item, index)=> (
                  <a key={index} href={item.url} target="_blank" rel="noopener noreferrer">
                     <img className={social__icon} src={item.icon} alt={item.caption}/>
              </a>
            ))}
          </div>
          <div className={social__description}>You're not just a student - you're part of a vibrant community of
           like-minded individuals united by a passion for frontend development. Collaborate, innovate, and grow 
           alongside fellow learners and industry professionals as you embark on this exciting journey together.</div>
        </div>
      </section>
      </main>
      <Footer/>
    </>
  )
}

export default App;
