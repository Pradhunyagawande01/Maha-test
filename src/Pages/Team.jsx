import { motion } from "framer-motion";
import { FaTwitter, FaGithub, FaLinkedinIn } from "react-icons/fa";
import SectionTitle from "../Components/SectionTitle";
import PixelArt from "../Components/PixelArt";

const TeamMember = ({ member, index }) => {
  return (
    <motion.div
      className="retro-card flex flex-col justify-between items-center p-4 bg-[#1a1a1a] rounded-xl shadow-md text-center h-full"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="relative w-full group overflow-hidden rounded-lg">
       <img
  src={member.photo}
  alt={member.name}
  className="w-full aspect-[3/4] max-h-80 object-cover rounded transition-transform duration-500 group-hover:scale-105"
/>

        <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
          <div className="flex space-x-4">
            {member.twitter && (
              <a
                href={member.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#1DA1F2]"
              >
                <FaTwitter size={20} />
              </a>
            )}
            {member.github && (
              <a
                href={member.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-300"
              >
                <FaGithub size={20} />
              </a>
            )}
            {member.linkedin && (
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-600"
              >
                <FaLinkedinIn size={20} />
              </a>
            )}
          </div>
        </div>
      </div>
      <div className="mt-4">
        <h3 className="font-pixel text-[#ff5c00] text-sm">{member.name}</h3>
        <p className="text-white text-xs italic mt-1">{member.role}</p>
      </div>
    </motion.div>
  );
};

const Team = () => {
  const teamData = {
    organizing: [
      {
        name: "Sunidhi Haware",
        role: "Operations Lead",
        photo: "/img/org/sunidhi.png",
        twitter: "https://x.com/Sunidhi_vj",
        linkedin: "https://www.linkedin.com/in/sunidhi-haware-797a97323",
      },
        {
        name: "Sujal Khade",
        role: "Lead Organizer",
        photo: "/img/org/sujal.png",
        twitter: "https://x.com/CodeTechie43?t=mTB5xj5Xm0mxEtD78UeReQ&s=09",
        linkedin: "https://www.linkedin.com/in/sujal-khade-2823a32a6",
      },
      {
        name: "Vaibhavi Mangrulkar",
        role: "Sponsorship Lead",
        photo: "/img/org/Vaibhavi.png",
        linkedin: "https://www.linkedin.com/in/vaibhavi-mangrulkar-7b0793285",
      },
      {
        name: "Pradhunya Gawande",
        role: "Technical Lead",
        photo: "/img/org/pradhunya.png",
        twitter: "https://x.com/pradhunya_patil",
        linkedin: "https://www.linkedin.com/in/pradhunya-gawande",
      },
      
      {
        name: "Kritika Rukhiyana",
        role: "Finance Lead",
        photo: "/img/org/kritika.png",
        twitter: "https://x.com/Kritika8924",
        linkedin: "https://www.linkedin.com/in/kritika-rukhiyana-65a28a307",
      },
      {
        name: "Rishu Singh",
        role: "Logistics Lead",
        photo: "/img/org/rishu.png",
        twitter: "https://x.com/rishuksingh",
        linkedin: "https://www.linkedin.com/in/rishukrsingh/",
      },
       
    ],
  };

  return (
    <div className="screen-on">
      <section className="py-20">
        <div className="container-custom">
          <SectionTitle>Meet Our Team</SectionTitle>

          <div className="relative">
            <div className="absolute -top-10 right-0 hidden xl:block">
              <PixelArt type="alien" size="lg" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {teamData.organizing.map((member, index) => (
                <TeamMember key={index} member={member} index={index} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
