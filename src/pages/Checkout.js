import { Button, Container } from "react-bootstrap"
/* import { CheckoutForm } from "../components/CheckoutForm"*/
import { CheckoutItemInfo } from "../components/CheckoutItemInfo"
export const Checkout = () => {
    return (
        <Container>
            <h1 className="text-center">Shipping Information</h1>
            <div className="row justify-content-center gap-5 my-4">
                <CheckoutItemInfo/>
                {/* <CheckoutForm/> */}
            </div>
            <div className="d-flex justify-content-center">
                <Button className="bg-success border-0">Purchase Order</Button>
            </div>
        </Container>
    )
}