import Link from "next/link";
import Image from "next/image";
import {
  MdMenu,
  MdGroup,
  MdAssignment,
  MdComment,
  MdExitToApp,
} from "react-icons/md";
import Logo from "/public/assets/ulas_logo2.png";

const data = [
  {
    link: "",
    label: "Akun",
    icon: MdGroup,
  },
  {
    link: "",
    label: "Laporan",
    icon: MdAssignment,
  },
  {
    link: "",
    label: "Tanggapan",
    icon: MdComment,
  },
];

const Sidebar = () => {
  const links = data.map((item) => (
    <li key={item.label}>
      <Link
        href={item.link}
        className="flex text-center items-center mx-2 my-1 p-2 font-medium rounded-md active:!bg-secondary-content"
      >
        <item.icon className="w-6 h-6" />
        <span>{item.label}</span>
      </Link>
    </li>
  ));
  return (
    <>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          {/* Page content here */}
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button p-2 h-12 w-12 bg-secondary border-0 hover:bg-secondary-content lg:hidden"
          >
            <MdMenu className="h-full w-full text-primary" />
          </label>
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
            {links}
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
