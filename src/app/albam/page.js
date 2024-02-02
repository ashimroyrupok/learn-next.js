import Image from 'next/image';
import React from 'react';

const AlbamPage = () => {
    return (
        <div>
            <h3>This is image component</h3>

            <Image src={"https://www.kozhuhds.com/_astro/next-13-logo.18e872e9.png/"} alt="next pic" width={500} height={500} />
            
        </div>
    );
};

export default AlbamPage;