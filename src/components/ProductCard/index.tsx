import { products } from '../../content/content';
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
    {products.map((item, index) => (
      <div className={product} key={index}>
        <div className={product__image} style={{backgroundColor: `${item.color}`}}></div>
        <div className={product__about}>
          <h4 className={product__name}>{item.name}</h4>
          <div className={ product__description}>{item.description}</div>
          <button className={product__details}>Read more</button>
        </div>
      </div>

    ))}
    

    </>
  )
}

export default ProductCard;