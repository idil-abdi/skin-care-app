import { Container, Image, Stack } from "react-bootstrap"

export const Sponcor = () => {
    return (
        <Container>
            <Stack className="justify-content-evenly flex-wrap" direction="horizontal">
                <Image width={100} src="https://seeklogo.com/images/T/the-ordinary-logo-6367E3AB69-seeklogo.com.png"/>
                <Image width={150} src="https://assets.boots.com/content/dam/boots/brands/brand---i/the-inkey-list/the-inkey-list-bt/the-inkey-list-bt-2021-08/2021-08_the-inkey-list_brand-treatment_logo.dam.ts%3D1629467125734.png"/>
                <Image width={100} src="https://logos-world.net/wp-content/uploads/2023/01/La-Roche-Posay-Logo.png"/>
                <Image width={100} src="https://1000logos.net/wp-content/uploads/2020/09/E.l.f.-Logo.png"/>
            </Stack>
        </Container>
        
    )
}