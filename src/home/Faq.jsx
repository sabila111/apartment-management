
const Faq = () => {
    return (
       <div className="mt-20 pb-10 max-w-7xl mx-auto">
 <h2 className="text-center text-4xl font-extrabold text-cyan-700 mb-14 tracking-wide uppercase drop-shadow-md">Frequently Asked Questions</h2>
<div className="join join-vertical w-full">
        <div className="collapse collapse-arrow join-item border-base-300 border">
            <input type="radio" name="my-accordion-4" defaultChecked />
            <div className="collapse-title text-lg md:text-xl lg:text-xl font-medium"> What is the purpose of the testimonial section?</div>
            <div className="collapse-content">
                <p>The testimonial section showcases feedback from residents and stakeholders who have experienced living or working in our buildings. It highlights their satisfaction, the quality of our services, and the benefits of being part of our community.</p>
            </div>
        </div>
        <div className="collapse collapse-arrow join-item border-base-300 border">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-lg md:text-xl lg:text-xl font-medium">How are the testimonials collected?</div>
            <div className="collapse-content">
                <p>Testimonials are collected through surveys, interviews, and feedback forms provided to our residents and clients. We ensure that all testimonials are genuine and reflect real experiences.

</p>
            </div>
        </div>
        <div className="collapse collapse-arrow join-item border-base-300 border">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-lg md:text-xl lg:text-xl font-medium">Are there any negative testimonials or reviews?</div>
            <div className="collapse-content">
                <p> We believe in transparency and strive to provide a balanced view. While we primarily showcase positive feedback, we also address concerns and share how we’ve resolved issues to improve our services.

                </p>
            </div>
        </div>

        <div className="collapse collapse-arrow join-item border-base-300 border">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-lg md:text-xl lg:text-xl font-medium"> Can I see more detailed reviews or ratings for the buildings?</div>
            <div className="collapse-content">
                <p>Yes, we provide detailed reviews and ratings for each building on our website. You can explore individual building pages to see comprehensive feedback, including ratings for amenities, location, and management.
                </p>
            </div>
        </div>

        <div className="collapse collapse-arrow join-item border-base-300 border">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-lg md:text-xl lg:text-xl font-medium"> How often are new testimonials added?</div>
            <div className="collapse-content">
                <p>New testimonials are added regularly as we receive feedback from our residents and clients. We aim to keep the section updated to reflect the latest experiences and improvements in our buildings.
                </p>
            </div>
        </div>

    </div>

       </div>
    );
};

export default Faq;