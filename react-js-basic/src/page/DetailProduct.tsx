import { useSearchParams } from 'react-router'
import { params } from 'react-router'

const DetailProduk = (nama: string, harga: number, detail: string) => {

    // const handleParamsProduct = () => {
    //     params.get("")
    //     params.set("hargaProduk", harga)
    //     params.set("detailProduk", detail)

    //     setParams(params)
    // }

    return (
        <div>
            <h1>Detail Produk</h1>

            <p>Nama Produk : </p>
            <p>Harga produk : </p>
            <p>Detail Produk : </p>
        </div>
    )
} 

export default DetailProduk