import { useState } from "react"

export const useLike = () => {
    const [like, setLike] = useState(0)

    const [imgLike, setImgLike] = useState("src/assets/heart.png")
    const [imgSave, setImgSave] = useState("src/assets/save.png")
    const [statusLike, setStatusLike] = useState("")
    const [statusSave, setStatusSave] = useState("")
    // const [statusDislike, setStatusDislike] = useState("")

    const handleLike = () => {

        if (statusLike == "") {
            setStatusLike("like")
            setImgLike("src/assets/heartActive.png")
            setLike( like + 1 )
        } else if( statusLike == "like") {
            setStatusLike("")
            setImgLike("src/assets/heart.png")
            setLike( like - 1 )
        }
    } 
    
    const handleSave = () => {

        if (statusSave == "") {
            setStatusSave("aktif")
            setImgSave("src/assets/saveActive.png")
        } else {
            setStatusSave("")
            setImgSave("src/assets/save.png")
        }
    }
    
    
    return {
        like,
        imgLike,
        imgSave,
        handleSave,
        handleLike,
    }
}