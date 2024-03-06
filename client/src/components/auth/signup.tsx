"use client"
import Background from "/public/assets/auth_image.jpg";
import Image from "next/image";
import Link from "next/link";

const SignupForm = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen bg-primary text-neutral items-center justify-center">
        <div className="card flex-row grow bg-white shadow-xl m-5 h-60">
          <div className="w-1/2">
            <Image
              src={Background}
              alt="Background"
              className="h-full w-full rounded-l-2xl object-cover object-bottom"
            />
          </div>
          <div className="card-body w-1/2">
            <h2 className="card-title text-center uppercase">Daftar Akun</h2>
            <form>
              <label className="form-control">
                <div className="label">
                  <span className="text-lg font-bold">NIK</span>
                </div>
                <input
                  type="tel"
                  placeholder="NIK"
                  className="input input-sm input-bordered w-full focus:outline-none"
                  pattern="[0-9]{16}"
                  maxLength={16}
                  minLength={16}
                  required
                />
              </label>
              <label className="form-control">
                <div className="label">
                  <span className="text-lg font-bold">Nama Lengkap</span>
                </div>
                <input
                  type="text"
                  placeholder="Nama Lengkap"
                  className="input input-sm input-bordered w-full focus:outline-none"
                  maxLength={180}
                  required
                />
              </label>
              <label className="form-control">
                <div className="label">
                  <span className="text-lg font-bold">Username</span>
                </div>
                <input
                  type="text"
                  placeholder="Username"
                  className="input input-sm input-bordered w-full focus:outline-none"
                  maxLength={16}
                  minLength={8}
                  required
                />
              </label>
              <label className="form-control">
                <div className="label">
                  <span className="text-lg font-bold">Password</span>
                </div>
                <input
                  type="password"
                  placeholder="Password"
                  className="input input-sm input-bordered w-full focus:outline-none"
                  maxLength={16}
                  minLength={8}
                  required
                />
              </label>
              <label className="form-control">
                <div className="label">
                  <span className="text-lg font-bold">Konfirmasi Password</span>
                </div>
                <input
                  type="password"
                  placeholder="Konfirmasi Password"
                  className="input input-sm input-bordered w-full focus:outline-none"
                  maxLength={16}
                  minLength={8}
                  required
                />
              </label>
              <label className="form-control">
                <div className="label">
                  <span className="text-lg font-bold">Telepon</span>
                </div>
                <input
                  type="tel"
                  placeholder="Telepon"
                  className="input input-sm input-bordered w-full focus:outline-none"
                  pattern="[0-9]{13}"
                  maxLength={13}
                  required
                />
              </label>
              <div className="card-actions justify-end mt-4">
                <p>Sudah punya akun? <span><Link href="/auth/login" className="text-info">Masuk akun</Link></span></p>
                <button className="btn btn-sm btn-info text-white">
                  Daftar Akun
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default SignupForm;
