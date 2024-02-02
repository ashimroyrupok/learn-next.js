import Counter from '@/components/Counter/Counter';
import Link from 'next/link';
import React from 'react';

const HomePage = () => {
  return (
   
    <div>
      <div>
        <Link className='btn btn-primary' href={'/about'}> about </Link>
        <Link className='btn' href={'/contact'}>contact</Link>
        <Link className='btn' href={'/albam'}>Albam</Link>
      </div>
      <h2>Hello Next.js</h2>
      <Counter/>
    </div>
  );
};

export default HomePage;