import { Link } from 'react-router'
import { useParams } from 'react-router'
import { useSearchParams } from 'react-router'

const Terms = () => {
    const {terms} = useParams()
    const [params, setParams] = useSearchParams()

    const handleParamsChange = (paramsValue: string) => {
        params.set("sort", paramsValue)
        setParams(params)
    }

    return (
        <div>
            <h1>ini terms page</h1>
            <h2>sort : {params.get("sort")}</h2>
            <p>{terms}</p>
            <Link to={"/"}>
                klik me
            </Link>

            <button onClick={ () => handleParamsChange("ASC")}>Set Sort ASC</button>
            <button onClick={ () => handleParamsChange("Low Price")}>Set Sort Low Price</button>
            <button onClick={ () => handleParamsChange("Most Populer") }>Set Sort Most Populer</button>
        </div>
    )
}

export default Terms