"use client"
import { JSX, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  MdMenu,
  MdGroup,
  MdAssignment,
  MdComment,
  MdExitToApp,
  MdHome,
  MdSecurity,
} from "react-icons/md";
import Logo from "/public/assets/ulas_logo2.png";
import MasyarakatPage from '@/components/admin/masyarakat';
import PetugasPage from '@/components/admin/petugas';
import LaporanPage from '@/components/admin/laporan';
import TanggapanPage from '@/components/admin/tanggapan';
import AdminPage from "@/components/admin/page";

const data = [
  {
    label: "Beranda",
    icon: MdHome,
    component: AdminPage,
  },
  {
    label: "Akun Masyarakat",
    icon: MdGroup,
    component: MasyarakatPage,
  },
  {
    label: "Akun Petugas",
    icon: MdSecurity,
    component: PetugasPage,
  },
  {
    label: "Laporan",
    icon: MdAssignment,
    component: LaporanPage,
  },
  {
    label: "Tanggapan",
    icon: MdComment,
    component: TanggapanPage,
  },
];

const Sidebar = () => {
  const [ActiveComponent, setActiveComponent] = useState(() => AdminPage);
  const handleButtonClick = (Component: () => JSX.Element) => {
    setActiveComponent(() => Component);
  };
    const routes = data.map((item) => (
    <li key={item.label}>
      <button onClick={() => handleButtonClick(item.component)} className="flex text-center items-center mx-2 my-1 p-2 font-medium rounded-md active:!bg-secondary-content">
        <item.icon className="w-6 h-6" />
        <span>{item.label}</span>
      </button>
    </li>
  ));
  return (
    <>
      <div className="drawer bg-primary lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
        <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button p-2 h-12 m-2 w-12 bg-secondary border-0 hover:bg-secondary-content lg:hidden"
          >
            <MdMenu className="h-full w-full text-primary" />
          </label>
          <ActiveComponent/>
        </div>
        <div className="drawer-side rounded-r-lg">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-0 w-80 min-h-full bg-secondary text-primary">
            <div className="bg-accent p-10 border-b-2 border-primary">
              <Image src={Logo} alt="ulas logo" />
            </div>
            {routes}
            <li className="mt-auto border-t border-primary">
              <Link
                href="/"
                className="flex items-center mx-2 my-1 p-2 font-medium rounded-md active:!bg-secondary-content"
              >
                <MdExitToApp className="w-6 h-6" />
                <span>Logout</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
export default Sidebar;
