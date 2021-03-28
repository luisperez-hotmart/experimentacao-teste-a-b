import Head from 'next/head';
import React, { Fragment, useEffect, useRef } from 'react';
import ReactGA from 'react-ga';
import Header from '../../ui-components/Header';
import PageContainer from '../../ui-components/PageContainer';
import styles from '../../styles/home.module.scss';

export default function Home() {
  const contentRef = useRef(null);

  const setNewContent = (isNewContent) => {
    let content = 'Conteudo do produto aqui';
    if (isNewContent) {
      content = 'Novo conteudo';
    }
    contentRef.current.innerHTML = content;
  };

  useEffect(() => {
    window.setNewContent = setNewContent;
    setTimeout(() => {
      window.dataLayer = window.dataLayer || [];
      dataLayer.push({
        event: 'optimize.activate',
        eventTimeout: 2000,
        eventCallback: () => {
          console.log(
            '🚀 ~ Mostrando variante: ',
            window.google_optimize.get('od1xzpx3QROC3836IAzoZA')
          );

          // Exemplo com eventCallback
          const experimentVariant = window.google_optimize.get(
            'od1xzpx3QROC3836IAzoZA'
          );

          switch (experimentVariant) {
            case '0':
              return window.setNewContent(false);
            case '1':
              return window.setNewContent(true);
          }
        },
      });
    }, 3000);
  });

  const handleBuyButtonClick = () => {
    ReactGA.event({
      category: 'Enhanced Ecommerce',
      action: 'Add to Cart',
    });
  };

  return (
    <Fragment>
      <Head>
        <title>Hotmart Product Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <PageContainer className={styles.homePage}>
        <button ref={contentRef} onClick={handleBuyButtonClick}></button>
      </PageContainer>
    </Fragment>
  );
}
