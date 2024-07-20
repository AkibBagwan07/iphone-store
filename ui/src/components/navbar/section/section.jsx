import React from 'react'
import styles from "./section.module.css"
import {useState} from "react"
import { useEffect } from 'react'
import ShowInfo from '../showProductInfo/showInfo'

const Section = () => {
    const [allProducts, setAllProducts] = useState([])
    const [showInfo,setShowInfo] = useState(false)
    const [currEle,setCurrEle] = useState()  
    // console.log(currEle)
    const fetchAllProducts = async () => {
    await fetch("http://localhost:4000/allProducts").then((res) => res.json()).then((data) => {
      // console.log(data)
      setAllProducts(data)
    })
    }
    
    useEffect(() => { 
    fetchAllProducts()
  },[])
    
  return (
    <div className={styles.AllProducts}>{showInfo ? <ShowInfo currEle={currEle} /> :
    <div>
        {allProducts.map((ele, idx) => {
          return <div style={{cursor:"pointer"}} onClick={() => { 
            setCurrEle(ele)
            setShowInfo(true)
          }} key={idx} ><hr /><div className={styles.cards}>
            <div className={styles.imageParent}><img className={ styles.image} src={ele.image} alt="phone-image" /></div>
            <div className={ styles.detailsParent}>
                <p className={styles.name}>{ele.company} {ele.modelNo} ({ele.gb}) - { ele.colour}</p>
                  <div className={styles.priceAndBtn}>
            <p className={ styles.price}>₹ {ele.price}</p>
              <a href="http://wa.me/+917030333377" target='_blank' rel="noreferrer"><button className={styles.remove}>WhatsApp</button></a>
            </div>
              </div>
              <h3 className={ styles.desAndSpeci}>Click to see Specification and Details!</h3>
              {/* <hr />
              <div>
                  <h2>Specification</h2>
                  <p className={styles.description}>{ele.description}</p>
              </div> */}
          </div>
            </div>
        })}
      </div>}</div>
  )
}

export default Section