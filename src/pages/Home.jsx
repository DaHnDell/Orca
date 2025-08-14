import Aos from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";
import TypedTXT from "../assets/TypedTXT";
import TypedTXT2 from "../assets/TypedTXT2";
import ClippedVideoBackground from "../assets/ClippedVideoBackground.jsx";
import DropdownSolution from "../components/dropdown/DropdownSolution.jsx";

const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <section className="relative w-full min-h-dvh overflow-hidden">
      <ClippedVideoBackground />

      <div
        className="
          absolute left-1/2 top-[30%] sm:top-1/2
          -translate-x-1/2 sm:-translate-y-1/2
          z-10 w-full px-4 sm:px-6
          pt-[env(safe-area-inset-top)] pb-[env(safe-area-inset-bottom)]
        "
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <div className="mx-auto text-center max-w-[min(92vw,960px)] text-white">
          <h1
            className="
              font-bold leading-tight drop-shadow-lg
              whitespace-normal sm:whitespace-nowrap
              text-[clamp(28px,7vw,64px)]
            "
          >
            <span className="block">
              <TypedTXT />
            </span>
          </h1>

          <p
            className="
              mt-3 leading-snug drop-shadow-md
              whitespace-normal sm:whitespace-nowrap
              text-[clamp(15px,3.8vw,20px)]
            "
          >
            <span className="block">
              <TypedTXT2 />
            </span>
          </p>
        </div>
      </div>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 w-full px-4 sm:px-6">
        <DropdownSolution />
      </div>
    </section>
  );
};

export default Home;
