"use client"
import Background from "/public/assets/auth_image.jpg";
import Image from "next/image";
import Link from "next/link";

const LoginForm = () => {
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
          <h2 className="card-title text-center uppercase">Masuk Akun</h2>
            <form>
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
              <div className="card-actions justify-end mt-4">
                <p>Belum punya akun? <span><Link href="/auth/signup" className="text-info">Daftar akun</Link></span></p>
                <button className="btn btn-sm btn-success text-white">
                  Masuk Akun
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default LoginForm;
