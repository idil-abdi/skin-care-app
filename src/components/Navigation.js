import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import '../index.css'


export const Navigation = () => {
    const checkoutCount = {
        position: 'relative',
        left: '-3px',
        top: '-6px',
        fontSize: '15px',
        color: 'red',
        display: 'inline',
    }
    return (        
        <div className="py-4 bg-warning-subtle">
        <Navbar bg="light" data-bs-theme="light" collapseOnSelect expand="md" className=''>
            <Container>
                <Navbar.Brand href="/">Skin Care Brand</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" className='flex-grow-0'>
                    <Nav className="me-auto">
                        <Link className="nav-link" to='/'>Home</Link>
                        <Link className="nav-link" to='/products'>Products</Link>
                        <Link className="nav-link" to='/checkout'>Checkout <div style={checkoutCount}>0</div> </Link>
                        <Link className="nav-link" to='/contact'>Contact Us</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </div>
    )
}