import { MdAdd, MdClose } from "react-icons/md";
const AddPetugas = () => {
  return (
    <>
      <button
        className="btn bg-info text-white border-0 hover:bg-info"
        onClick={() =>
          (document.getElementById("addPetugas") as HTMLFormElement).showModal()
        }
      >
        <MdAdd />
        <span className="hidden sm:inline">Add</span>
      </button>
      <dialog id="addPetugas" className="modal">
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              <MdClose />
            </button>
          </form>
          <form className="flex flex-col gap-4">
            <p className="text-xl font-bold">Add Akun Petugas</p>
            <label className="form-control">
              <p className="font-bold">Nama Lengkap</p>
              <input
                type="text"
                placeholder="Nama Lengkap"
                className="input input-sm input-bordered w-full focus:outline-none"
                maxLength={180}
                required
              />
            </label>
            <label className="form-control">
              <p className="font-bold">Username</p>
              <input
                type="text"
                placeholder="Username"
                className="input input-sm input-bordered w-full focus:outline-none"
                maxLength={180}
                required
              />
            </label>
            <label className="form-control">
              <p className="font-bold">Password</p>
              <input
                type="password"
                placeholder="Password"
                className="input input-sm input-bordered w-full focus:outline-none"
                maxLength={16}
                minLength={8}
                required
              />
            </label>
            <label className="form-control">
              <p className="font-bold">Instansi</p>
              <select
                className="select select-sm select-bordered w-full focus:outline-none"
                required
              >
                <option disabled selected></option>
                <option>Ekonomi dan Pengembangan Usaha</option>
                <option>Pendidikan dan Sumber Daya Manusia</option>
                <option>Kesehatan dan Lingkungan Hidup</option>
                <option>Infrastruktur dan Lingkungan</option>
                <option>Pelayanan Publik</option>
                <option>Pemukiman dan Perumahan</option>
                <option>Keamanan dan Ketertiban</option>
                <option>Sosial dan Budaya</option>
              </select>
            </label>
            <label className="form-control">
              <p className="font-bold">Telepon</p>
              <input
                type="tel"
                placeholder="Telepon"
                className="input input-sm input-bordered w-full focus:outline-none"
                pattern="[0-9]{13}"
                maxLength={13}
                required
              />
            </label>
            <button className="btn btn-sm btn-info text-white">Add Akun</button>
          </form>
        </div>
      </dialog>
    </>
  );
};
export default AddPetugas;
