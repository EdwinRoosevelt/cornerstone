import Header from '../component/Header';
import { useEffect } from 'react'
import '../styles/globals.css'


import { store } from '../store/store'
import { Provider } from 'react-redux'

function MyApp({ Component, pageProps }) {

  return (
    <Provider store={store}>
      <Header />
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp
