import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import DropletImg from '../img/droplets.png'
import { useState } from 'react';
import { ProductModal } from './ProductModal';
import { Plus } from 'react-bootstrap-icons';

export const Item = ({product}) => {
    const [modalShow, setModalShow] = useState(false);

    const headerBackground = {
        backgroundColor: '#fff3cd',
        backgroundImage: `url(${DropletImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    }

    return (
        <Card style={{ width: '18rem' }}>
            <Card.Header style={headerBackground} className='p-0'>
                <Card.Img  variant="top" src={product.image} />
                <div className='d-flex justify-content-end p-2'>
                    <Button className='border-0 bg-success' ><Plus/></Button>
                </div>
            </Card.Header>
            <Card.Body>
                <Card.Title className='text-center'>{product.productName}</Card.Title>
                <div className='d-flex gap-2 justify-content-center '>
                <Button variant="success" onClick={() => setModalShow(true)}>Shop Now</Button>
                <ProductModal product={product} show={modalShow} onHide={() => setModalShow(false)}/>
                <p className='border rounded px-3 py-2 m-0  bg-success text-white'>{product.displayPrice}</p>
                </div>
            </Card.Body>
        </Card>
    )
}