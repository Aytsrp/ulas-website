import MasyarakatTable from "./table/masyarakat";
import AddMasyarakat from "./modal/masyarakat/add";

const MasyarakatPage = () => {
  return (
    <>
      <div className="flex flex-col gap-2 min-h-screen bg-primary text-neutral p-12">
        <div className="card p-5 bg-white shadow flex flex-row justify-between items-center">
          <p className="text-xl font-medium">
            Data Akun Masyarakat Unit Layanan Aduan Masyarakat
          </p>
        <AddMasyarakat/>
        </div>
        <div className="card p-5 bg-white shadow">
          <MasyarakatTable />
        </div>
      </div>
    </>
  );
};
export default MasyarakatPage;
