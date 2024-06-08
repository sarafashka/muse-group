import { footerLinks } from '../../content/content';
import styles from './Footer.module.scss';

const {footer, footer__link} = styles;

const Footer:React.FC = () => {

  return(
    <>
    <footer className="container">
      <div className={footer}> 
        {footerLinks.map((item, index) => (
          <a className={footer__link}
          key={index}
          href={item.url}
          target="_blank"
          rel="noopener noreferrer">
            {item.name}
        </a>
       ))}
      </div>
    </footer>
    </>
  )
};

export default Footer;