import { useLike } from './hooks/useLike'

const componentCard = () => {
    const {like, imgLike, imgSave, handleLike, handleSave} = useLike()

    return (
        <div style={{marginTop: "100px"}}>
            <img style={{width: "100%", height: "250px"}} src="src/assets/gambar.jpg" alt="" />

            <div style={{display: "flex"}}>
                <button onClick={handleLike} style={{display: "flex", width: "55px", height: "25px"}}>
                    <img style={{width: "20px"}} src={imgLike} alt=""/>
                    <p>{like}</p>
                </button>

                <button style={{display: "flex", width: "55px", height: "20px"}}>
                    <img src="src/assets/comment.png" alt=""/>
                </button>

                <button onClick={handleSave} style={{display: "flex", width: "55px", height: "20px"}}>
                    <img src={imgSave} alt=""/>
                </button>
            </div>
            
        </div>
    )
}

export default componentCard