import './Navbar.css';
import { FaHome } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from 'react-router-dom';
// const logo = <img className="Logo" src="https://www.pngkey.com/png/detail/251-2510316_seamless-ecommerce-middle-east-e-commerce-logo-png.png" />;
const logo = <h5 className='logo'>e-commerce</h5>;
// const logo = <FaShoppingCart />;



function Navbar() {
    return (
        <>
            <nav className={'navbar navbar-expand-lg bg-body-tertiary'}>
                <div div className="container-fluid" >
                    <a className="navbar-brand" href="/#">{logo}</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded={+false} aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/"><FaHome /> Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Products</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contactUs">Contact</Link>
                            </li>
                        </ul>

                    </div>
                </div>

            </nav >
        </ >
    )
}

export default Navbar;
export { logo };
