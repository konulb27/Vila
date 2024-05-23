import React from 'react'
import styles from './ProductCard.module.scss'
const ProductDash = ({item,removewish}) => {
  return (
    <div className={styles.card}>
<img src={item.thumbnail} alt="photo" />
<p>{item.description}</p>
<p>{item.price}</p>
<p>{item.title}</p>
<button onClick={removewish}>silll</button>

    </div>
  )
}

export default ProductDash