import styles from "./navbar.module.css"
import Logo from "../../assests/logo.svg"
import Cart from "../../assests/cart.png"
import { Link } from "react-router-dom"


const Navbar = () => {
    return (
      <div className={styles.navbar}>
          <div className={ styles.branding}>
          <img src={Logo} alt="logo" className={styles.navlogo} />
              <p className={ styles.name}>Satara</p>
              <p className={styles.mobile}>Mobile</p>
            </div>
                {/* <p className={ styles.developer}>Web App Developed by - Akib Bagwan</p> */}
          {/* <div className={ styles.loginSignInCart}>
              <button className={ styles.loginBtn}>Login</button>
              <button className={styles.loginBtn}>Sign up</button>
              <img src={Cart} alt="Cart" className={styles.cart} />
              <p style={{marginTop:"-8px",fontSize:"12px",marginLeft:"-8px",backgroundColor:"red",color:"white",borderRadius:"100%",height:"18px",width:"18px"}}>1</p>
          </div> */}
      </div>
  )
}

export default Navbar