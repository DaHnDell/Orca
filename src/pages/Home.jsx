import Aos from "aos";
import { useEffect } from "react";
import 'aos/dist/aos.css';
import TypedTXT from "../assets/TypedTXT";
import TypedTXT2 from "../assets/TypedTXT2";
import ClippedVideoBackground from "../assets/ClippedVideoBackground.jsx";
import DropdownSolution from "../components/dropdown/DropdownSolution.jsx";

const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden">
      <ClippedVideoBackground />
      <div
        className="absolute top-[35%] left-1/2 -translate-x-1/2 z-10 text-white px-6 text-center max-w-[90vw]"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <p className="whitespace-nowrap overflow-hidden text-5xl font-bold drop-shadow-lg">
          <TypedTXT />
        </p>
        <p className="mt-4 whitespace-nowrap overflow-hidden text-xl drop-shadow-md">
          <TypedTXT2 />
        </p>
      </div>
      <DropdownSolution/>
    </section>
  );
};

export default Home;