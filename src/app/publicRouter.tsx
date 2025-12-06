import { Route, Routes,Link } from 'react-router-dom'

//Pages
import {Home} from '../page/public/Home/Home'


const HomePage = () => (<Home />)

const publicRouter = () => {
    return (
        <HomePage />
    )
}

export default publicRouter