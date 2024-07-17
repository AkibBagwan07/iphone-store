import { useEffect, useState } from "react"
import styles from "./AllProducts.module.css"

const AllProducts = () => {

  const [allProducts, setAllProducts] = useState([])
  
  const fetchAllProducts = async () => {
    await fetch("http://localhost:4000/allProducts").then((res) => res.json()).then((data) => {
     // console.log(data)
      setAllProducts(data)
    })
  }

  const removeProduct = async (id) => { 
  await fetch(`http://localhost:4000/removeProduct`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type":"application/json",
    },
    body: JSON.stringify({id:id})
  })
    await fetchAllProducts()
  }


  useEffect(() => { 
    fetchAllProducts()
  },[])

  return (
    <div className={styles.AllProducts}>
        {allProducts.map((ele,idx) => { 
          return <div key={idx} className={styles.infoParent}>
      <hr />
      <div className={ styles.imageAndDescription}>
        <img src={ele.image} alt="" className={styles.image} />
        <div>
          <p className={styles.name}>{ele.company} {ele.modelNo} ({ele.gb}) - {ele.colour}</p>
          <p className={styles.description} style={{ fontWeight: 600 }}>About this item:</p>
          <p className={styles.description}>Brand :- {ele.company}</p>
          <p className={styles.description}>Model Name :- {ele.modelNo}</p>
          <p className={styles.description}>Colour :- {ele.colour}</p>
          <p className={styles.description}>Memory Storage Capacity :- {ele.gb}</p>
          <p className={ styles.description}>Warranty :- {ele.warranty}</p>
          <p className={styles.description}>Inbox includes :- {ele.accessories}</p>
          <p className={styles.description}>Description :- {ele.description}</p>
          <div className={styles.nameAndPrice}>
          <p className={styles.price}>Price :- ₹ {ele.price}</p>
          <button className={styles.remove} onClick={removeProduct}>Delete</button>
          </div>
        </div>
      </div>
    </div>
        })}
      </div>
  )
}

export default AllProducts