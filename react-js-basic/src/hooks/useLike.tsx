import { useState } from "react"

export const useLike = () => {
    const [like, setLike] = useState(0)
    const [dislike, setDislike] = useState(0)

    const [imgLike, setImgLike] = useState("src/assets/like.png")
    const [imgDislike, setImgDislike] = useState("src/assets/dislike.png")
    const [statusLike, setStatusLike] = useState("nonaktif")
    const [statusDislike, setStatusDislike] = useState("nonaktif")

    const handleLike = () => {

        if (statusLike == "nonaktif") {
            setStatusLike("like")
            setImgLike("src/assets/likeActive.png")
            setLike( like + 1 )
        } else {
            setStatusLike("nonaktif")
            setImgLike("src/assets/like.png")
            setLike( like - 1 )
        }
    }
    
    const handleDislike = () => {

        if (statusDislike == "nonaktif") {
            setStatusDislike("dislike")
            setImgDislike("src/assets/dislikeActive.png")
            setDislike( dislike + 1 )
        } else {
            setStatusDislike("nonaktif")
            setImgDislike("src/assets/dislike.png")
            setDislike( dislike - 1 )
        }
    }
    
    
    return {
        like,
        dislike,
        imgLike,
        imgDislike,
        status,
        handleLike,
        handleDislike,
    }
}