import { Container, Stack } from "react-bootstrap"
import { Link } from "react-router-dom";
import { Facebook, Instagram, Pinterest, Twitter } from "react-bootstrap-icons";

export const Footer = () => {
    return (
        <div className='bg-warning-subtle mt-5 text-black'>
            <Container>
                <div className="pt-2 d-flex flex-row justify-content-center gap-5">
                    <div>
                        <h2>Sitemap</h2>
                        <ul>
                            <Link className="nav-link" to='/'>Home</Link>
                            <Link className="nav-link" to='/Products'>Products</Link>
                            <Link className="nav-link" to='/Checkout'>Checkout</Link>
                            <Link className="nav-link" to='/Contact'>Contact Us</Link>
                        </ul>
                    </div>
                    <div className="my-0">
                        <h2>Skin Care Brand</h2>
                        <ul>
                            <li>07385642256</li>
                            <li>skincarebrand@gmail.com</li>
                        </ul>
                    </div>
                    <div>
                        <h2>Social Media</h2>
                        <Stack direction="horizontal" className="justify-content-evenly" gap={2}>
                            <Facebook/>
                            <Twitter/>
                            <Instagram/>
                            <Pinterest/>
                        </Stack>
                    </div>
                </div>
            </Container>
            <div className="bg-warning-subtle py-1" >
            <p className="text-center bg-white">Copyright 2023 All Rights Reserved Company Name.</p>
         </div>
        </div>
    )
}