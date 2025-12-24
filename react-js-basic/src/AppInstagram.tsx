import CardInstagram from './CardInstagram'
import { Routes, Route } from 'react-router'
import Home from './page/home'
import NotFound from './page/NotFound'

const AppInstagram = () => {
    return (
        <div>
           <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="*" element={<NotFound />}/>
                
           </Routes>
        </div>
    )
}

export default AppInstagram;