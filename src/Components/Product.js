import { Link } from 'react-router-dom';
import './Product.css';



function Product(props) {

    return (
        <div className='fady'>
            <div className="card" >
                <img src={props.product.image} className="card-img-top" alt={props.product.title} />
                <div className="card-body">
                    <h5 className="card-title">{props.product.title}</h5>
                    <div className='card-description'><p className="card-text">{props.product.description}</p></div><br></br>
                    <p className="card-price">Price: {props.product.price} $</p>
                    <Link className="btn btn-primary" to={`/product/${props.product.id}`}>Details..</Link>
                </div>
            </div>
        </div >
    )
}

export default Product;
