import { motion } from 'framer-motion';
import SectionTitle from '../Components/SectionTitle';
import FaqAccordion from '../Components/FaqAccordion';
import PixelArt from '../Components/PixelArt';

const FAQ = () => {
  const generalFaqs = [
    {
      question: "What is Hack4maha and what makes it unique?",
      answer: "Hack4maha is a dynamic 24-hour in-person hackathon organized by NariNexus in Maharashtra. It’s designed to inspire creativity, foster collaboration, and push the boundaries of technology, offering an unforgettable experience for all participants. "
    },
    {
      question: "How can I participate in Hack4maha?",
      answer: "You can register through our official website. Once registered, you’ll receive further instructions and updates via email."
    },
    {
      question: "What are the eligibility criteria for participants?",
      answer: "Everyone is welcome! Whether you’re a student or a tech enthusiast, all skill levels can participate"
    },
    {
      question: "What should I bring to the hackathon?",
      answer: "Bring your laptop, charger, any software tools you need, and lots of enthusiasm! We’ll take care of food and drinks."
    },
    {
      question: "Are inter-college teams allowed to participate?",
      answer:  "Absolutely! You can form teams with participants from different colleges, universities, or backgrounds"
    },
    {
      question: "Can I participate solo?",
      answer: "No, solo participation is not allowed. "
    }
  ];

  const logisticsFaqs = [
    {
      question: "Will there be WiFi available at the venue?",
      answer: "Of course! We know how important the internet is for hacking (and surviving 😄)."
    },
    {
      question: "It’s my first hackathon. What should I know?",
      answer: "Hackathons are about more than just winning they’re fantastic for learning, networking, and having fun. Come with a learning mindset, and you’re guaranteed to gain something valuable (and have a great time)!"
    },
    {
      question: "Will there be enough charging ports available?",
      answer: "Yes, we’ll ensure every team has access to charging ports. We know how crucial this is from our own hackathon experiences!"
    },
    {
      question: "Do I need to bring food or snacks?",
      answer: "No need! We’ll provide all meals and snacks throughout the event."
    },
    {
      question: "I have already applied but my application is not approved yet. What should I do?",
      answer: "Please be patient. We’ve received a high volume of registrations and are processing applications as quickly as possible. You’ll hear from us soon!"
    },
    {
      question: "Will our travel expenses be covered?",
      answer: "While we wish we could cover all of you guy's travel expenses, we cannot reimburse for travel costs. Food and accommodation is on us for the duration of the hack."
    }
  ];

  return (
    <div className="screen-on">
      <section className="py-20">
        <div className="container-custom">
          <SectionTitle>Frequently Asked Questions</SectionTitle>

          <div className="relative">
            <div className="absolute -top-6 -right-6 z-10">
              <img
                src="/img/orange.png"
                alt="Orange Icon"
                className="w-20 h-30 object-contain"
              />
            </div>

            {/* General FAQ Section */}
            <motion.h3 
              className="font-pixel text-xl text-cyber-yellow mb-4 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              General Questions
            </motion.h3>
            <FaqAccordion faqItems={generalFaqs} />

            {/* Logistics FAQ Section */}
            <motion.h3 
              className="font-pixel text-xl text-cyber-yellow mt-12 mb-4 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Logistics & Participation
            </motion.h3>
            <FaqAccordion faqItems={logisticsFaqs} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
