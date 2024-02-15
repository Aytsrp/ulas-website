import { MdAdd } from "react-icons/md";
import LaporanTable from "./table/laporan";

const adminLaporan = () => {
    return (
        <>
            <div className="flex flex-col min-h-screen bg-primary text-neutral p-12">
                <div className="card p-5 mb-5 bg-white shadow">

                    <p className="text-lg font-medium">Data Laporan Unit Layanan Aduan Masyarakat</p>
                </div>
                <button className="btn mb-5 bg-info text-white border-0 hover:bg-info sm:w-24">
                    <MdAdd className="w-4 h-4" />
                    <span className="hidden sm:inline">Edit</span>
                </button>
                <div className="card p-5 mb-5 bg-white shadow">
                    <LaporanTable />
                </div>
            </div>
        </>
    )
}
export default adminLaporan;