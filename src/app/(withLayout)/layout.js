import React from 'react';

const HeaderFooter = ({children}) => {
    return (
        <div>
            <h2>This is header</h2>
            {children}
            <h3>This is footer</h3>
        </div>
    );
};

export default HeaderFooter;