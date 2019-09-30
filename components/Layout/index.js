import React from 'react';
import Head from 'next/head';
import './styles.scss';

import Header from '../Header';
import Logo from '../Logo';
import Search from '../Search';

const Layout = props => (
  <React.Fragment>
    <Head>
      <title>Mercado Libre</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css" />
    </Head>
    <Header>
      <Logo /><Search />
    </Header>
    <div className="wrapper">
      <div className="content">
        {props.children}
      </div>
    </div>
  </React.Fragment>
);

export default Layout;
