import { Image } from 'react-bootstrap';
import { Stack } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import ProductImg from '../img/niacinamide.png'
import { ProductAccordion } from './ProductAccordion';


export const ProductModal = (props) => {
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
            Modal heading
            </Modal.Title>
        </Modal.Header>
        <Modal.Body className='bg-warning-subtle '>
            <Stack direction='horizontal' className='justify-content-evenly'>
                <Image width={400} src={ProductImg}/>
                <div>
                    <h3>Niacinamide Serum</h3>
                    <ProductAccordion/>
                </div>
            </Stack>
        </Modal.Body>
        </Modal>
    )
}