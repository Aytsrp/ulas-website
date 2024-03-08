import EditPetugas from "../modal/petugas/edit/[id]";
import DeletePetugas from "../modal/petugas/delete/[id]";

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
         <div className="overflow-x-auto rounded-2xl">
                <table className="table table-sm w-full h-full">
                    <thead className="bg-accent text-white border-b-2 border-secondary text-center">
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
                                <td className="flex flex-col sm:flex-row gap-2 justify-center items-center h-full">
                                    <EditPetugas/>
                                    <DeletePetugas/>
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