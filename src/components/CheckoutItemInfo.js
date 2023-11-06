import { Image, Stack } from "react-bootstrap"
import DropletImg from '../img/droplets.png'
import ProductImg from '../img/niacinamide.png'

export const CheckoutItemInfo = () => {
    const headerBackground = {
        backgroundColor: '#fff3cd',
        backgroundImage: `url(${DropletImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '175px',
    }

    return (
        <div className="col-sm-6 border">
            <h1>1 Item</h1>
            <hr/>
            <div className="row m-2">
                <div className="col-md-4 p-0 mr-4">
                    <Image style={headerBackground} src={ProductImg}/>
                </div>
                <div className="col-md-8 p-0">
                    <p className="m-0">Lorem ipsum dolor sit amet. A mollitia blanditiis in ipsum quis qui accusantium consequatur. Hic reprehenderit molestiae sed blanditiis maiores et nulla autem est quasi quidem.</p>
                </div>
            </div>             
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