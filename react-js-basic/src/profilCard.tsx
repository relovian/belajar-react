type ProfilCardProps = {
    name: string;
    kelas?: string;
    umur: number;
}

const ProfilCard = (props: ProfilCardProps) => {
    const {name, kelas, umur} = props


    return (
        <div className="card-student">
            <p>Name: {name}</p>

            { kelas ?  <p>Kelas: {kelas}</p> : "Kelas : XI" }
            <p>Umur: {umur}</p>
        </div>
    )
}

export default ProfilCard;