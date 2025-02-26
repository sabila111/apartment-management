
const News = () => {
    return (
        <div className="my-14 bg-gradient-to-r from-cyan-700 to-cyan-500 min-h-96 flex justify-center items-center px-12 py-5">
            <div className="bg-white text-center p-6 w-96 md:w-[650px] lg:w-full max-w-5xl">
                <h2 className="text-2xl font-bold text-cyan-600 uppercase my-3">newsletter</h2>
                <p className="text-lg text-gray-500">Keep up with our lates Volunteer Need Posts.Subscribe to our newsletter</p>
           
                    <form className="flex justify-center gap-5 my-5">
                    <input className="bg-gray-100 w-1/2 p-5 rounded-xl" type="email" placeholder="email" required />
                    <button className="px-4 py-4 rounded-xl font-semibold text-white bg-gradient-to-r from-cyan-500 to-cyan-700 ">SUBSCRIBE</button>
                    </form>
               
            </div>
            
        </div>
    );
};

export default News;