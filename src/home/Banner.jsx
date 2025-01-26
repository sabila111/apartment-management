import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const Banner = () => {
    const slides = [
        { id: 1, image: "https://i.ibb.co.com/YRxQGWP/233.jpg", title: "Welcome to Our Building", subtitle: "Your one-stop building management solution." },
        { id: 2, image: "https://i.ibb.co.com/yN4vGW2/istockphoto-1401582615-612x612.jpg", title: "Effortless Management",subtitle: "Experience seamless property management." },
        { id: 3, image: "https://i.ibb.co.com/PT48NQC/9.webp", title: "Secure & Smart Living", subtitle: "Simplify your daily operations with us." },
    ];

    return (
        <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={50}
            slidesPerView={1}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            className="w-full h-[420px] mt-10"
        >
            {slides.map(slide => (
                <SwiperSlide key={slide.id} className="relative">
                    <img src={slide.image} alt={slide.title} className="w-full h-full " />
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white text-center p-6">
                        <h1 className="text-4xl md:text-5xl font-extrabold animate-fade-in">{slide.title}</h1>
                        <p className="text-lg md:text-xl mt-3 opacity-90">{slide.subtitle}</p>
                        <button className="mt-6 px-6 py-3 bg-gradient-to-r from-cyan-700 to-cyan-500 text-white text-lg font-semibold rounded-lg hover:bg-indigo-600 transition">
                            Learn More
                        </button>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default Banner;
