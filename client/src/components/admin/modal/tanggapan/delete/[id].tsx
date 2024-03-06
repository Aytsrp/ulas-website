import { MdDelete } from "react-icons/md";
const DeleteTanggapan = () => {
    return(
        <>
        <button className="btn btn-sm bg-error text-white border-0 hover:bg-error">
          <MdDelete />
          <span className="hidden sm:inline">Delete</span>
        </button>
        </>
    )
}
export default DeleteTanggapan;