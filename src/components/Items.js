import { Container, Stack } from "react-bootstrap"
import {Item} from '../components/Item'

export const Items = () => {
    return (
        <Container>
            <Stack direction="horizontal" gap={3} className="flex-wrap justify-content-center">
                <Item/>
                <Item/>
                <Item/>
                <Item/>
                <Item/>
            </Stack>
        </Container>
    )
}