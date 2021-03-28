import { useEffect } from 'react';
import ReactGA from 'react-ga';

import '../styles/globals.scss';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // Google Analityics
    ReactGA.initialize('UA-193130818-2', { debug: true });
    // Google Optimize
    ReactGA.ga('require', 'OPT-KCM5X73');
    // Pageview event
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);
  return <Component {...pageProps} />;
}

export default MyApp;
