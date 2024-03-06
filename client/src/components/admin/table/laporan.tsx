import Image from "next/image";
import Lampiran from "/public/assets/unavailable.jpg";
import DeleteLaporan from "../modal/laporan/delete/[id]";
import EditLaporan from "../modal/laporan/edit/[id]";

const data = [
    {
        idLaporan: "01",
        tanggalLaporan: "06-06-2006",
        nik: "3372051606060003",
        titleLaporan: "Lorem",
        laporan: "lorem ipsum dolor sit amet long long long long",
        lampiran: Lampiran,
        status: "Proses",
    }
]

const LaporanTable = () => {
    return (
        <>
            <div className="overflow-x-auto rounded-2xl">
                <table className="table table-sm w-full h-full">
                    <thead className="bg-accent text-white border-b-2 border-secondary text-center">
                        <tr>
                            <th></th>
                            <th>ID Laporan</th>
                            <th>Tanggal Laporan</th>
                            <th>NIK</th>
                            <th>Judul Laporan</th>
                            <th>Isi Laporan</th>
                            <th>Lampiran</th>
                            <th>Status</th>
                            <th>Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item, index) => (
                            <tr key={index}>
                                <th>{index + 1}</th>
                                <td>{item.idLaporan}</td>
                                <td>{item.tanggalLaporan}</td>
                                <td>{item.nik}</td>
                                <td>{item.titleLaporan}</td>
                                <td className="sm:inline-block sm:truncate w-48 line-clamp-2">{item.laporan}</td>
                                <td>
                                    <div className="relative w-full">
                                        <Image
                                            src={item.lampiran}
                                            alt={item.idLaporan + "Lampiran"}
                                            layout="fill"
                                            objectFit="cover"
                                        />
                                    </div>
                                </td>
                                <td>{item.status}</td>
                                <td className="flex flex-col sm:flex-row gap-2 justify-center items-center h-full sm:w-48">
                                    <EditLaporan/>
                                    <DeleteLaporan/>
                                </td>
                            </tr>
                        ))}

                    </tbody>
                </table>
            </div>
        </>
    )
}
export default LaporanTable;