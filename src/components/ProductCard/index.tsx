import styles from './ProductCard.module.scss'

const ProductCard = () => {
  const {
    product,
    product__about,
    product__name,
    product__image,
    product__description,
    product__details
  } = styles;
  return (
    <>
    <div className={product}>
      <div className={product__image}></div>
      <div className={product__about}>
        <h4 className={product__name}>Ultimate Guitar</h4>
        <div className={ product__description}>The best platform for music makers to play songs they love. Home to the world's largest music community.</div>
        <button className={product__details}>Read more</button>
      </div>
     
    </div>

    </>
  )
}

export default ProductCard;