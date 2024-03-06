"use client";
import { MdArrowBack } from "react-icons/md";
import Background from "/public/assets/form_image.jpg";
import { useState } from "react";
import Link from "next/link";

const FormLaporan = () => {
        const [value, setValue] = useState("");
  return (
    <>
      <div className="relative flex flex-col min-h-screen bg-primary text-neutral items-center justify-center">
        <Link href="/" className="btn btn-square fixed m-2 top-0 left-0 text-white bg-secondary sm:flex hover:bg-secondary hidden">
          <MdArrowBack className="h-6 w-6" />
        </Link>
        <div className="card card-compact grow bg-white shadow-xl mt-10 w-3/4 sm:w-1/2">
          <figure
            className="hero h-60 absolute z-0 text-white rounded-t-2xl rounded-b-none"
            style={{ backgroundImage: `url(${Background.src})` }}
          >
            <div className="hero-overlay bg-opacity-60 absolute z-0"></div>
            <div className="hero-content text-center">
              <div className="flex flex-col max-w-lg">
                <p className="text-4xl font-bold uppercase">Formulir Laporan</p>
                <p>Lapor Sekarang!</p>
              </div>
            </div>
          </figure>
          <div className="card-body mt-60">
            <form>
              <label className="form-control">
                <div className="label">
                  <span className="text-lg font-bold">Judul Laporan</span>
                </div>
                <input
                  type="text"
                  placeholder="Judul Laporan"
                  className="input input-sm input-bordered w-full focus:outline-none"
                  required
                />
              </label>
              <label className="form-control">
                <div className="label">
                  <span className="text-lg font-bold">Isi Laporan</span>
                </div>
                <textarea
                  id="isiLaporan"
                  placeholder="Isi Laporan"
                  className="textarea textarea-bordered textarea-sm w-full focus:outline-none resize-none"
                  maxLength={200}
                  value={value}
                  onChange={(event) => {
                    setValue(event.target.value);
                  }}
                  required
                ></textarea>
                <div className="label">
                  <span className="label-text-alt"></span>
                  <span className="label-text-alt">{value.length} / 200</span>
                </div>
              </label>
              <label className="form-control">
                <div className="label">
                  <span className="text-lg font-bold">Jenis Laporan</span>
                </div>
                <select
                  className="select select-sm select-bordered w-full focus:outline-none"
                  required
                >
                  <option disabled selected></option>
                  <option>Aduan</option>
                  <option>Aspirasi</option>
                </select>
              </label>
              <label className="form-control">
                <div className="label">
                  <span className="text-lg font-bold">Kategori Laporan</span>
                </div>
                <select
                  className="select select-sm select-bordered w-full focus:outline-none"
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
              </label>
              <label className="form-control">
                <div className="label">
                    <span className="text-lg font-bold">Lampiran Laporan</span>
                </div>
                <input type="file" className="file-input file-input-sm file-input-bordered w-full focus:outline-none"></input>
              </label>
              <div className="card-actions justify-end mt-4">
                <button className="btn btn-accent btn-sm text-white">Kirim Laporan</button>
              </div>
            </form>
          </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#65318e" fill-opacity="1" d="M0,128L48,144C96,160,192,192,288,192C384,192,480,160,576,138.7C672,117,768,107,864,128C960,149,1056,203,1152,208C1248,213,1344,171,1392,149.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
      </div>
    </>
  );
}
export default FormLaporan;