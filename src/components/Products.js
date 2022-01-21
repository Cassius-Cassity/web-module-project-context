import React, { useContext } from 'react';

import ProductsContext from '../contexts/ProductsContext';

// Components
import Product from './Product';

const Products = props => {
	const { products } = useContext(ProductsContext);
	return (
		<div className="products-container">
			{products.map(product => (
				<Product
					key={product.id}
					product={product}
					
				/>
			))}
		</div>
	);
};

export default Products;
