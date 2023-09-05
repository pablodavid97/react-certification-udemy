import React from 'react';
import { useParams } from 'react-router-dom';

function ProductDetail() {
    const { productId } = useParams();

    return <>
        <h1>Product Details</h1>
        <p>Details page for product {productId}</p>
    </>;
}

export default ProductDetail;