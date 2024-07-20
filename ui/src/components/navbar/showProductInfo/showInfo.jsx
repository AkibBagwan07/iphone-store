import React from 'react'
import styles from "./showInfo.module.css"

const ShowInfo = ({currEle}) => {
  return (
    <div className={styles.infoParent}>
      <div className={styles.btnParent}>
        <button className={styles.homeBtn} onClick={() => window.location.reload()}>Explore other Products!</button>
      </div>
      <hr />
      <div className={ styles.imageAndDescription}>
        <img src={currEle.image} alt="" className={styles.image} />
        <div>
          <p className={styles.name}>{currEle.company} {currEle.modelNo} ({currEle.gb}) - {currEle.colour}</p>
          <p className={styles.description} style={{ fontWeight: 600 }}>About this item:</p>
          <p className={styles.description}>Brand :- {currEle.company}</p>
          <p className={styles.description}>Model Name :- {currEle.modelNo}</p>
          <p className={styles.description}>Colour :- {currEle.colour}</p>
          <p className={styles.description}>Memory Storage Capacity :- {currEle.gb}</p>
          <p className={ styles.description}>Warranty :- {currEle.warranty}</p>
          <p className={styles.description}>Inbox includes :- {currEle.accessories}</p>
          <p className={styles.description}>Description :- {currEle.description}</p>
          <div className={styles.nameAndPrice}>
          <p className={styles.price}>Price :- ₹ {currEle.price}</p>
          <a href="http://wa.me/+917030333377" target='_blank' rel="noreferrer"><button className={styles.remove}>WhatsApp</button></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ShowInfo