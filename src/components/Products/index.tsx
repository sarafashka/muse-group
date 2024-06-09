import { productsList } from '../../content/content';
import styles from './Products.module.scss'

const Products = () => {
  const {
    products,
    products__list,
    products__title,
    product,
    product__about,
    product__name,
    product__image,
    product__description,
    product__caption,
    product__details,
    product__details_button,
    product__details_icon,
  } = styles;
  
  return (
    <section className="container">
      <div className={products}>
        <div className={products__title}>Our products</div>
        <div className={products__list}>
            {productsList.map((item, index) => (
              <div className={product} key={index}>
                <div className={product__image} style={{backgroundColor: `${item.color}`}}/>
                <div className={product__about}>
                  <div className={product__description}>
                      <h4 className={product__name}>{item.name}</h4>
                      <p className={ product__caption}>{item.description}</p>
                  </div>
                  <div className={product__details}>
                    <button className={product__details_button}>Read more</button>
                    <svg className={product__details_icon} width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clip-path="url(#clip0_45_240)">
                        <path d="M5.25 3.125L9.625 7.5L5.25 11.875" stroke="#3366FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </g>
                      <defs>
                        <clipPath id="clip0_45_240">
                        <rect width="14" height="14" fill="white" transform="translate(0 0.5)"/>
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
      
    </section>
  )
}

export default Products;