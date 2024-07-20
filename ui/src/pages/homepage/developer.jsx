import React from 'react'
import styles from "./developer.module.css"
import WP from "../../assests/wp.svg"
import Insta from "../../assests/insta.avif"

const Developer = () => {
  return (
    <div>
    <div className={styles.background}>
      <div className={ styles.DevelopedByAndName}>
          <p> Web App Developed by </p>
          <h2>Akib Bagwan</h2>
        <div className={styles.socials}>
          <p>Y</p>
          <img src={Insta} alt='' style={{height:"50px",width:"50px",mixBlendMode:"multiply"}}/>
            <img src={WP} alt='' style={{height:"50px",width:"50px"}}/>
          <p>T</p>
        </div>
        </div>
      </div>
    <div className={styles.end}></div>
    </div>
  )
}

export default Developer