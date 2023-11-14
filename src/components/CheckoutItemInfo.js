import { Button, Stack } from "react-bootstrap"
import DropletImg from '../img/droplets.png'
import ProductImg from '../img/niacinamide.png'
import Card from 'react-bootstrap/Card';
import { Dash } from 'react-bootstrap-icons';


export const CheckoutItemInfo = () => {
    const headerBackground = {
        backgroundColor: '#fff3cd',
        backgroundImage: `url(${DropletImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        maxWidth: '185px',
    }

    return (
        <div className="border">
            <h1>1 Item</h1>
            <hr/>
                    <Card>
                        <Stack >
                            <div className="row mx-2">
                            <div style={headerBackground} className="" >
                                <Card.Img src={ProductImg}/>
                            </div>
                            <Card.Body  className="col-2" >
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This is a longer card with supporting text below as a natural
                                lead-in to additional content. This content is a little bit
                                longer.
                            </Card.Text>
                        
                            <div className='d-flex justify-content-end p-2'>
                                <Button className='border-0 bg-success' ><Dash/></Button>
                            </div>
                            </Card.Body>
                            </div>
                        </Stack>
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