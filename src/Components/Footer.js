
import './Footer.css';
import { logo } from "./Navbar.js";
import { FaMobileAlt } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaPhoneVolume } from "react-icons/fa";
import { FaMailBulk } from "react-icons/fa";


function Footer() {
    return (
        <>
            <div className='footer'>

                <footer className="text-center text-lg-start bg-light text-muted">

                    <section className="d-flex justify-content-center justify-content-lg-between  ">


                    </section>



                    <section className="">
                        <div className="container text-center text-md-start mt-5">

                            <div className="row mt-3">

                                <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">

                                    <div id='logo'> {logo} </div>
                                </div>



                                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">

                                    <h6 className="text-uppercase fw-bold mb-4">
                                        Products
                                    </h6>
                                    <p>
                                        <a href="/#" className="text-reset">Electronics</a>
                                    </p>
                                    <p>
                                        <a href="/#" className="text-reset">Jewelery</a>
                                    </p>
                                    <p>
                                        <a href="/#" className="text-reset">Women's clothing</a>
                                    </p>
                                    <p>
                                        <a href="/#" className="text-reset">Men's clothing</a>
                                    </p>
                                </div>



                                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">

                                    <h6 className="text-uppercase fw-bold mb-4">
                                        Useful links
                                    </h6>
                                    <p>
                                        <a href="https://www.google.com/search?q=how+to+choose+clothes+that+suit+you&ei=8eT5Y9njIcuZkdUPheqLgAM&oq=how+to+choose+clothes+sut&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAxgAMgkIABAWEB4Q8QQyBggAEBYQHjIFCAAQhgMyBQgAEIYDMgUIABCGAzIFCAAQhgM6BQgAEJECOgsIABCABBCxAxCDAToICAAQsQMQgwE6DgguEIAEELEDEMcBENEDOgsILhCABBCxAxCDAToFCC4QgAQ6BAguEEM6DQguELEDEMcBENEDEEM6CgguEMcBENEDEEM6CAguELEDEIMBOgUIABCABDoICAAQgAQQsQM6DgguEIAEELEDEIMBENQCOgQIABBDOggIABAWEB4QDzoFCCEQoAE6DQghEBYQHhAPEPEEEB06CgghEBYQHhAPEB06CAghEBYQHhAdOgsIIRAWEB4Q8QQQHToHCCEQoAEQCkoECEEYAFAAWPDfAWDZmAJoAHABeAGAAcQCiAHSIpIBCDAuMjkuMC4xmAEAoAEBwAEB&sclient=gws-wiz-serp" target={'_blank'} className="text-reset">Find Your Personal Style</a>
                                    </p>
                                    <p>
                                        <a href="https://www.google.com/search?q=how+to+choose+best+jewelry&ei=8-X5Y6LiF8G0kdUPoKaA6AI&oq=how+to+choose+best+je&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAxgBMgUIABCABDIJCAAQFhAeEPEEMgYIABAWEB4yCQgAEBYQHhDxBDIJCAAQFhAeEPEEMgYIABAWEB4yCAgAEBYQHhAPMgkIABAWEB4Q8QQyCQgAEBYQHhDxBDIICAAQFhAeEA86CggAEEcQ1gQQsAM6BQgAEJECOgQIABBDSgQIQRgAUOcGWO8dYL4xaAFwAXgAgAHnAYgBwQiSAQUwLjUuMpgBAKABAcgBCMABAQ&sclient=gws-wiz-serp" target={'_blank'} className="text-reset">Jewelry for any outfit ?</a>
                                    </p>
                                    <p>
                                        <a href="https://www.google.com/search?q=What+is+the+most+popular+electronic+device%3F&ei=Iwj6Y_7AKt-YkdUPkZWe-AQ&ved=0ahUKEwi-3sr13rD9AhVfTKQEHZGKB08Q4dUDCA8&uact=5&oq=What+is+the+most+popular+electronic+device%3F&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAzIFCCEQoAEyBQghEKABMgUIIRCgAToKCAAQRxDWBBCwA0oECEEYAFCUD1iUD2DfEWgGcAF4AIABsQGIAbEBkgEDMC4xmAEAoAECoAEByAEHwAEB&sclient=gws-wiz-serp" target={'_blank'} className="text-reset">M Popular elec. devices</a>
                                    </p>
                                    <p>
                                        <a href="https://www.google.com/search?q=advantage+of+online+shopping&oq=advantage+of+online+shopping&aqs=chrome..69i57j0i10i512l9.7080j0j7&sourceid=chrome&ie=UTF-8" target={'_blank'} className="text-reset">Online Shopping Pros</a>
                                    </p>
                                </div>



                                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

                                    <h6 className="text-uppercase fw-bold mb-4">  Contact</h6>
                                    <p><i ></i> <FaMapMarkerAlt />  New York, NY 10012, US</p>
                                    <p>
                                        <i ></i>
                                        <FaMailBulk />  info@example.com
                                    </p>
                                    <p><i ></i><FaMobileAlt />  + 01 234 567 88</p>
                                    <p><i></i> <FaPhoneVolume /> + 01 234 567 89</p>
                                </div>

                            </div>

                        </div>
                    </section>



                    <div className="text-center p-4 " >
                        <span className=''>© 2023 Copyright: Fady Mikhail</span> <br></br>
                        © API Copyright:
                        <a className="text-reset fw-itallic" href="https://fakestoreapi.com/" target={'_blank'}> fakestoreapi.com/</a>
                    </div>


                </footer>

            </div>
        </>
    )
}

export default Footer
