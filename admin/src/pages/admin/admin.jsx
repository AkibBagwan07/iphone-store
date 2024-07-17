import AddProduct from "../../components/navbar/AddProduct/AddProduct"
import AllProducts from "../../components/navbar/AllProducts/AllProducts"
import Sidebar from "../../components/navbar/sidebar/Sidebar"
import styles from "./admin.module.css"
import {Routes,Route} from "react-router-dom"

const Admin = () => {
  return (
      <div className={styles.admin}>
          <Sidebar />
          <Routes>
              <Route path="/addproduct" element={<AddProduct/>} />
              <Route path="/allProducts" element={<AllProducts/>} />
          </Routes>
      </div>
  )
}

export default Admin