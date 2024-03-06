import EditTanggapan from "../modal/tanggapan/edit/[id]";
import DeleteTanggapan from "../modal/tanggapan/delete/[id]";

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
         <div className="overflow-x-auto rounded-2xl">
                <table className="table table-sm w-full h-full">
                    <thead className="bg-accent text-white border-b-2 border-secondary text-center">
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
                                <td className="flex flex-col sm:flex-row gap-2 justify-center items-center h-full">
                                    <EditTanggapan/>
                                    <DeleteTanggapan/>
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