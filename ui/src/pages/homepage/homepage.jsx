import React from 'react'
import Sidebar from '../../components/navbar/sidebar/Sidebar'
import styles from "./homepage.module.css"
import Section from '../../components/navbar/section/section'
import { Routes, Route } from "react-router-dom"

const Homepage = () => {
    return (
        <div className={styles.homepage}>
            <Sidebar />
            <Routes>
                <Route path='/' element={<Section />} />
            </Routes>
        </div>
   )
}

export default Homepage