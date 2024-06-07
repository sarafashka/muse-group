import styles from './Footer.module.scss';

const footerLinks = [
  {name: 'Help Center',
   url: 'https://support.animaapp.com/en/'
  },
  {name: 'Privacy Policy',
  url: 'https://forum.animaapp.com/privacy'
 },
  {name: 'Terms of Service',
  url: 'https://forum.animaapp.com/tos'
  },
]

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