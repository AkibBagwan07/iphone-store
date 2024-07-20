import styles from './Sidebar.module.css'
// import { Link } from "react-router-dom"
import Insta from "../../../assests/insta.avif"
import Fb from "../../../assests/fb.svg"
import Wp from "../../../assests/wp.svg"
const Sidebar = () => {
  return (
      <div className={styles.sidebar}>
          {/* <Link to={"/addproduct"} className={styles.link}> */}
          {/* <div className={styles.sidebarItem}>
                  <img src={Wp} alt="AddProduct" className={styles.whatsApp} />
                  <p>WhatsApp</p>
              </div> */}
              <div className={styles.sidebarItem}>
                 <a href="https://www.instagram.com/shahidkapoor/?hl=en" target='blank'><img src={Insta} alt="instagram" className={styles.insta} /></a>
                  <p>Instagram</p>
              </div>
          {/* </Link> */}
        {/* //   <Link to={"/allProducts"} className={styles.link}> */}
              <div className={styles.sidebarItem}>
                  <a href="https://www.facebook.com/shahidkapoor/" target='blank'><img src={Fb} alt="facebook" className={styles.fb} /></a>
                  <p>Facebook</p>
              </div>
          {/* </Link> */}
    </div>
  )
}

export default Sidebar