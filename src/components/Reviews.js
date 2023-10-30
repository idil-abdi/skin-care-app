import { Container, Stack } from 'react-bootstrap'
import { Review } from './Review'

export const Reviews = () => {
    return (
        <div className='bg-success'>
            <Container>
                <h2 className="mt-5 text-white text-center">Testimonial</h2>
                <Stack gap={3} direction='horizontal'>
                    <Review/>
                    <Review/>
                    <Review/>
                </Stack>
            </Container>
        </div>
        
    )
}