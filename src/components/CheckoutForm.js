import { Stack } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';

export const CheckoutForm = () => {
    return (
        <div className="border py-2">
            <Form>
            <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="johnsmith@gmail.com" />
                <Form.Text className="text-danger">
                Please enter a valid email.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="forShipping">
                <Form.Label>Shipping Address</Form.Label>
                <Form.Control type="text" placeholder="Full Name" />
                <Form.Text className="text-danger">
                Please enter a your full name.
                </Form.Text>
                <Form.Control type="text" placeholder="Country" />
                <Form.Text className="text-danger">
                Please enter a valid country name.
                </Form.Text>
                <Form.Control type="text" placeholder="Address" />
                <Form.Text className="text-danger">
                Please enter a valid address.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formCardDetail">
                <Form.Label>Card Detail</Form.Label>
                <Form.Control type="text" placeholder="Card Number" />
                <Form.Text className="text-danger">
                Please enter a your card number.
                </Form.Text>

                <Stack direction='horizontal' gap={2}>
                    <Stack>
                        <Form.Control type="text" placeholder="MM/YY" />
                        <Form.Text className="text-danger">
                        Please enter the expiry date.
                        </Form.Text>
                    </Stack>
                    <Stack>
                        <Form.Control type="text" placeholder="CVC" />
                        <Form.Text className="text-danger">
                        Please enter a valid CVC.
                        </Form.Text>
                    </Stack>
                </Stack>

            </Form.Group>

            </Form>
        </div>
    )
}