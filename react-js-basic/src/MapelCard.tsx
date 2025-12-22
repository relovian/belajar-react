type MapelProps = {
    mapel: string;
    guru: string;
    jamMapel: number;
}

function MapelCard(props: MapelProps) {
    const {mapel, guru, jamMapel} = props;

    return (
        <div className="card-mapel">
            <p>Nama Mapel : {mapel} </p>
            <p>Nama Guru : {guru} </p>
            <p>jam mapel : {jamMapel} Jam Pelajaran</p>
        </div>
    );
}

export default MapelCard;