import { Stack } from 'react-bootstrap'
import { Review } from './Review'

export const Reviews = () => {
    return (
        <div className='bg-success'>
            <div className='mx-5'>
                <h2 className="mt-5 text-white text-center">Testimonial</h2>
                <Stack gap={3} direction='horizontal' className='flex-wrap justify-content-center'>
                    <Review/>
                    <Review/>
                    <Review/>
                </Stack>
            </div>
        </div>
        
    )
}