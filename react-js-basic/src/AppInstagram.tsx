import ComponentGambar from './ComponentGambar.tsx'
import ComponentLike from './ComponentLike.tsx';
import ComponentDislike from './ComponentDislike.tsx';

const AppInstagram = () => {
    return (
        <div style={{display: "inline-block", justifyContent: "center", alignItems: "center", 
        width: "500px", height: "550px", border: "1px solid red", marginLeft: "400px", marginTop: "50px", backgroundColor: "white"}}>
            <ComponentGambar />

            <ComponentLike />
            <ComponentDislike />
        </div>
    )
}

export default AppInstagram;