import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import DropletImg from '../img/droplets.png'
import ProductImg from '../img/niacinamide.png'
import { Container } from 'react-bootstrap';

export const Item = () => {

    const headerBackground = {
        backgroundColor: '#fff3cd',
        backgroundImage: `url(${DropletImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    }

    return (
        <Container>
        <Card style={{ width: '18rem' }}>
            <Card.Header style={headerBackground} className='p-0'>
                <Card.Img  variant="top" src={ProductImg} />
            </Card.Header>
            <Card.Body>
                <Card.Title className='text-center'>The Ordinary Niacinamide 10% + Zinc 1%</Card.Title>
                <div className='d-flex gap-2 justify-content-center '>
                <Button variant="success">Shop Now</Button>
                <p className='border rounded px-3 py-2 m-0  bg-success text-white'>£8.00</p>
                </div>
            </Card.Body>
        </Card>
        </Container>
    )
}