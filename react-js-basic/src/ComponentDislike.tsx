import { useLike } from './hooks/useLike.tsx'

const ComponentDislike = () => {
    const {dislike, imgDislike, handleDislike} = useLike()

    return (
        <div>
            <button onClick={handleDislike}>
                <img style={{width: "10px"}} src={imgDislike} alt=""/>
                <p>{dislike}</p>
            </button>
        </div>
    )
}

export default ComponentDislike