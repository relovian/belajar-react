import { Navigate, useNavigate } from 'react-router'

const Home = () => {
    const navigate = useNavigate()

    const handleNavigateToProductList = () => {
        navigate('/ProductList')
    }

    return (
        <div>
            <h1>ini home page</h1>
            <button onClick={handleNavigateToProductList}>Product List</button>
        </div>
    )
}

export default Home 