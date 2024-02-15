import { MdDelete, MdEdit } from "react-icons/md";

const data = [
    {
        idPetugas: "001",
        nama: "Ranu Riang Prasetya",
        instansi: "Dinas Perhubungan",
        telepon: "0895424009364",
        level: "Petugas"
    },
    {
        idPetugas: "001",
        nama: "Ranu Riang Prasetya",
        instansi: "Dinas Perhubungan",
        telepon: "0895424009364",
        level: "Petugas"
    },
    {
        idPetugas: "001",
        nama: "Ranu Riang Prasetya",
        instansi: "Dinas Perhubungan",
        telepon: "0895424009364",
        level: "Petugas"
    }
]

const PetugasTable = () => {
    return (
        <>
         <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>ID Petugas</th>
                            <th>Nama</th>
                            <th>Instansi</th>
                            <th>Telepon</th>
                            <th>Level</th>
                            <th>Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item, index) => (
                            <tr key={index}>
                                <th>{index + 1}</th>
                                <td>{item.idPetugas}</td>
                                <td>{item.nama}</td>
                                <td>{item.instansi}</td>
                                <td>{item.telepon}</td>
                                <td>{item.level}</td>
                                <td className="flex flex-col sm:flex-row">
                                    <button className="btn bg-warning text-white border-0 hover:bg-warning xl:w-30 mr-0 mb-2 sm:mr-2 sm:mb-0">
                                        <MdEdit className="w-4 h-4" />
                                        <span className="hidden sm:inline">Edit</span>
                                    </button>
                                    <button className="btn bg-error text-white border-0 hover:bg-error xl:w-30">
                                        <MdDelete className="h-4 w-4" />
                                        <span className="hidden sm:inline">Delete</span>
                                    </button>
                                </td>
                            </tr>
                        ))}

                    </tbody>
                </table>
            </div>
        </>
    )
}
export default PetugasTable;