import React from 'react'
import styles from './ProductCard.module.scss'
const ProductCard = ({item,addToBasket, addToWish}) => {
  return (
    <div className={styles.card}>
<img src={item.thumbnail} alt="photo" />
<p>{item.description}</p>
<p>{item.price}</p>
<p>{item.title}</p>
<div className={styles.bttns} style={{display:"flex",gap:'5px',flexDirection:'column'}}>
    <button style={{width:'150px',height:'35px',backgroundColor:'orange', color:'white',border:'none',cursor:'pointer'}} onClick={addToBasket}>sifaris et</button ><button style={{width:'150px',height:'35px',backgroundColor:'orange', color:'white',border:'none',cursor:'pointer'}} onClick={addToWish}>beyen</button>
</div>
    </div>
  )
}

export default ProductCard