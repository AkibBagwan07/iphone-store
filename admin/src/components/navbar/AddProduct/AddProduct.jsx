import { useState} from "react"
import styles from "./AddProduct.module.css"
import UploadArea from "../../../assets/uploadImg.png"
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
// import axios from "axios"
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
    const [showImage, setShowImage] = useState(null)
    const [productDetails, setProductDetails] = useState({
        company: "",
        modelNo:"",
        description:"",
        image: "",
        gb: "",
        colour: "",
        warranty: "",
        accessories:"",
        price:""
    }) 
    const navigate = useNavigate()
    const handleShowImage = (e) => {
        setShowImage(e.target.files[0])
    }

    const handleDetails = (e) => { 
        setProductDetails({...productDetails,[e.target.name]:e.target.value})
    }

    const addProduct = async () => {
        // console.log(productDetails)
        // let responseData
        // let product = productDetails;
        let formData = new FormData()
        formData.append('product', showImage);

        await fetch("https://iphone-store-backend-ufz6.onrender.com/upload", {
            method: "POST",
            headers: {
                Accept: 'application/json',
            },
            body: formData,
        }).then((res) => res.json()).then((data) => productDetails.image = data.image_url)
        // if (responseData.success){
        //     product.image = responseData.image_url;
        //     console.log(product)
        // }
        // console.log(productDetails)
        if (productDetails.image != "") { 
            await fetch("https://iphone-store-backend-ufz6.onrender.com/addProduct", {
                method: "POST",
                headers: {
                    Accept:'application/json',
                    'Content-Type':'application/json',
                },
              body:JSON.stringify(productDetails)
            }).then((res) => res.json()).then((data) => { 
                data.success ? alert("product added") : alert("failed")
                navigate("/allProducts")   
            })
        }
    }

  return (
      <div className={ styles.AddProduct}>
          <form className={styles.form}>
              <div className={styles.inputTitle}>
                  <TextField value={productDetails.company} onChange={handleDetails} className={ styles.TextField} type="text" name="company" placeholder="Type here" id="filled-basic" label="company" variant="filled" />
              </div>
              <div className={styles.inputTitle}>
                  <TextField value={productDetails.modelNo} onChange={handleDetails} className={ styles.TextField} type="text" name="modelNo" placeholder="Type here" id="filled-basic" label="modelNo" variant="filled" />
              </div>
              <div className={styles.inputTitle}>
                  <TextField  value={productDetails.description} onChange={handleDetails} className={ styles.TextField} type="text" name="description" placeholder="description"  id="filled-basic" label="description" variant="filled" />
              </div>
              <div className={styles.inputTitle}>
                  <TextField  value={productDetails.price} onChange={handleDetails} className={ styles.TextField} type="text" name="price" placeholder="Add Amount"  id="filled-basic" label="Price" variant="filled" />
              </div>
              <div className={styles.inputTitle}>
                  <TextField value={productDetails.gb} onChange={handleDetails} className={ styles.TextField} type="text" name="gb" placeholder="Type here" id="filled-basic" label="gb" variant="filled" />
              </div>
              <div className={styles.inputTitle}>
                  <TextField  value={productDetails.colour} onChange={handleDetails} className={ styles.TextField} type="text" name="colour" placeholder="colour"  id="filled-basic" label="colour" variant="filled" />
              </div>
              <div className={styles.inputTitle}>
                  <TextField  value={productDetails.warranty} onChange={handleDetails} className={ styles.TextField} type="text" name="warranty" placeholder="warranty"  id="filled-basic" label="warranty" variant="filled" />
              </div>
              <div className={styles.inputTitle}>
                  <TextField  value={productDetails.accessories} onChange={handleDetails} className={ styles.TextField} type="text" name="accessories" placeholder="accessories with phone"  id="filled-basic" label="accessories" variant="filled" />
              </div>
              <div className={ styles.imageContainer}>
                  <label htmlFor="file-input">
                      <img className={styles.image} src={showImage?URL.createObjectURL(showImage):UploadArea} alt="UploadedImage" />                   
                  </label>
                  <input onChange={handleShowImage} type="file" name="image" id="file-input" hidden/>
              </div>
              <div className={styles.BtnContainer}>
                  <Button onClick={addProduct} className={styles.AddBtn} variant="contained">Add</Button>
              </div>
          </form>
    </div>
  )
}

export default AddProduct
