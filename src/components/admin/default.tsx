import { MdGroup, MdInbox, MdSync, MdDone, MdSecurity } from "react-icons/md";


const AdminDefault = () => {
    return (
        <>
            <div className="flex flex-col p-10 min-h-screen bg-primary text-neutral">
                <div className="stats stats-vertical mb-5 lg:stats-horizontal shadow">
                    <div className="stat">
                        <p className="text-lg font-medium">
                            Dashboard Admin Unit Layanan Aduan Surakarta
                        </p>
                    </div>
                </div>
                <div className="stats stats-vertical mb-5 lg:stats-horizontal lg:h-50 shadow">
                    <div className="stat">
                        <MdGroup className="stat-figure w-12 h-12" />
                        <div className="stat-title">Jumlah Akun Masyrakat</div>
                        <div className="stat-value">4,200</div>
                    </div>
                    <div className="stat">
                        <MdSecurity className="stat-figure w-12 h-12"/>
                        <div className="stat-title">Jumlah Akun Petugas</div>
                        <div className="stat-value">4,200</div>
                    </div>
                </div>
                <div className="stats stats-vertical lg:stats-horizontal lg:h-40 shadow">
                    <div className="stat">
                        <MdInbox className="stat-figure w-12 h-12" />
                        <div className="stat-title">Laporan Masuk</div>
                        <div className="stat-value">31K</div>
                    </div>

                    <div className="stat">
                        <MdSync className="stat-figure w-12 h-12" />
                        <div className="stat-title">Laporan Diproses</div>
                        <div className="stat-value">4,200</div>
                    </div>

                    <div className="stat">
                        <MdDone className="stat-figure w-12 h-12" />
                        <div className="stat-title">Laporan Terselesaikan</div>
                        <div className="stat-value">1,200</div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default AdminDefault;


