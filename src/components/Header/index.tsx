import styles from './styles.module.css'
import logo from '../../assets/img/logo.svg'

export const Header = () => {
  return (
    <header className={styles.header}>
      <img src={logo} alt="todo" />
    </header> 
  )
}