// import { useParams, useSearchParams } from 'react-router'
import { useParams } from 'react-router'

const DetailProduk = () => {

    const params = useParams()

    // const handleParamsProduct = () => {
    //     params.get("")
    //     params.set("hargaProduk", harga)
    //     params.set("detailProduk", detail)

    //     setParams(params)
    // }

    return (
        <div>
            <h1>Detail Produk {params.namaProduk}</h1>

            <p>Nama Produk :  {params.namaProduk} </p>
            <p>Harga produk : Rp. {params.hargaProduk} </p>
            <p>Detail Produk :  {params.detailProduk}</p>
        </div>
    )
} 

export default DetailProduk