import CardInstagram from './CardInstagram'
import { Routes, Route } from 'react-router'
import Home from './page/home'
import NotFound from './page/NotFound'
import Terms from './page/terms'
import ProductList from './page/ProductList'
import DetailProduct from './page/DetailProduct'
import FormInput from './page/FormInput'

const AppInstagram = () => {
    return (
        <div>
           <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/ProductList" element={<ProductList />} />
                <Route path="/DetailProduct/:namaProduk/:hargaProduk/:detailProduk" element={<DetailProduct />} />
                <Route path="/terms/:terms1" element={<Terms />} />
                <Route path="/FormInput" element={<FormInput />} />
                <Route path="*" element={<NotFound />}/>
                
           </Routes>
        </div>
    )
}

export default AppInstagram;