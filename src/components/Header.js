import { Container, Stack } from 'react-bootstrap';
import { Slideshow } from '../components/Slideshow'

export const Header = () => {
    const slides = [
        {url: 'https://pyxis.nymag.com/v1/imgs/f63/3b0/4d1ef0e3508a40a92b928f298fc3611ed8-02-Skincare-Routine.2x.h473.w710.jpg', title: 'image one' },
        {url: "https://aromantic.co.uk/cdn/shop/articles/shutterstock_486713719_1000x_1fae8d4b-11a1-4890-a791-8268522a6c69.jpg?v=1654056377", title: 'image two' },
        {url: "https://www.tecnovaglobal.com/wp-content/uploads/2021/11/personal-care-industry.jpg", title: 'image three' }
    ];
    const containerStyle = {
        width: '500px',
        height: '280px',
        position: 'relative'
    };
    return (
        <Stack>
            <div className='bg-warning-subtle py-5'>
            <Container>
            <div className='d-flex flex-col justify-content-between gap-3'>
                <div className='py-5'>
                    <h1>Every skin needs care and love </h1>
                    <ul>
                        <li>Find your skin type </li>
                        <li>Choose products that targets your needs </li>
                        <li>Learn to love your skin more.</li>
                    </ul>
                    <div className='d-flex justify-content-center gap-3'>
                        <button  className='border-0 bg-success text-white'>Shop Now</button>
                        <button className='border-0 bg-success text-white'>Learn More</button>
                    </div>
                </div>
                <div style={containerStyle}><Slideshow slides={slides}/></div>
            </div>
            </Container>
            </div>
        </Stack>
    )
}