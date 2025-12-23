import { useCounter } from './hooks/useCounter'

const Counter = () => {

    const  {count, handleDecrement, handleIncrement}  = useCounter();
    
    return (
        <div>
            <button onClick={handleIncrement}>Tambah</button>
            <p>{count}</p>
            <button onClick={handleDecrement}>Kurang</button>
        </div>
    )
}

export default Counter;