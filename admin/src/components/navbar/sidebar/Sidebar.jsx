import styles from './Sidebar.module.css'
import { Link } from "react-router-dom"
import AddProduct from "../../../assets/addProduct.png"
import AllProducts from "../../../assets/allProducts.png"

const Sidebar = () => {
  return (
      <div className={styles.sidebar}>
           <Link to={"/addproduct"} className={styles.link}>
              <div className={styles.sidebarItem}>
                  <img src={AddProduct} alt="AddProduct" className={styles.addProductImg} />
                  <p>Add Product</p>
              </div>
          </Link>
          <Link to={"/allProducts"} className={styles.link}>
              <div className={styles.sidebarItem}>
                  <img src={AllProducts} alt="allProducts" className={styles.allProductsImg} />
                  <p>All Products</p>
              </div>
          </Link>
    </div>
  )
}

export default Sidebar