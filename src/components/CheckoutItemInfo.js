import { Button, Stack } from "react-bootstrap"
import DropletImg from '../img/droplets.png'
import ProductImg from '../img/niacinamide.png'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Dash } from 'react-bootstrap-icons';


export const CheckoutItemInfo = () => {
    const headerBackground = {
        backgroundColor: '#fff3cd',
        backgroundImage: `url(${DropletImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '185px',
    }

    return (
        <div className="col-sm-6 border">
            <h1>1 Item</h1>
            <hr/>
                    <Card>
                        <Row className="gx-0 ">
                            <Col >
                                <Card.Img style={headerBackground} src={ProductImg}/>
                            </Col>
                            <Col md={7} lg={8}>
                                <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This is a longer card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit
                                    longer.
                                </Card.Text>
                                </Card.Body>
                                <div className='d-flex justify-content-end p-2'>
                    <Button className='border-0 bg-success' ><Dash/></Button>
                </div>
                            </Col>
                        </Row>
                    </Card>
            <hr/>
            <Stack direction="horizontal" className="justify-content-between">
                <div>
                    <p>Product Name:</p>
                    <p>Shipping:</p>
                </div>
                <div>
                    <p>£8.00</p>
                    <p>£3.00</p>
                </div>
            </Stack>           
            <hr/>
            <div className="d-flex justify-content-between"> 
                <p>Total:</p>
                <p>£11.00</p>
            </div>
        </div>
    )
}