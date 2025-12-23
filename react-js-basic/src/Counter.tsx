import { useState } from 'react'

const Counter = () => {
    
    const [count, setCount] = useState(0)


    const handleDecrement = () => {
        setCount(count - 1);
    }
    
    const handleIncrement = () => {
        setCount(count + 1);
    }

    return (
        <div>
            <button onClick={handleIncrement}>Tambah</button>
            <p>{count}</p>
            <button onClick={handleDecrement}>Kurang</button>
        </div>
    )
}

export default Counter;