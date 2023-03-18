import { useEffect, useState } from 'react'
import Product from './Product';
import './ProductsList.css'


function ProductsList() {
    // const api_url = "https://fakestoreapi.com/products";
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);

    return (
        <div className="products-container">

            <h2 className="text-center p-3">Products</h2>
            <div className="container">
                <div className="products-list">
                    {products.map((product) => {
                        return (
                            <div className="col-3" key={product.id}>
                                <Product product={product} />

                            </div>
                        )
                    })}


                </div>



            </div>

        </div>
    )
}

export default ProductsList;
