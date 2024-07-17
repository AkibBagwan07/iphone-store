import styles from "./navbar.module.css"
import Logo from "../../assets/logo.svg"

const Navbar = () => {
  return (
      <div className={styles.navbar}>
          <div className={ styles.branding}>
          <img src={Logo} alt="logo" className={styles.navlogo} />
              <p className={ styles.name}>Satara</p>
              <p className={styles.mobile}>Mobile</p></div>
          <div className={ styles.portal}>
              <p>Admin Portal</p>
          </div>
      </div>
  )
}

export default Navbar