import Background from "/public/assets/contact_image.jpg";
import { MdLocationOn, MdLocalPhone, MdEmail } from "react-icons/md";

const info = [
  {
    icon: MdLocationOn,
    title: "Alamat",
    desc: "Jl. Adi Sucipto No.33, Surakarta, Jawa Tengah, Indonesia",
  },
  {
    icon: MdLocalPhone,
    title: "Telepon",
    desc: "(0271) 713901",
  },
  {
    icon: MdEmail,
    title: "Surel",
    desc: "info@smkn2-solo.net",
  },
];

const Contact = () => {
  return (
    <>
      <div
        className="hero min-h-screen snap-center"
        style={{ backgroundImage: `url(${Background.src})` }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content flex-col">
          <p className="font-bold text-primary text-4xl">Hubungi Kami</p>
          <div className="flex lg:flex-row flex-col">
            <aside className="min-h-full flex items-center justify-center">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3955.1836712916734!2d110.79870307500263!3d-7.554941992458829!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a14234667a3fd%3A0xc2dc8c1f0bdce20f!2sSMK%20Negeri%202%20Surakarta!5e0!3m2!1sid!2sid!4v1707272426859!5m2!1sid!2sid"
                width="400"
                height="400"
                className="border-0"
                loading="lazy"
              ></iframe>
            </aside>
            <div className="lg:mx-5 lg:border-r my-5 border-b border-accent"></div>
            <div className="min-h-full flex flex-col space-y-4 p-4 justify-center">
              {info.map((info) => (
                <div key={info.title} className="flex space-x-4">
                  <div className="p-2 h-12 w-12 items-center justify-center rounded-2xl bg-accent">
                    <info.icon className="w-full h-full"/>
                  </div>
                  <div>
                    <h2 className="text-xl font-bold">{info.title}</h2>
                    <p>{info.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Contact;
