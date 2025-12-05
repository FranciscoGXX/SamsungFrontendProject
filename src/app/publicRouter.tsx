import { Route, Routes,Link } from 'react-router-dom'

//Pages
import Home from '../page/public/Home/Home'


const HomePage = () => (<Home />)

const publicRouter = () => {
    return (
        <div>

            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                </ul>
            </nav>

        </div>
    )
}

export default publicRouter