import Head from 'next/head';
import React, { Fragment, useEffect, useState } from 'react';
import Header from '../../ui-components/Header';
import PageContainer from '../../ui-components/PageContainer';
import { productRequest } from '../../services/productService';
import styles from '../../styles/product.module.scss';
import CheckoutNovo from '../../ui-components/CheckoutNovo';
import Checkout from '../../ui-components/Checkout';

export default function Home(props) {
  // controla o tipo do checkout
  const [checkoutType, setCheckoutType] = useState(false);

  // mostrar os detalhes do produto apenas quando o carregamento dos dados for finalizado
  const [showProduct, setShowProduct] = useState(false);

  // slug do produto solicitado (nextjs)
  const { product } = props;

  useEffect(() => {
    (async () => {
      if (product) {
        if (typeof window !== 'undefined') {
          window.setCheckoutType = setCheckoutType;
          // inicia o dataLayer com [] para que quando o GA inicialize, seja enviado a informação. Caso ja tenha sido carregada, manterá o seu estado
          window.dataLayer = window.dataLayer || [];
          // evento para iniciar o experimento
          dataLayer.push({
            // nome customizado para ativação do experimento
            event: 'nome-customizado',
            // timeout do evento
            eventTimeout: 2000,
            eventCallback: () => {
              // utilizando a callback para mostrar as informações do produto depois do carregamento - Não obrigatório e é usado para que o usuário não perceba as alterações na tela
              setShowProduct(true);
            },
          });
        }
      }
    })();
  }, []);

  return (
    <Fragment>
      <Head>
        <title>Hotmart Product Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <PageContainer className={styles.productPage}>
        {showProduct && product && (
          <Fragment>
            <div className={styles.productDetails}>
              <h1>{product.name}</h1>
              <div className={styles.productDetails__content}>
                <div className={styles.productDetails__content__image}>
                  <img src={product.avatarFinal} />
                </div>

                <div className={styles.productDetails__content__description}>
                  {product.copy}
                </div>

                <div className={styles.productDetails__content__checkout}>
                  {checkoutType ? (
                    <CheckoutNovo product={product} />
                  ) : (
                    <Checkout product={product} />
                  )}
                </div>
              </div>
            </div>
          </Fragment>
        )}
      </PageContainer>
    </Fragment>
  );
}

Home.getInitialProps = async ({ req, res, query }) => {
  const product = await productRequest(query.slug);

  return {
    product: product,
  };
};
