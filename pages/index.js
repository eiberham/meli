import React from 'react';
import Link from 'next/link';
import Layout from '../components/Layout';


const Index = () => (
    <Layout>
      <Link href="/items?search=remeras" as="/items?search=remeras" prefetch={true}>
          <a>About Us</a>
      </Link>
    </Layout>
);
  
export default Index;
  