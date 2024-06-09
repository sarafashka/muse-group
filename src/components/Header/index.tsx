import logo from '../../assets/svg/logo-muse.svg';
import styles from './Header.module.scss';

const { header, header__logo} = styles;

const Header:React.FC = () => {
  return(
    <>
    <header className={header}>
      <img src={logo} className={header__logo} alt="logo"/>
    </header>
    </>
  )
};

export default Header;