import React from 'react';

const DynamicPage = ({params,searchParams}) => {
    return (
        <div>
            <h3>This is dynamic page {params.id} : {searchParams.name} </h3>
        </div>
    );
};

export default DynamicPage;