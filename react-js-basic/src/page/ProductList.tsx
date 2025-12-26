import { Link } from 'react-router'
import { useSearchParams } from 'react-router'
import DetailProduk from './DetailProduct'

const ProductList = () => {

    return (

         <div>
            <h1>List Produk</h1>

            <ul>
                <li><Link to={"/DetailProduct/Jaket Coklat/100000/terbuat dari kulit berkualitas"} style={{color: "white"}}>Jaket Coklat</Link></li>
                <li><Link to={"/DetailProduct/Sepatu Jordan/250000/warna putih dengan jahitan terbaik"} style={{color: "white"}}>Sepatu Jordan</Link></li>
                <li><Link to={"/DetailProduct/Celana Cargo/80000/Berbagai jenis warna dengan jenis kain terbaik"} style={{color: "white"}}>Celana Cargo</Link></li>
            </ul>
        </div>
    )
} 

export default ProductList 