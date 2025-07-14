import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import CountdownTimer from "../Components/CountdownTimer";
import SectionTitle from "../Components/SectionTitle";
import PixelArt from "../Components/PixelArt";
import { useEffect } from "react";

const Home = () => {
  const hackathonDate = "2025-08-30T09:00:00";

  // Inject custom CSS only once
  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      @keyframes sway {
        0% { transform: rotate(-4deg); }
        50% { transform: rotate(4deg); }
        100% { transform: rotate(-4deg); }
      }
      .sway {
        animation: sway 2.5s ease-in-out infinite;
        transform-origin: top center;
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="screen-on">
      {/* Hero Section */}
      <section className="min-h-[90vh] flex flex-col justify-center items-center relative overflow-hidden">
        <div className="absolute top-20 right-20 hidden lg:block">
          <PixelArt type="rocket" size="xl" />
        </div>
        <div className="absolute bottom-40 left-20 hidden lg:block">
          <PixelArt type="star" size="lg" />
        </div>

        <motion.div
          className="container-custom text-center z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h1 className="text-3xl md:text-5xl lg:text-6xl mb-4 leading-tight">
            <span style={{ color: "#199b1f" }}>Hack</span>
            <span style={{ color: "#ff5c00" }}>4Maha</span>
          </h1>

          {/* Hanging Date */}
     <div className="flex justify-center items-center gap-2 md:gap-4 mb-8 font-pixel text-white text-lg md:text-2xl">
  {["30", "31st", "AUG", "2025"].map((item, index) => (
    <div
      key={index}
      className="bg-gradient-to-r   to-[#ffb347] text-white  "
    >
      {item}
    </div>
  ))}
</div>





          <motion.p
            className="text-xl md:text-2xl font-pixel mb-8 text-whitenpm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            संयोजय | नवसृज | विजयी भव{" "}
          </motion.p>
          <motion.p
            className="text-lg md:text-xl mb-12 max-w-3xl mx-auto text-[#ff5c00] font-pixel"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            Central India's 24 Hours Premiere Hackathon
          </motion.p>

          <motion.div
            className="flex flex-col md:flex-row gap-6 justify-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <Link
              to="https://hack4maharashtra.devfolio.co/"
              target="_blank"
              className="btn btn-primary border-2 border-[#597E1E] hover:bg-[#ff5c00] font-pixel py-2 px-6 transition-all duration-200"
            >
              Register Now
            </Link>
            {/* <Link
              to=""
              target="_blank"
              className="btn btn-primary border-2 border-[#597E1E] hover:bg-[#ff5c00] font-pixel py-2 px-6 transition-all duration-200"
            >
             Support Us
            </Link> */}
          </motion.div>
          <motion.div
              className="mt-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
            >
              <CountdownTimer targetDate={hackathonDate} />
            </motion.div>
        </motion.div>
      </section>

      {/* About Section Preview */}
      <section className="">
        <div className="container-custom text-[#ff5c00]">
          <div className="grid grid-cols-1 md:grid-cols-1 gap-12 items-center">
            {/* <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <div className="retro-card p-6 relative">
                <div className="absolute -top-6 -right-6 z-10">
                  <img
                    src="/img/orange.png"
                    alt="Orange Icon"
                    className="w-20 h-30 object-contain"
                  />
                </div>
                <h3 className=" font-pixel text-[#597E1E] mb-4">
                  WHAT IS HACK4MAHA?
                </h3>
                <p className="text-gray-200 mb-4">
                  Hack4Maha is a 24-hour arcade-themed hackathon where culture
                  meets code. From the forts of Shivaji Maharaj to the streets
                  of Mumbai, we honor Maharashtra’s spirit.
                </p>
                <p className="text-gray-200 mb-4">
                  In one electrifying day, tradition and tech collide to create
                  tomorrow. Hack for legacy. Build for the future.
                </p>
                <p className="text-gray-200 mb-4">
                  Hack4Maha is Maharashtra’s biggest 24-hour hackathon, where
                  technology meets tradition. Powered by NariNexus, this
                  arcade-themed hackathon celebrates the spirit of Maharashtra —
                  from the bravery echoing in the stones of Sinhagad, Raigad,
                  and Pratapgad, to the zest of Nagpur’s oranges and the
                  unstoppable creativity of Mumbai’s streets.
                </p>
              </div>
            </motion.div> */}

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-2 gap-6"
            >
              <div className="retro-card p-4 text-center">
                <h3 className="text-2xl font-pixel text-white  mb-2">24+</h3>
                <p className=" font-pixel text-sm">HOURS</p>
              </div>
              <div className="retro-card p-4 text-center">
                <h3 className="text-2xl font-pixel text-white  mb-2">350+</h3>
                <p className=" font-pixel text-sm">HACKERS</p>
              </div>
              <div className="retro-card p-4 text-center">
                <h3 className="text-2xl font-pixel text-white mb-2">25+</h3>
                <p className="font-pixel text-sm">MENTORS</p>
              </div>
              <div className="retro-card p-4 text-center">
                <h3 className="text-2xl font-pixel text-white mb-2">₹1L+</h3>
                <p className=" font-pixel text-sm">PRIZES</p>
              </div>
            </motion.div>


          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
