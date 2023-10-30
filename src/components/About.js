import { Container, Image, Stack } from "react-bootstrap"
import Skin from "../img/Skin.jpg"

export const About = () => {
    return (
        <Container>
            <Stack gap={5} direction="horizontal">
                <Image width={300} alt="profile" src={Skin}/>
                <div className="text-center">
                    <h2>Welcome!</h2>
                    <h3>We are small a company that provides help for those who want start there skin care journey</h3>
                    <p>Lorem ipsum dolor sit amet. A mollitia blanditiis in ipsum quis qui accusantium consequatur. Hic reprehenderit molestiae sed blanditiis maiores et nulla autem est quasi quidem. Est velit tempore nam galisum minus qui expedita itaque eos assumenda enim ab vero deserunt ut maiores similique.</p>
                    <p>Lorem ipsum dolor sit amet. A mollitia blanditiis in ipsum quis qui accusantium consequatur. Hic reprehenderit molestiae sed blanditiis maiores et nulla autem est quasi quidem. Est velit tempore nam galisum minus qui expedita itaque eos assumenda enim ab vero deserunt ut maiores similique</p>
                </div>
            </Stack>
        </Container>
    )
}