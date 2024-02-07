import Navbar from "@/components/navbar/page";
import Hero from "@/components/hero/page";
import Content from "@/components/content/page";
import Update from "@/components/update/page";
import Contact from "@/components/contact/page";
import Footer from "@/components/footer/page";

const Home = () => {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Content/>
      <Update/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default Home;
