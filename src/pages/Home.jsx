import Aos from "aos";
import { useEffect } from "react";
import 'aos/dist/aos.css';
import TypedTXT from "../assets/TypedTXT";
import TypedTXT2 from "../assets/TypedTXT2";

const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <section className="text-center py-16">
      <div className="container mx-auto py-10" data-aos="fade-up" data-aos-delay="100">
        <p className="mt-4 text-5xl">
          <TypedTXT />
        </p>
        <p className="mt-2"> 
          <TypedTXT2 />
        </p>
      </div>
      <div className="container mx-auto py-10" data-aos="fade-up" data-aos-delay="100">
        <p className="mt-4 text-5xl">

        </p>
      </div>
    </section>
  );
};

export default Home;