
const LocationSection = () => {
  return (
    <section className="py-12 px-6 bg-gray-100">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
     
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Find Your Apartment</h2>
          <p className="mt-4 text-gray-600">
            Our apartment is conveniently located in the heart of the city, offering easy access
            to shopping malls, restaurants, and public transport.
          </p>
          <h3 className="mt-6 text-xl font-semibold text-gray-700">How to Get Here</h3>
          <ul className="mt-2 text-gray-600 list-disc pl-6">
            <li>Nearest metro station: **Dhaka Metro (5 min walk)**</li>
            <li>Nearest bus stop: **Motijheel Bus Stand (2 min walk)**</li>
            <li>Airport: **30 minutes drive**</li>
          </ul>
        </div>

     
        <div className="shadow-lg rounded-lg overflow-hidden">
        <img 
  src="https://i.ibb.co.com/DfR9s9w/abstract-flat-map-city-plan-town-detailed-city-map-257312-609.jpg" 
  alt="Dhaka Location" 
  className="w-full rounded-lg shadow-md"
/>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
