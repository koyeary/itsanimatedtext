import React, { Fragment } from 'react';

const Details = ( { product }) => {
    return (
        <Fragment>
            <h1>Details on {product.name}</h1>
        </Fragment>
    );
}

export default Details;