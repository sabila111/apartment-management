import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Sophia Khan",
    role: "Apartment Owner",
    message:
      "Living in this building has been a dream come true. The amenities and community are fantastic!",
    image: "https://i.ibb.co.com/TxLQWTzr/vertical-shot-happy-dark-skinned-female-with-curly-hair.jpg",
  },
  {
    name: "David Wilson",
    role: "Real Estate Agent",
    message:
      "I’ve helped many clients find their perfect home here. The quality and design of these buildings are unmatched.",
    image: "https://i.ibb.co.com/G4q2rqcW/eVT.jpg",
  },
  {
    name: "Emily Carter",
    role: "Long-Time Resident",
    message:
      "The management team is excellent, and the location is perfect. I couldn’t ask for a better place to live.",
    image: "https://i.ibb.co.com/WpjTVYQh/ght-in.jpg",
  },
];

const Testimonial = () => {
  return (
    <div className="px-16 md:px-0 lg:px-0 py-6 text-center mt-20">
      <h2 className="text-center text-4xl font-extrabold text-cyan-700 mb-14 tracking-wide uppercase drop-shadow-md">
        What Our Residents Say
      </h2>
      

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            className="p-6 rounded-2xl shadow-lg border border-gray-300 hover:border-indigo-700 transition-all bg-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-20 h-20 mx-auto rounded-full border-4 border-cyan-700 object-cover"
            />
            <h3 className="text-lg font-semibold mt-4 text-gray-900">
              {testimonial.name}
            </h3>
            <p className="text-cyan-800 text-sm font-base">{testimonial.role}</p>
            <p className="mt-3 text-gray-700 text-sm">{testimonial.message}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;