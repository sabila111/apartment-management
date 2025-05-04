const UserGuide = () => {
    return (
        <div className="p-6 mt-24 max-w-4xl mx-auto bg-white">
            <h2 className="text-3xl text-cyan-800 font-bold mb-4">How It Works</h2>
            <p className="mb-4 text-gray-700">Follow these simple steps to use our platform efficiently:</p>
            
            <ol className="list-decimal list-inside space-y-3 text-gray-800">
                <li><strong>Browse Apartments:</strong> Find available apartments in your preferred location.</li>
                <li><strong>Add to Wishlist:</strong> Save your favorite apartments for later.</li>
                <li><strong>Book an Apartment:</strong> Click on "Book Now" and follow the instructions.</li>
                <li><strong>Make a Payment:</strong> Go to "Make Payment" in your dashboard and confirm your booking.</li>
                <li><strong>Manage Profile:</strong> Update your personal details anytime.</li>
            </ol>

            <h3 className="text-xl font-bold mt-6 text-cyan-700">FAQs</h3>
            <p className="mt-2"><strong>Q: Can I cancel my booking?</strong></p>
            <p className="text-gray-700">A: Yes, you can cancel within 24 hours of booking.</p>
            
            <p className="mt-2"><strong>Q: How can I contact support?</strong></p>
            <p className="text-gray-700">A: Use the "Contact Us" page in the menu.</p>
        </div>
    );
};

export default UserGuide;
