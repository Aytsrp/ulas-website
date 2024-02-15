import Image from "next/image";
import { MdDelete, MdEdit } from "react-icons/md";
import Lampiran from "/public/assets/unavailable.jpg";

const data = [
    {
        idLaporan: "01",
        tanggalLaporan: "06-06-2006",
        nik: "3372051606060003",
        laporan: "lorem ipsum dolor sit amet",
        lampiran: Lampiran,
        status: "Proses",
    },
    {
        idLaporan: "01",
        tanggalLaporan: "06-06-2006",
        nik: "3372051606060003",
        laporan: "lorem ipsum dolor sit amet",
        lampiran: Lampiran,
        status: "Proses",
    },
    {
        idLaporan: "01",
        tanggalLaporan: "06-06-2006",
        nik: "3372051606060003",
        laporan: "lorem ipsum dolor sit amet",
        lampiran: Lampiran,
        status: "Proses",
    },
    {
        idLaporan: "01",
        tanggalLaporan: "06-06-2006",
        nik: "3372051606060003",
        laporan: "lorem ipsum dolor sit amet",
        lampiran: Lampiran,
        status: "Proses",
    },
    {
        idLaporan: "01",
        tanggalLaporan: "06-06-2006",
        nik: "3372051606060003",
        laporan: "lorem ipsum dolor sit amet",
        lampiran: Lampiran,
        status: "Proses",
    },
    {
        idLaporan: "01",
        tanggalLaporan: "06-06-2006",
        nik: "3372051606060003",
        laporan: "lorem ipsum dolor sit amet",
        lampiran: Lampiran,
        status: "Proses",
    },
    {
        idLaporan: "01",
        tanggalLaporan: "06-06-2006",
        nik: "3372051606060003",
        laporan: "lorem ipsum dolor sit amet",
        lampiran: Lampiran,
        status: "Proses",
    },
    {
        idLaporan: "01",
        tanggalLaporan: "06-06-2006",
        nik: "3372051606060003",
        laporan: "lorem ipsum dolor sit amet",
        lampiran: Lampiran,
        status: "Proses",
    },
    {
        idLaporan: "01",
        tanggalLaporan: "06-06-2006",
        nik: "3372051606060003",
        laporan: "lorem ipsum dolor sit amet",
        lampiran: Lampiran,
        status: "Proses",
    },
]

const LaporanTable = () => {
    return (
        <>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>ID Laporan</th>
                            <th>Tanggal Laporan</th>
                            <th>NIK</th>
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
                                <td>{item.laporan}</td>
                                <td>
                                    <div style={{ position: 'relative', width: '100%', paddingBottom: '100%' }}>
                                        <Image
                                            src={item.lampiran}
                                            alt={item.idLaporan + "Lampiran"}
                                            layout="fill"
                                            objectFit="cover"
                                        />
                                    </div>
                                </td>
                                <td>{item.status}</td>
                                <td className="flex flex-col sm:flex-row">
                                    <button className="btn bg-warning text-white border-0 hover:bg-warning xl:w-30 mr-0 mb-2 sm:mr-2 sm:mb-0">
                                        <MdEdit className="w-4 h-4" />
                                        <span className="hidden sm:inline">Edit</span>
                                    </button>
                                    <button className="btn bg-error text-white border-0 hover:bg-error  xl:w-30">
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
export default LaporanTable;