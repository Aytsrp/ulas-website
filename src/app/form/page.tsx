import Background from "/public/assets/form_image.jpg";

const Form = () => {
    return (
        <>
            <div className="relative flex flex-col min-h-screen bg-primary text-neutral">
                <div className="grow card bg-white w-1/2 m-5 shadow-xl">
                    <figure className="hero h-60 absolute z-0 text-white" style={{
                        backgroundImage: `url(${Background.src})`,
                    }}>
                        <div className="hero-overlay bg-opacity-60 absolute z-0"></div>
                        <div className="hero-content text-center">
                            <div className="max-w-lg">
                                <p className="text-4xl font-bold uppercase">Formulir Laporan</p>
                            </div>
                        </div>
                    </figure>
                    <div className="card-body p-5 mt-60">
                        <form>
                            <h2 className="card-title mb-5">Laporkan keluh-kesahmu</h2>
                            <div className="mb-5">
                                <p>Judul Laporan</p>
                                <input type="text" className="input input-md input-bordered w-full max-w-xs focus:border-0" />
                            </div>
                            <div className="mb-5">
                                <p>Isi Laporan</p>
                                <textarea className="textarea textarea-bordered textarea-md w-full max-w-xs focus:border-0 resize-none"></textarea>

                            </div>
                            <div className="mb-5">
                                <p>Jenis Laporan</p>
                                <select className="select select-md select-bordered w-full max-w-xs focus:border-0">
                                    <option disabled selected></option>
                                    <option>Aduan</option>
                                    <option>Aspirasi</option>
                                </select>
                            </div>
                            <div className="mb-5">
                                <p>Kategori Laporan</p>
                                <select className="select select-md select-bordered w-full max-w-xs focus:border-0">
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
                            </div>
                            <div className="mb-5">
                                <p>Lampiran Laporan</p>
                                <input type="file" className="file-input file-input-md file-input-bordered w-full max-w-xs focus:border-0" />
                            </div>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Kirim Laporan</button>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </>
    )
}
export default Form;