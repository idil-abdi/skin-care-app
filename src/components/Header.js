import { Stack } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';
import One from '../img/One.jpg'
import Two from '../img/Two.jpg'
import Three from '../img/Three.jpg'

export const Header = () => {
    return (
        <Stack>
            <Carousel>
                <Carousel.Item>
                    <Image fluid src={One}/>
                    <Carousel.Caption className='text-white'>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                <Image fluid src={Two}/>                    
                    <Carousel.Caption className='text-white'>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                <Image fluid src={Three}/>                
                    <Carousel.Caption className='text-black'>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </Stack>
    )
}