import Image from "next/image";
import Link from "next/link";

import Background from "/public/assets/hero_image.jpg";
import Logo from "/public/assets/ulas_logo2.png";

const Hero = () => {
  return (
    <>
      <div
        className="hero min-h-screen snap-center"
        style={{
          backgroundImage: `url(${Background.src})`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center">
          <div className="max-w-lg">
            <div className="flex justify-center items-center pb-12">
                <Image src={Logo} width={300} className="mx-5" alt="Logo ULAS" />
            </div>
            <p className="mb-5">
              <b>ULAS</b> merupakan kepanjangan dari Unit Layanan Aduan Surakarta. Yang didedikasikan menyediakan layanan unggul dalam menerima, menanggapi, dan menyelesaikan aduan masyarakat di kota Surakarta.
            </p>
            <Link className="btn btn-outline btn-accent" href="">Lapor Sekarang!</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;