import {MdAdd, MdClose} from "react-icons/md";
const AddTanggapan = () => {
  return (
    <>
      <button
        className="btn bg-info text-white border-0 hover:bg-info"
        onClick={() =>
          (document.getElementById("addTanggapan") as HTMLFormElement).showModal()
        }
      >
        <MdAdd/>
        <span className="hidden sm:inline">Add</span>
      </button>
      <dialog id="addTanggapan" className="modal">
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              <MdClose/>
            </button>
          </form>
          <form className="flex flex-col gap-2">
            <p className="text-xl font-bold">Tambah Tanggapan</p>
          </form>
        </div>
      </dialog>
    </>
  );
};
export default AddTanggapan;
