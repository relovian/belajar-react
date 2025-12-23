import ProfilCard from './profilCard.tsx'
import MapelCard from './MapelCard.tsx'
import Counter from './Counter.tsx'

type Student = {
    name: string;
    kelas: string;
    umur: number;
}

type Mapel = {
  mapel: string;
  guru: string;
  jamMapel: number;
}

const students: Student[] = [
  {
    name: "farel",
    kelas: "XI RPL 2",
    umur: 18
  },
  {
    name: "Relovian",
    kelas: "XI RPL 2",
    umur: 17
  },
  {
    name: "irfan",
    kelas: "XI RPL 2",
    umur: 15
  },
  {
    name: "vito",
    kelas: "XI RPL 2",
    umur: 15
  },
  {
    name: "dimas",
    kelas: "XI RPL 2",
    umur: 15
  }
];

const mapels: Mapel[] = [
  {
    mapel : "matematika",
    guru : "bu nuning",
    jamMapel : 3
  },
  {
    mapel : "PAI",
    guru : "pak agung",
    jamMapel : 4
  },
  {
    mapel : "bhs jepang",
    guru : "bu rini",
    jamMapel : 5
  },
  {
    mapel : "bhs indonesia",
    guru : "bu emi",
    jamMapel : 2
  }
]

function App() {
  return (
    <>
      <h1>hallo world</h1>

      {
        students.map((student) => {
          return <ProfilCard name={student.name} kelas={student.kelas} umur={student.umur}/>
        })
      }

      {
        mapels.map((jadwalGuru) => {
          return <MapelCard mapel={jadwalGuru.mapel} guru={jadwalGuru.guru} jamMapel={jadwalGuru.jamMapel} />
        })
      }

    
      <Counter />
    </>
  )
}

export default App
