import { motion } from "framer-motion";
import SectionTitle from "../Components/SectionTitle";
import PixelArt from "../Components/PixelArt";

const About = () => {
  return (
    <div className="screen-on">
      <section className="py-20">
        <div className="container-custom text-[#ff5c00]">
          <SectionTitle className="">About The Hack4Maha</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
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
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-2 gap-6"
            >
              <div className="retro-card p-4 text-center">
                <h3 className="text-2xl font-pixel text-white  mb-2">5000+</h3>
                <p className=" font-pixel text-sm">REGISTRATION</p>
              </div>
              <div className="retro-card p-4 text-center">
                <h3 className="text-2xl font-pixel text-white  mb-2">75+</h3>
                <p className=" font-pixel text-sm">PROJECT</p>
              </div>
              <div className="retro-card p-4 text-center">
                <h3 className="text-2xl font-pixel text-white mb-2">40+</h3>
                <p className="font-pixel text-sm">COMMUNITY PARTNERS</p>
              </div>
              <div className="retro-card p-4 text-center">
                <h3 className="text-2xl font-pixel text-white mb-2">20+</h3>
                <p className=" font-pixel text-sm">SPEAKERS</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/*       
      <section className="py-20 bg-space-blue/30">
        <div className="container-custom">
          <SectionTitle>The Journey</SectionTitle>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative"> */}
      {/* Timeline line */}
      {/* <div className="absolute h-full w-1 bg-cyber-yellow left-1/2 transform -translate-x-1/2"></div> */}

      {/* Timeline items */}
      {/* {[
                {
                  year: "2020",
                  title: "The Beginning",
                  description: "Hack4Maha was founded with a vision to create an inclusive platform for tech innovation in India."
                },
                {
                  year: "2021",
                  title: "Going Virtual",
                  description: "Adapted to the global pandemic by hosting our first fully virtual hackathon, reaching participants from over 15 countries."
                },
                {
                  year: "2022",
                  title: "Expanding Horizons",
                  description: "Introduced specialized tracks focused on AI, Blockchain, and Sustainable Technologies."
                },
                {
                  year: "2023",
                  title: "Community Growth",
                  description: "Built a thriving community of over 10,000 tech enthusiasts, with alumni working at top tech companies worldwide."
                },
                {
                  year: "2024",
                  title: "Global Recognition",
                  description: "Recognized as one of Asia's top hackathons, with participation from over 25 countries."
                },
                {
                  year: "2025",
                  title: "The Future",
                  description: "Set to host the biggest edition yet, with new challenges, more prizes, and unprecedented opportunities."
                }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  className={`mb-16 flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                    <div className="retro-card p-4">
                      <h3 className="font-pixel text-neon-pink text-lg mb-2">{item.year}</h3>
                      <h4 className="font-pixel text-cyber-yellow text-base mb-3">{item.title}</h4>
                      <p className="text-gray-300 text-sm">{item.description}</p>
                    </div>
                     */}
      {/* Timeline dot */}
      {/* <div className="absolute w-4 h-4 bg-neon-pink rounded-full left-1/2 transform -translate-x-1/2" style={{ top: `calc(${index * 16 + 8}rem)` }}></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section> */}

      <section className="py-20">
        <div className="container-custom">
          <SectionTitle>Why Participate</SectionTitle>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Hiring Oppportunities",
                icon: "💡",
              },
              {
                title: "Free Food For All",
                icon: "🍽️",
              },
              {
                title: "Jamming Session",
                icon: "🌈",
              },
              {
                title: "Cahs prizes",
                icon: "💰",
              },
              {
                title: "Networking",
                icon: "🌍",
              },
              {
                title: "Game Jam",
                icon: "🎮",
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                className="retro-card p-6 flex flex-col items-center text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="font-pixel text-[#ff5c00] text-lg mb-3">
                  {value.title}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
