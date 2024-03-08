import DeleteMasyarakat from "../modal/masyarakat/delete/[id]";
import EditMasyarakat from "../modal/masyarakat/edit/[id]";

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
            <div className="overflow-x-auto rounded-2xl">
                <table className="table table-sm w-full h-full">
                    <thead className="bg-accent text-white border-b-2 border-secondary text-center">
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
                                <td className="flex flex-col sm:flex-row gap-2 justify-center items-center h-full">
                                    <EditMasyarakat/>
                                    <DeleteMasyarakat/>
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