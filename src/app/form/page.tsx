import { MdArrowBack } from "react-icons/md";
import Background from "/public/assets/form_image.jpg";

const Form = () => {
  return (
    <>
      <div className="relative flex flex-col min-h-screen bg-primary text-neutral items-center justify-center">
      <button className="btn btn-square fixed m-2 top-0 left-0 text-white bg-secondary sm:flex hidden">
        <MdArrowBack className="h-6 w-6"/>
        </button>
        <div className="grow card bg-white w-3/4 m-5 shadow-xl sm:w-1/2">
          <figure
            className="hero h-60 absolute z-0  text-white"
            style={{
              backgroundImage: `url(${Background.src})`,
            }}
          >
            <div className="hero-overlay bg-opacity-60 absolute z-0"></div>
            <div className="hero-content text-center">
              <div className="max-w-lg">
                <p className="text-4xl font-bold uppercase">Formulir Laporan</p>
              </div>
            </div>
          </figure>
          <div className="card-body p-5 mt-60">
            <form>
              <h2 className="card-title mb-2">Laporkan sekarang!</h2>
              <div className="mb-2">
                <div className="label">
                  <span>Judul Laporan</span>
                </div>
                <input
                  type="text"
                  className="input input-md input-bordered w-full max-w-xs focus:border-0"
                  required
                />
              </div>
              <div className="mb-2">
                <div className="label">
                  <span>Isi Laporan</span>
                </div>
                <textarea
                  className="textarea textarea-bordered textarea-md w-full max-w-xs focus:border-0 resize-none"
                  required
                ></textarea>
              </div>
              <div className="mb-2">
                <div className="label">
                  <span>Jenis Laporan</span>
                </div>
                <select
                  className="select select-md select-bordered w-full max-w-xs focus:border-0"
                  required
                >
                  <option disabled selected></option>
                  <option>Aduan</option>
                  <option>Aspirasi</option>
                </select>
              </div>
              <div className="mb-2">
                <div className="label">
                  <span>Kategori Laporan</span>
                </div>
                <select
                  className="select select-md select-bordered w-full max-w-xs focus:border-0"
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
              </div>
              <div className="mb-2">
                <div className="label">
                  <span>Lampiran Laporan</span>
                </div>
                <input
                  type="file"
                  className="file-input file-input-md file-input-bordered w-full max-w-xs  focus:border-0"
                />
              </div>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Kirim Laporan</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Form;
