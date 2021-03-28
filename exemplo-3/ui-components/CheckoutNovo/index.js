import ReactGA from 'react-ga';
import styles from './CheckoutNovo.module.scss';

const CheckoutNovo = (props) => {
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
    <div className={styles.checkoutNovo}>
      <div className={styles.checkoutNovo__oldPrice}>
        R$ {product.oldPrice.toLocaleString()}
      </div>
      <div className={styles.checkoutNovo__price}>
        R$ {product.price.toLocaleString()}
      </div>

      <button
        className={styles.checkoutNovo__buyButton}
        onClick={handleBuyButtonClick}
      >
        Comprar agora
      </button>

      {product.shoppingArguments && (
        <div className={styles.checkoutNovo__arguments}>
          {product.shoppingArguments.map((shoppingArgument) => {
            return (
              <div
                key={`argument-${shoppingArgument.key}`}
                className={styles.checkoutNovo__arguments__argument}
              >
                {shoppingArgument.value}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default CheckoutNovo;
