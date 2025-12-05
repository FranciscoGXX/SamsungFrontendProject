import { Route, Routes,Link } from 'react-router-dom'

//Pages
import PublicRouter from './publicRouter'



const AppRouter = () => {
  return (
    <>
    
    <Routes >
      <Route path="/" element={<PublicRouter />} />
      {/* <Route path='/about' element={<>About Page</>} /> */}

    
      
    </Routes>

    </>
  )
}

export default AppRouter
