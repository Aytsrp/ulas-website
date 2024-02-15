import { MdDelete, MdEdit } from "react-icons/md";

const data = [
    {
        nik: "3372051606060003",
        nama: "Ranu Riang Prasetya",
        username: "Lapizlazullie",
        telepon: "0895424009364",
    },
    {
        nik: "3372051606060003",
        nama: "Ranu Riang Prasetya",
        username: "Lapizlazullie",
        telepon: "0895424009364",
    },
    {
        nik: "3372051606060003",
        nama: "Ranu Riang Prasetya",
        username: "Lapizlazullie",
        telepon: "0895424009364",
    },

]

const MasyarakatTable = () => {
    return (
        <>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>NIK</th>
                            <th>Nama</th>
                            <th>Username</th>
                            <th>Telepon</th>
                            <th>Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item, index) => (
                            <tr key={index}>
                                <th>{index + 1}</th>
                                <td>{item.nik}</td>
                                <td>{item.nama}</td>
                                <td>{item.username}</td>
                                <td>{item.telepon}</td>
                                <td className="flex flex-col sm:flex-row">
                                    <button className="btn bg-warning text-white border-0 hover:bg-warning  xl:w-30 mr-0 mb-2 sm:mr-2 sm:mb-0">
                                        <MdEdit className="w-4 h-4" />
                                        <span className="hidden sm:inline">Edit</span>
                                    </button>
                                    <button className="btn bg-error text-white border-0 hover:bg-error xl:w-30">
                                        <MdDelete className="h-4 w-4" />
                                        <span className="hidden sm:inline">Delete</span>
                                    </button>
                                </td>
                            </tr>
                        ))}

                    </tbody>
                </table>
            </div>
        </>
    )
}
export default MasyarakatTable;