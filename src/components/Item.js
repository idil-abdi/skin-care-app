import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import DropletImg from '../img/droplets.png'
import ProductImg from '../img/niacinamide.png'
import { Container } from 'react-bootstrap';
import { useState } from 'react';
import { ProductModal } from './ProductModal';
import { Plus } from 'react-bootstrap-icons';

export const Item = () => {
    const [modalShow, setModalShow] = useState(false);

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
                <div className='d-flex justify-content-end p-2'>
                    <Button className='border-0 bg-success'><Plus/></Button>
                </div>
            </Card.Header>
            <Card.Body>
                <Card.Title className='text-center'>The Ordinary Niacinamide 10% + Zinc 1%</Card.Title>
                <div className='d-flex gap-2 justify-content-center '>
                <Button variant="success" onClick={() => setModalShow(true)}>Shop Now</Button>
                <ProductModal show={modalShow} onHide={() => setModalShow(false)}/>
                <p className='border rounded px-3 py-2 m-0  bg-success text-white'>£8.00</p>
                </div>
            </Card.Body>
        </Card>
        </Container>
    )
}