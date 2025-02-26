import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";

const ContactUs = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center   text-white py-10 mt-28">
      {/* Left Section - Contact Details */}
      <div className="lg:w-1/3 bg-gradient-to-r from-cyan-700 to-cyan-500 p-8 rounded-lg shadow-lg flex flex-col gap-6">
        <h2 className="text-3xl font-bold">Contact Us</h2>
        <p className="flex items-center gap-3"><FaMapMarkerAlt /> 123 Street, Dhaka City</p>
        <p className="flex items-center gap-3"><FaEnvelope /> contact@example.com</p>
        <p className="flex items-center gap-3"><FaPhoneAlt /> +123 456 7890</p>
        
        <div className="flex gap-4 mt-4">
          <a href="#" className="text-white text-2xl"><FaFacebook /></a>
          <a href="#" className="text-white text-2xl"><FaLinkedin /></a>
          <a href="#" className="text-white text-2xl"><FaGithub /></a>
        </div>
      </div>
      
      {/* Right Section - Contact Form */}
      <div className="lg:w-2/3 bg-white text-gray-900 p-8 rounded-lg shadow-lg mt-6 lg:mt-0 lg:ml-8 w-full">
        <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
        <form className="flex flex-col gap-4">
          <input type="text" placeholder="Full Name" className="p-3 border rounded-lg" required />
          <input type="email" placeholder="Email Address" className="p-3 border rounded-lg" required />
          <textarea placeholder="Your Message" rows="4" className="p-3 border rounded-lg" required></textarea>
          <button className="bg-cyan-700 hover:bg-cyan-600 text-white font-bold py-3 rounded-lg">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
