import Head from 'next/head';
import Link from 'next/link';
import { Fragment } from 'react';
import Header from '../ui-components/Header';
import PageContainer from '../ui-components/PageContainer';
import Grid from '../ui-components/Grid';
import { allProductsRequest } from '../services/productService';

import styles from '../styles/home.module.scss';

function Home(props) {
  const { products } = props;

  const gridProps = { xs: 6, sm: 6, md: 6, lg: 3, xl: 3 };
  return (
    <Fragment>
      <Head>
        <title>Hotmart Marketplace Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <PageContainer className={styles.homePage}>
        {products && Array.isArray(products) && products.length > 0 && (
          <Grid>
            {products.map((product) => {
              return (
                <Grid.Item {...gridProps} key={product.productId}>
                  <Link href={`/product/${product.slug}`}>
                    <a>
                      <div className={styles.productCard}>
                        <img src={product.avatarFinal} />
                        <div className={styles.productCard__copy}>{product.copy.substring(0, 150)}</div>
                      </div>
                    </a>
                  </Link>
                </Grid.Item>
              );
            })}
          </Grid>
        )}
      </PageContainer>
    </Fragment>
  );
}

Home.getInitialProps = async ({ req, res }) => {
  const products = await allProductsRequest();
  return { products };
};

export default Home;
