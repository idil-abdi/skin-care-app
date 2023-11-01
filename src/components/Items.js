import { Container, Stack } from "react-bootstrap"
import {Item} from '../components/Item'

export const Items = () => {
    return (
        <Container>
            <Stack direction="horizontal" gap={2}>
                <Item/>
                <Item/>
                <Item/>
                <Item/>
            </Stack>
        </Container>
    )
}