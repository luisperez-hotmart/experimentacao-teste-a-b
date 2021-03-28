import ReactGA from 'react-ga';
import styles from './Checkout.module.scss';

const Checkout = (props) => {
  const { product } = props;

  const handleBuyButtonClick = () => {
    ReactGA.event({
      category: 'Enhanced Ecommerce',
      action: 'Add to Cart',
      label: `${product.name || ''}`,
    });

    alert('Comprado');
  };

  return (
    <div className={styles.checkout}>
    <div className={styles.checkout__oldPrice}>
      R$ {product.oldPrice.toLocaleString()}
    </div>

    <div className={styles.checkout__price}>
        R$ {product.price.toLocaleString()}
      </div>

      <button
        className={styles.checkout__buyButton}
        onClick={handleBuyButtonClick}
      >
        Comprar
      </button>

      {product.shoppingArguments && (
        <ul className={styles.checkout__arguments}>
          {product.shoppingArguments.map((shoppingArgument) => {
            return (
              <li
                key={`argument-${shoppingArgument.key}`}
                className={styles.checkout__arguments__argument}
              >
                {shoppingArgument.value}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Checkout;
