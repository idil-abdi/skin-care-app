import { Container, Stack } from 'react-bootstrap';
import { Slideshow } from '../components/Slideshow'

export const Header = () => {
    const slides = [
        {url: 'https://t4.ftcdn.net/jpg/03/73/04/95/360_F_373049549_9IQ1CopFeuw0iufrjrNeiBw1urQzkwij.jpg', title: 'image one' },
        {url: "https://aromantic.co.uk/cdn/shop/articles/shutterstock_486713719_1000x_1fae8d4b-11a1-4890-a791-8268522a6c69.jpg?v=1654056377", title: 'image two' },
        {url: "https://static-bebeautiful-in.unileverservices.com/The-difference-between-organic-and-natural-skincare_1.jpg", title: 'image three' }
    ];
    const containerStyle = {
        width: '500px',
        height: '280px',
        margin: '0 auto',
    };
    return (
        <Stack>
            <div className='bg-warning-subtle py-5'>
            <Container>
            <div className='d-flex flex-col justify-conent-between'>
                <div>
                    <h1>HEllOW</h1>
                    <h2>nkfnkanfnfnnafklmeiwnfnwfjnkesk</h2>
                </div>
                <div style={containerStyle}><Slideshow slides={slides}/></div>
            </div>
            </Container>
            </div>
        </Stack>
    )
}