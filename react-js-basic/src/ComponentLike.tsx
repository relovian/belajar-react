import { useLike } from './hooks/useLike.tsx'

const ComponentLike = () => {
    const {like, imgLike, handleLike} = useLike()

    return (
        <div style={{display: "flex"}}>
            <button onClick={handleLike} style={{display: "flex", width: "55px", height: "20px"}}>
                <img src={imgLike} alt=""/>
                <p>{like}</p>
            </button>
        </div>
    )
}

export default ComponentLike