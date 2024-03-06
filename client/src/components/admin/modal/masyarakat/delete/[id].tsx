import { MdClose, MdDelete } from "react-icons/md";

const DeleteMasyarakat = () => {
  return (
    <>
      <button
        className="btn btn-sm bg-error text-white border-0 hover:bg-error"
        onClick={() =>
          (
            document.getElementById("deleteMasyarakat") as HTMLFormElement
          ).showModal()
        }
      >
        <MdDelete />
        <span className="hidden sm:inline">Delete</span>
      </button>
      <dialog id="deleteMasyarakat" className="modal">
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              <MdClose />
            </button>
          </form>
        <form className="flex flex-col gap-4">
          <p className="text-xl font-bold">Delete Akun Masyarakat</p>
          <p>Apakah anda yakin ingin menghapus akun ini?</p>
          <button className="btn btn-sm btn-error text-white">
            Delete Akun
          </button>
        </form>
        </div>
      </dialog>
    </>
  );
};
export default DeleteMasyarakat;
