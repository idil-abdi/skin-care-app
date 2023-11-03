import { Button, Image } from 'react-bootstrap';
import { Stack } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import ModalImg from '../img/modalImg.png'
import DropletImg from '../img/droplets.png'
import StarRating from '../img/starRating.png'
import { ProductAccordion } from './ProductAccordion';


export const ProductModal = (props) => {
    const headerBackground = {
        backgroundColor: '#fff3cd',
        backgroundImage: `url(${DropletImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    }
    const blurBg = {
        backdropFilter: 'blur(1px)'
    }
    return(
        <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        style={blurBg}

        >
        <Modal.Header closeButton className='bg-warning-subtle'>
            <Modal.Title id="contained-modal-title-vcenter">
            <h3>The Ordinary - Niacinamide Serum</h3>
            <img alt='rating' src={StarRating}/>
            </Modal.Title>
        </Modal.Header>
        <Modal.Body className='bg-warning-subtle '>
            <Stack className='justify-content-evenly'>
                <div style={headerBackground} className='m-auto'>
                    <Image  width={400} src={ModalImg}/>                
                </div>
                <div>
                    <ProductAccordion/>
                    <div className='d-flex gap-2 justify-content-end mt-3'>
                    <Button variant="success">Add to Checkout</Button>
                    <p className=' border rounded px-3 py-2 m-0  bg-success text-white'>£8.00</p>
                    </div>
                </div>
            </Stack>
        </Modal.Body>
        </Modal>
    )
}