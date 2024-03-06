import AddLaporan from "./modal/laporan/add";
import LaporanTable from "./table/laporan";

const LaporanPage = () => {
  return (
    <>
      <div className="flex flex-col gap-2 min-h-screen bg-primary text-neutral p-12">
        <div className="card p-5 bg-white shadow flex flex-row justify-between items-center">
          <p className="text-xl font-medium">
            Data Laporan Unit Layanan Aduan Masyarakat
          </p>
          <AddLaporan/>
        </div>
        <div className="card p-5 bg-white shadow">
          <LaporanTable/>
        </div>
      </div>
    </>
  );
};
export default LaporanPage;
