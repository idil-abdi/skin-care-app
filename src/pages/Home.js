import {Header} from '../components/Header'
import {About} from '../components/About'
import {Reviews} from '../components/Reviews'
import { Stack } from 'react-bootstrap'

export const Home = () => {
    return (
        <Stack gap={5}>
            <Header/>
            <About/>
            <Reviews/>
        </Stack>
    )
}