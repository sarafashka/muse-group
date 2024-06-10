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
                    <svg className={product__details_icon} width="6.11" height="11" viewBox="0 0 11 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1.7998 18C1.4998 18 1.2998 17.9 1.0998 17.7C0.699805 17.3 0.699805 16.7 1.0998 16.3L8.3998 9L1.0998 1.7C0.699805 1.3 0.699805 0.7 1.0998 0.3C1.4998 -0.1 2.0998 -0.1 2.4998 0.3L10.4998 8.3C10.8998 8.7 10.8998 9.3 10.4998 9.7L2.4998 17.7C2.2998 17.9 1.9998 18 1.7998 18Z"/>
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