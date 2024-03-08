import { MdClose, MdEdit } from "react-icons/md";
const EditMasyarakat = () => {
    return(
        <>
        <button className="btn btn-sm bg-warning text-white border-0 hover:bg-warning" onClick={() =>
          (
            document.getElementById("editMasyarakat") as HTMLFormElement
          ).showModal()
        }>
          <MdEdit/>
          <span className="hidden sm:inline">Edit</span>
        </button>
        <dialog id="editMasyarakat" className="modal">
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              <MdClose/>
            </button>
          </form>
          <form className="flex flex-col gap-4">
            <p className="text-xl font-bold">Edit Akun Masyarakat</p>
              <label className="form-control">
                <p className="font-bold">NIK</p>
                <input
                  type="tel"
                  placeholder="NIK"
                  className="input input-sm input-bordered w-full focus:outline-none"
                  pattern="[0-9]{16}"
                  maxLength={16}
                  minLength={16}
                  required
                />
              </label>
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
                  maxLength={16}
                  minLength={8}
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
                <p className="font-bold">Telepon</p>
                <input
                  type="tel"
                  placeholder="Telepon"
                  className="input input-sm input-bordered w-full focus:outline-none"
                  pattern="[0-9]{13}"
                  required
                />
              </label>
              <button className="btn btn-sm btn-warning text-white">
                Edit Akun
              </button>
          </form>
        </div>
      </dialog>
        </>
    )
}
export default EditMasyarakat;