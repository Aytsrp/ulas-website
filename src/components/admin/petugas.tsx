import PetugasTable from "./table/petugas";
import AddPetugas from "./modal/petugas/add";

const PetugasPage = () => {
  return (
    <>
      <div className="flex flex-col gap-2 min-h-screen bg-primary text-neutral p-12">
        <div className="card p-5 bg-white shadow flex flex-row justify-between items-center">
          <p className="text-xl font-medium">
            Data Akun Petugas Unit Layanan Aduan Masyarakat
          </p>
          <AddPetugas/>
        </div>
        <div className="card p-5 bg-white shadow">
          <PetugasTable/>
        </div>
      </div>
    </>
  );
};
export default PetugasPage;
