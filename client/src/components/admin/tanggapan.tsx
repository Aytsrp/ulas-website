import AddTanggapan from "./modal/tanggapan/add";
import TanggapanTable from "./table/tanggapan";

const TanggapanPage = () => {
    return (
        <>
            <div className="flex flex-col gap-2 min-h-screen bg-primary text-neutral p-12">
            <div className="card p-5 bg-white shadow flex flex-row justify-between items-center">
                    <p className="text-xl font-medium">Data Tanggapan Unit Layanan Aduan Masyarakat</p>
                    <AddTanggapan/>
                </div>
                <div className="card p-5 mb-5 bg-white shadow">
                    <TanggapanTable/>
                </div>
            </div>
        </>
    )
}
export default TanggapanPage;