import { Stack } from "react-bootstrap"
import {Banner} from '../components/Banner'
import {Sponcor} from '../components/Sponcor'
import {Items} from '../components/Items'

export const Products = () => {
    return (
        <Stack gap={5}>
            <Banner/>
            <Sponcor/>
            <Items/>
        </Stack>
    )
}