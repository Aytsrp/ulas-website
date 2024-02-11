"use client"
import React, { useState, useEffect } from 'react';

import Image from "next/image";
import Link from "next/link";

import Logo from "/public/assets/ulas_logo1.png";

const Navbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    setVisible(prevScrollPos > currentScrollPos);
    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos, visible, handleScroll]);

  return (
    <>
        <div className={`navbar fixed top-0 w-full z-10 bg-secondary active transition-all duration-300 ease-in-out ${visible ? 'translate-y-0' : '-translate-y-full'}`}>
          <div className="navbar-start">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52 bg-base-100 text-black"
              >
                <li>
                  <Link href="" className="active:!bg-secondary-content">Aduan</Link>
                </li>
                <li>
                  <Link href="" className="active:!bg-secondary-content">Aspirasi</Link>
                </li>
                <li>
                  <details open>
                    <summary>Profil</summary>
                    <ul className="p-2">
                      <li>
                        <Link href="">Edit Profil</Link>
                      </li>
                      <li>
                        <Link href="">Daftar Aduan</Link>
                      </li>
                      <li>
                        <Link href="">Daftar Aspirasi</Link>
                      </li>
                    </ul>
                  </details>
                </li>
              </ul>
            </div>
            <Image src={Logo} width={100} className="mx-5" alt="Logo ULAS" />
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 text-white">
              <li>
                <Link href="">Aduan</Link>
              </li>
              <li>
                <Link href="">Aspirasi</Link>
              </li>
              <li>
                <details className="dropdown">
                  <summary>Profil</summary>
                  <ul className="p-2 menu dropdown-content text-black bg-base-100 w-52">
                    <li>
                      <Link href="">Edit Profil</Link>
                    </li>
                    <li>
                      <Link href="">Daftar Aduan</Link>
                    </li>
                    <li>
                      <Link href="">Daftar Aspirasi</Link>
                    </li>
                  </ul>
                </details>
              </li>
            </ul>
          </div>
          <div className="navbar-end">
            <Link className="btn bg-accent border-0 hover:border-0 hover:bg-accent-content hover:border-primary" href="">
              Tulis Laporan
            </Link>
          </div>
        </div>
    </>
  )
}

export default Navbar;