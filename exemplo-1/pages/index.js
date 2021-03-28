
import Head from 'next/head';
import { Fragment } from 'react';
import Header from '../ui-components/Header';
import PageContainer from '../ui-components/PageContainer';
import styles from '../styles/home.module.scss';

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>Hotmart Marketplace Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <PageContainer className={styles.homePage}>Conteudo aqui</PageContainer>
    </Fragment>
  );
}
