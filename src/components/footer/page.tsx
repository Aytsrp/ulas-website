import Image from "next/image";

import Logo from "/public/assets/ulas_logo2.png";

const Footer = () => {
    return (
        <>
            <footer className="footer p-8 bg-secondary text-primary snap-center flex justify-between items-center">
                <aside>
                    <Image width={150} src={Logo} alt="Logo Surakarta" />
                </aside>
                <div>
                    <p>© 2024 SMK Negeri 2 Surakarta</p>
                </div>
            </footer>
        </>
    )
}

export default Footer;