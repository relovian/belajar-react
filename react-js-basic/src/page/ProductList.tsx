import { Link } from 'react-router'
import { useSearchParams } from 'react-router'
import DetailProduk from './DetailProduct'

const ProductList = () => {
    const [params, setParams] = useSearchParams()

    return (

         <div>
            <h1>List Produk</h1>

            <ul>
                <li><button ></button></li>
                <li><Link to={"/DetailProduct"} style={{color: "white"}}>Sepatu Jordan</Link></li>
                <li><Link to={"/DetailProduct"} style={{color: "white"}}>Celana Cargo</Link></li>
            </ul>
        </div>
    )
} 

export default ProductList 