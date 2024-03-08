import {MdEdit} from "react-icons/md";

const EditTanggapan = () => {
    return(
        <>
        <button className="btn btn-sm bg-warning text-white border-0 hover:bg-warning">
          <MdEdit/>
          <span className="hidden sm:inline">Edit</span>
        </button>
        </>
    )
}
export default EditTanggapan;