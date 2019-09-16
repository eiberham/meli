import React from 'react';
import Link from 'next/link';
import Header from '../components/Header';


const Index = () => (
    <div>
      <p>Hello Next.js</p>
      <Header />
      <Link href="/items?search=remeras" as="/items?search=remeras" prefetch={true}>
          <a>About Us</a>
      </Link>
    </div>
);
  
export default Index;
  