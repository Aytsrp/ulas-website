import Image from "next/image";
import Link from "next/link";

import Background from "/public/assets/contact_image.jpg";
import Logo from "/public/assets/ulas_logo2.png";

const Contact = () => {
    return (
        <>
            <div
                className="hero min-h-screen snap-center"
                style={{
                    backgroundImage: `url(${Background.src})`,
                }}
            >
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content mx-w-2xl text-center">
                    <div className="max-w-2xl">
                        <div className="mx-auto max-w-2xl mb-5 text-center">
                            <p className="font-bold text-primary text-4xl">Hubungi Kami</p>
                        </div>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3955.1836712916734!2d110.79870307500263!3d-7.554941992458829!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a14234667a3fd%3A0xc2dc8c1f0bdce20f!2sSMK%20Negeri%202%20Surakarta!5e0!3m2!1sid!2sid!4v1707272426859!5m2!1sid!2sid" width="900" height="500" className="border-0" loading="lazy" ></iframe>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Contact;