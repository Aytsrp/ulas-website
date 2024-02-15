import { MdDelete, MdEdit } from "react-icons/md";

const data = [
    {
        idTanggapan: "01",
        idLaporan: "01",
        tanggal: "06-06-2006",
        tanggapan: "lorem ipsum dolor sit amet",
        idPetugas: "001"
    },
    {
        idTanggapan: "01",
        idLaporan: "01",
        tanggal: "06-06-2006",
        tanggapan: "lorem ipsum dolor sit amet",
        idPetugas: "001"
    },
    {
        idTanggapan: "01",
        idLaporan: "01",
        tanggal: "06-06-2006",
        tanggapan: "lorem ipsum dolor sit amet",
        idPetugas: "001"
    },
]

const TanggapanTable = () => {
    return (
        <>
         <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>ID Tanggapan</th>
                            <th>ID Laporan</th>
                            <th>Tanggal</th>
                            <th>Tanggapan</th>
                            <th>ID Petugas</th>
                            <th>Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item, index) => (
                            <tr key={index}>
                                <th>{index + 1}</th>
                                <td>{item.idTanggapan}</td>
                                <td>{item.idLaporan}</td>
                                <td>{item.tanggal}</td>
                                <td>{item.tanggapan}</td>
                                <td>{item.idPetugas}</td>
                                <td className="flex flex-col sm:flex-row">
                                    <button className="btn bg-warning text-white border-0 hover:bg-warning  xl:w-30 mr-0 mb-2 sm:mr-2 sm:mb-0">
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
export default TanggapanTable;