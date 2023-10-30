import { Container, Stack } from "react-bootstrap"
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";


export const Footer = () => {
    return (
        <div className='bg-dark mt-5'>
            <Container>
                <Stack className="justify-content-center"  gap={3} direction="horizontal">
                    
                        <Form>
                            <h2 className="text-white">Contact Us</h2>
                            <p className="text-white">Send us a message</p>
                            <Form.Group className="mb-3" >
                                <Form.Label className="text-white">Full name</Form.Label>
                                <Form.Control type="text" placeholder="Jown Smith" />
                            </Form.Group>
                            <Form.Group className="mb-3" >
                                <Form.Label className="text-white">Email address</Form.Label>
                                <Form.Control type="email" placeholder="name@example.com" />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label className="text-white">Message</Form.Label>
                                <Form.Control as="textarea" rows={3} />
                                <Button className="mt-3" variant="success">Success</Button>
                            </Form.Group>
                        </Form>
                    <div className=" text-white">
                        <h2>Sitemap</h2>
                        <p>All our Pages</p>
                        <ul>
                            <Link className="nav-link" to='/'>Home</Link>
                            <Link className="nav-link" to='/Products'>Products</Link>
                            <Link className="nav-link" to='/Checkout'>Checkout</Link>
                            <Link className="nav-link" to='/Contact'>Contact Us</Link>
                        </ul>
                    </div>
                    <div className=" text-white">
                        <h2>Skin Care Brand</h2>
                        <ul></ul>
                    </div>
                </Stack>
            </Container>
        </div>
    )
}